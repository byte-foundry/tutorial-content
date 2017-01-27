import course1Content from '../static/course1.md';
import course1Header from '../static/course1-header.md';
import course2Content from '../static/course2.md';
import course2Header from '../static/course2-header.md';

export default class TutorialContent {
  constructor() {
    this.one = {
      title: 'course 1',
      slug: this.slugify('course 1'),
      date: '2017-01-11',
      tags: ['petit chat', 'poil'],
      header: course1Header,
      content: course1Content,
      basics: []
    };
    this.two = {
      title: 'course 2',
      slug: this.slugify('course 2'),
      date: '2017-01-11',
      tags: ['chaton', 'mignon'],
      header: course2Header,
      content: course2Content,
      basics: [this.slugify('course 1')]
    };
  }
  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  get content() {
    return [this.one, this.two];
  }
}
