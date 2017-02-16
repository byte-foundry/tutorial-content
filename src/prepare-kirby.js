let fs = require('fs');
let TutorialContent = require('../lib/tutorial-content.js');
let content = new TutorialContent().content;
let deleteFolderRecursive = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      let curPath = path + '/' + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

// clean libKirby directory
deleteFolderRecursive(`${__dirname}/../libKirby`);
// recreate it and loop through the courses
fs.mkdir(`${__dirname}/../libKirby`, () => {
  content.map((course, index) => {
    // create course folder
    fs.mkdir(`${__dirname}/../libKirby/${index + 1 }-${course.slug}`, () => {
      // create text file

      let fileContent = `
Title: ${course.title}
 
 
----
 
 
Ogdescription: ${course.ogDescription}
 
 
----
 
 
Ogimage: ${course.ogImage}
 
 
----


Headerimage: ${course.headerImage}


----
 

${course.tags && course.tags.length > 0 ? ('Tags: ' + course.tags.map((tag, index) => tag)) : ''}
 
 
----
 

${course.basics && course.basics.length > 0 ? ('Basicsurl: ' + course.basics.map((basic, index) => basic.slug)) : ''}
 
----
 

${course.basics && course.basics.length > 0 ? ('Basicstitle: ' + course.basics.map((basic, index) => basic.title)) : ''}
 
----
 
 
Date: ${course.date}
 
 
----


Readingtime: ${course.readingTime}
 
 
----


Published: ${course.published}


----


Reward: ${course.reward}


----


Subtitle: ${course.subtitle}


----
 
 
Header:
${course.header}
 
 
----
Contentcourse:
${course.content}
`;

      fs.writeFile(
        `${__dirname}/../libKirby/${index + 1 }-${course.slug}/academycourse.txt`
        , fileContent, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(`File - ${__dirname}/../libKirby/${index + 1 }-${course.slug}/academycourse.txt was saved!`);
      });
    });
  });
});

