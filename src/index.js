import course1Content from '../static/course1.md';
import course1Header from '../static/course1-header.md';
import course2Content from '../static/course2.md';
import course2Header from '../static/course2-header.md';

export default class TutorialContent {
  constructor() {
  }
  get content() {
    return [
      {
        title: 'course1',
        date: '2017-01-11',
        tags: 'Petit chat,poils',
        header: course1Header,
        content: course1Content
      },
      {
        title: 'course2',
        date: '2017-01-11',
        tags: 'chaton,mignon',
        header: course2Header,
        content: course2Content
      }
    ];
  }
}
