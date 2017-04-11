let fs = require('fs-extra');
let TutorialContent = require('../lib/tutorial-content.js');
let content = new TutorialContent().content;
let path = require('path');

content.map((course, index) => {
  // copy kirby images
  fs.copy(
    `${__dirname}/../content/${course.title}`,
    `${__dirname}/../libKirby/${index + 1 }-${course.slug}`,
    {
      filter: n => {
        if (path.extname(n) !== '.md') {
          console.log(`copied : ${n}`);
          return true;
        }
        console.log(`skipped : ${n}`);
        return false;
      }
    }, err => {
    if (err) return console.error(err);
  }, () => console.log('done'));
});

