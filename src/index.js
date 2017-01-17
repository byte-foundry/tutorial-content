import course1 from '../static/course1.md';
import course1Header from '../static/course1-header.md';

export default class TutorialContent {
  constructor() {
  }
  get content() {
    return [
      {
        header: course1Header,
        content: course1,
        name: 'course1'
      },
      {
        header: course1Header,
        content: course1,
        name: 'course1'
      },
      {
        header: course1Header,
        content: course1,
        name: 'course1'
      },
      {
        header: course1Header,
        content: course1,
        name: 'course1'
      }
    ];
  }
}
