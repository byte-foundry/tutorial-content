const fm = require('front-matter');
const getSlug = require('speakingurl');
const tutorials = require.context('../content/', true, /^\.\/.*\.md/);

export default class TutorialContent {
  constructor() {
    this.courseSlugs = tutorials.keys().map((file) => {
      let tutorial = fm(tutorials(file));
      const {title, ogDescription, ogImage, headerImage, subtitle, date, readingTime, tags = [],
         published, reward, header, isVideo, objective} = tutorial.attributes;

      this[getSlug(title)] = {
        title,
        slug: getSlug(tutorial.attributes.title),
        ogDescription,
        ogImage,
        headerImage,
        subtitle,
        date,
        readingTime,
        tags,
        basics: tutorial.attributes.basics ? 
        tutorial.attributes.basics.map((basic => ({title: basic, slug: getSlug(basic)}))) : 
        [],
        published,
        reward,
        header,
        content: tutorial.body,
        isVideo,
        objective
      };
      return getSlug(title);
    });
  }
  get content() {
    return this.courseSlugs.map((slug) => this[slug]);
  }
}
