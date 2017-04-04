const fm = require('front-matter');
const slug = require('slug');
const tutorials = require.context('../content/', true, /^\.\/.*\.md/);
const images = require.context('../content/', true, /^\.\/.*\.(jpg|jpeg|gif|png|bmp)/);

export default class TutorialContent {
  constructor() {
    this.courseSlugs = tutorials.keys().map((file) => {
      let tutorial = fm(tutorials(file));
      const {title, ogDescription, ogImage, headerImage, subtitle, date, readingTime, tags = [],
         published, reward, header, isVideo, objective} = tutorial.attributes;

      this[slug(title)] = {
        title,
        slug: slug(tutorial.attributes.title),
        ogDescription,
        ogImage,
        headerImage,
        subtitle,
        date,
        readingTime,
        tags,
        basics: tutorial.attributes.basics ? 
        tutorial.attributes.basics.map((basic => ({title: basic, slug: slug(basic)}))) : 
        [],
        published,
        reward,
        header,
        content: tutorial.body,
        isVideo,
        objective
      };
      return slug(title);
    });
  }
  get content() {
    return this.courseSlugs.map((slug) => this[slug]);
  }
  getImage(slug, filename) {
    return images(`./${slug}/${filename}`);
  }
}
