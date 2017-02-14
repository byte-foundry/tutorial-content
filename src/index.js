const fm = require('front-matter');
const slug = require('slug');
const tutorials = require.context('../static/', true, /^\.\/.*\.md/);

export default class TutorialContent {
  constructor() {
    this.courseSlugs = tutorials.keys().map((file) => {
      let tutorial = fm(tutorials(file));

      this[slug(tutorial.attributes.title)] = {
        title: tutorial.attributes.title,
        slug: slug(tutorial.attributes.title),
        ogDescription: tutorial.attributes.ogDescription,
        ogImage: tutorial.attributes.ogImage,
        subtitle: tutorial.attributes.subtitle,
        date: tutorial.attributes.date,
        readingTime: tutorial.attributes.readingTime,
        tags: tutorial.attributes.tags ? tutorial.attributes.tags : [],
        basics: tutorial.attributes.basics ? 
        tutorial.attributes.basics.map((basic => ({title: basic, slug: slug(basic)}))) : 
        [],
        published: tutorial.attributes.published,
        reward: tutorial.attributes.reward,
        header: tutorial.attributes.header,
        content: tutorial.body
      };
      return slug(tutorial.attributes.title);
    });
  }
  get content() {
    return this.courseSlugs.map((slug) => this[slug]);
  }
}
