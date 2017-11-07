var fs = require('fs-extra');

var TutorialContent = require('../lib/tutorial-content.js');

var content = new TutorialContent().content;

var compare = function compare(a, b) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};

content.sort(compare); // clean libKirby directory

fs.emptyDir("".concat(__dirname, "/../libKirby"), function (err) {
  if (err) return console.error(err);
  content.map(function (course, index) {
    // create course folder
    fs.mkdir("".concat(__dirname, "/../libKirby/").concat(index + 1, "-").concat(course.slug), function () {
      // create text file
      var fileContent = "\nTitle: ".concat(course.title, "\n\n\n----\n\n\nOgdescription: ").concat(course.ogDescription, "\n\n\n----\n\n\nOgimage: ").concat(course.ogImage || course.headerImage, "\n\n\n----\n\n\nHeaderimage: ").concat(course.headerImage, "\n\n\n----\n\n\n").concat(course.tags && course.tags.length > 0 ? 'Tags: ' + course.tags.map(function (tag, index) {
        return tag;
      }) : '', "\n\n\n----\n\n\n").concat(course.basics && course.basics.length > 0 ? 'Basicsurl: ' + course.basics.map(function (basic, index) {
        return basic.slug;
      }) : '', "\n\n----\n\n\n").concat(course.basics && course.basics.length > 0 ? 'Basicstitle: ' + course.basics.map(function (basic, index) {
        return basic.title;
      }) : '', "\n\n----\n\n\nDate: ").concat(course.date.toJSON(), "\n\n\n----\n\n\nReadingtime: ").concat(course.readingTime, "\n\n\n----\n\n\nPublished: ").concat(course.published, "\n\n\n----\n\n\nIsvideo: ").concat(course.isVideo, "\n\n\n----\n\n\nReward: ").concat(course.reward, "\n\n\n----\n\n\nSubtitle: ").concat(course.subtitle, "\n\n\n----\n\n\nHeader:\n").concat(course.header, "\n\n\n----\nContentcourse:\n").concat(course.content.replace(/\!\[(.*?)\]\((.*?)\)/g, '(image:$2)\n').replace(/\(\/academy\/course\/(.*?)\)/g, '(/academy/$1)').replace(/.*?<video((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>.*<\/video>/g, function (tag, attributeStr) {
        var getAttributes = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;
        var regexResult;
        var returnstring = '(videoext:';

        while ((regexResult = getAttributes.exec(attributeStr)) !== null) {
          returnstring = "".concat(returnstring, " ").concat(regexResult[1], ":").concat(regexResult[2]);
        }

        returnstring = "".concat(returnstring, " )");
        return returnstring.replace(/(type:video\/)(\S*)/g, function (match, prev, type) {
          return "".concat(type, ":");
        }).replace(/(src:)/g, '');
      }), "\n");
      fs.writeFile("".concat(__dirname, "/../libKirby/").concat(index + 1, "-").concat(course.slug, "/academycourse.txt"), fileContent, function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("File - ".concat(__dirname, "/../libKirby/").concat(index + 1, "-").concat(course.slug, "/academycourse.txt was saved!"));
      });
    });
  });
});