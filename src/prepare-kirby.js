let fs = require('fs-extra');
let TutorialContent = require('../lib/tutorial-content.js');
let content = new TutorialContent().content;
let path = require('path');

// clean libKirby directory
fs.emptyDir(`${__dirname}/../libKirby`, err => {
  if (err) return console.error(err);

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


Isvideo: ${course.isVideo}


----


Reward: ${course.reward}


----


Subtitle: ${course.subtitle}


----
 
 
Header:
${course.header}
 
 
----
Contentcourse:
${course.content.replace(/\!\[(.*?)\]\(/g, '(image: ')
  .replace(/.*?<video((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>.*<\/video>/g, 
  ((tag, attributeStr) => {
    let getAttributes = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;
    let regexResult;
    let returnstring = '(videoext:';

    while ((regexResult = getAttributes.exec(attributeStr)) !== null) {
      returnstring = `${returnstring} ${regexResult[1]}:${regexResult[2]}`;
    }
    returnstring = `${returnstring} )`;
    return returnstring.replace(/(type:video\/)(\S*)/g, (match, prev, type) => {return `${type}:`;})
    .replace(/(src:)/g, '');
  }))}
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

