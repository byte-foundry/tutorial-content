# Tutorial-Content

This repository hosts the content of the Prototypo Academy - A numbers of tutorials made for the users of Prototypo, teaching them stuff about the App, its features and a lot more.

## Why the hell would you make a library for that?

I had to face a challenge: the tutorials had to be written quickly and easily, and this feature had to be shipped as fast as possible in order to let people work on the content.

This content is used simultaneously on two platform: 

- A PHP website (with Kirby as a CMS)
- A React app

Writing all the tutorials on the website and on the app (which has no CMS whatsoever) would have been a tedious task. It's better to write the content once, then ship it everywhere.

That's the purpose of this library. The content has to be written only once in markdown and placed into the content folder, and build it!

The build process generates two things:

- A JS UMD library which is imported on the React app
- A static files folder, copied on the website and containing Kirby-flavored text files.

To summarize:

- Write your content on markdown, including the YAML font-matter meta tags
- Build it (using webpack)
- Rebuild the app and the website, installing the new library version
- Done!



## Making a sense of this code-base

This application is written in JS (ES2015). It uses:

- Webpack for building
- Babel for transpiling
- Eslint for code linting

Being familiar with those tools is recommended before diving into this repository.

### The *src* folder

The *src* folder is the main folder of this repository. It contains two files, none should be modified to add a new course:

- **Index.js**:  This file contains an object `TutorialContent` which import the markdown content of all the courses, parse them and offers a getter in order to get the content and the additional information
- **prepare-kirby.js**:  a post-build script that require the final library, generating the kirby static files. It erases everything in the libKirby folder and generates the new files getting the information from the UMD library.

### The *static* folder

The *static* folder contains the markdown files for the course. Only one markdown file is needed per course.

### The *lib* and *libKirby* folder

The *lib* folder contains tutorial-content.js which is used in the App. To get the new content on the app, just install the new version of tutorial-content onto Prototypo, and rebuild the app.

The *libKirby* folder contains one folder per course, all copied using gulp in the Prototypo Website library. No actions except copying them is needed to get them working on the website.

### Coding style and conventions

Please install an ESLint and Editorconfig plugin for your code editor.
Most coding rules are enforced by our eslint config. 

### Test Coverage

TBD :(