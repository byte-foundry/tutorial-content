var fs = require('fs-extra');

var TutorialContent = require('../lib/tutorial-content.js');

var content = new TutorialContent().content;

var path = require('path');

var compare = function compare(a, b) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};

content.sort(compare);
content.map(function (course, index) {
  // copy kirby images
  fs.copy("".concat(__dirname, "/../content/").concat(course.title), "".concat(__dirname, "/../libKirby/").concat(index + 1, "-").concat(course.slug), {
    filter: function filter(n) {
      if (path.extname(n) !== '.md') {
        console.log("copied : ".concat(n));
        return true;
      }

      return false;
    }
  }, function (err) {
    if (err) return console.error(err);
  }, function () {
    return console.log('done');
  });
});