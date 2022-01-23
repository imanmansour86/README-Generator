// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    //project title
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    //section Description
    type: "input",
    message: "What is your user project description ?",
    name: "description",
  },
  {
    //section TOC
    type: "input",
    message: "What is your Table of Contents ?",
    name: "toc",
  },
  {
    //section Installation
    type: "input",
    message: "What are your installation steps ?",
    name: "install",
  },
  {
    //section usage
    type: "input",
    message: "What is your app usage ?",
    name: "usage",
  },
  {
    type: "list",
    message: "What is your app license ?",
    name: "license",
    choices: ["BSD", "MIT", "GPL"],
  },
  {
    //section Contributing
    type: "input",
    message: "What is your app Contributing guidelines ?",
    name: "contribute",
  },
  {
    //section Tests
    type: "input",
    message: "What is your app test instructions ?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your app questions ?",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeText = generateMarkdown(data);
  console.log("rearMeText is ", readMeText);
  fs.writeFile(fileName, readMeText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
