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

## How to write a course

### Starting up

To start with a new course, you have to create a folder for it that **have** to match the exact title of your file. Then you put your markdown file inside and you're ready to write!

### Metadatas

We use yaml front-matter to get extra data for the course, like the reading time, the rewards and so on, so it's best for you to use an existing course to write yours in order to get everything right.

I'll go through all metadata to explain them

- **title**: self explanatory, the title of the course. Be sure to check if the title matck the folder name, especially if you put local images on the folder.
- **ogDescription**: used on the website for referencing
- **ogImage** used on the website for referencing as well, it's best to put there an hosted image, on website like imgur.
- **headerImage**: the image you'll see on the academy homepage, on both the app and the website
- **subtitle**: the course description that will be on the academy homepage
- **date**: used to sort the courses on the website.
- **tags**: used to filter the courses. Don't use them lihe hashtags! Keep a small number of tags across all courses to get the filtering process easier for the user
- **readingTime**: a rough estimate of the course reading time
- **basics**: if you want to reference one of more course to read before yours (like prerequisites), put the title of these course here, with the same syntax as the tags.
- **isVideo**: if your course only contains a video, or is based around a single video, put this as true.
- **objective**: a small line which summarize the purpose of this course. This will be visible on the app and will be preceeded by tomething like *you learned how to* **YOUR OBJECTIVE**.
- **published** If you want your course visible or not.
- **reward** If your course has a reward, otherwise leave it blank.
- **header**: The header text of your course. It can be similar to the subtitle metatag. You can write markdown here, but preceed it with a `|` then a linebreak.

### The content

#### Markdown

You can use all the markdown syntax in your course content. 
[You can see a markdown cheatsheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### Html

Basics html tags like `<sup>`, `<pre>`, `<kbd>` can also be used.

#### Images

You can reference image both remotely (an http link referencing an online image) or locally (just put your image in your course folder and put the image name in your markdown image tag)

#### Videos

You can put iframe links from websites like youtube into your course and it will be displayed as expected.

#### Specific academy content

In the Protoypo academy, we use the `H2` titles as a specific manner. You should put H2 titles only for the main parts of your course, and stay with `H3` and below to structure your parts.

H1 should be reserved for course titles, but it's not mandatory to put one as the title (from the metatag) is already displayed in the page

## Adding a course

If you're not used to work with *forks*, *branchs*, and *pull requests*, don't worry, everything can be done here on github, you just have to be logged into your account.

### Prerequisites

To add a course, you should write your `.md` file using a markdown editor. There are many awesomes markdown editors available for free online, and I recommend [Typora](http://www.typora.io) for Windows and [MacDown](https://macdown.uranusjr.com) for MacOs.
The **How to write a course** section above is a great resource to help you structure your course file

### Creating your pull request

1. Go to the ***content*** folder of this repository
   ![image 1](http://i.imgur.com/YKcRSAq.png)
2. Create a folder **that matches the title of your course** containing the markdown files and your images (if you have any) and drag it into the github window
   ![image 2](http://i.imgur.com/DgQfVFd.png)
3. Check if all your files are uploaded, put the name of your pull request and its description and tick ***Create a new branch for this commit and start a pull request***
   You should name your branch `course/mycoursename`
   ![image3](http://i.imgur.com/cq9AlfF.png)
4. Click on ***Create pull request*** and you're done! We will review your submission as soon as we can.
   ![image4](http://i.imgur.com/L0Flcqr.png)
   Thanks for contributing!

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
- **copy-assets.js**:  a post-build script that require the final library and copy all the tutorial assets in the right libKirby folder.

### The *content* folder

The *content* folder contains the markdown files for the course. Only one markdown file and the relative images are needed per course.

### The *lib* and *libKirby* folder

The *lib* folder contains tutorial-content.js which is used in the App. To get the new content on the app, just install the new version of tutorial-content onto Prototypo, and rebuild the app.

The *libKirby* folder contains one folder per course, all copied using gulp in the Prototypo Website library. No actions except copying them is needed to get them working on the website.

## Coding style and conventions

Please install an ESLint and Editorconfig plugin for your code editor.
Most coding rules are enforced by our eslint config. 

## Test Coverage

TBD :(