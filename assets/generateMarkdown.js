// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache 2.0 License":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "No License":
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Boost Software License 1.0":
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache 2.0 License":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "No License":
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + "<br>" + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}\n

# ${capitalize(data.title)}

## Description

${data.description.charAt(0).toUpperCase() + data.description.slice(1)}

## Table of Contents
${generateToc(data.toc)}

## Installation

\`\`\`${data.install}\`\`\`

## Usage
${capitalize(data.usage)}

## Credits

${capitalize(data.credits)}

## License 
${
  data.license === `No License`
    ? ""
    : `This application is covered under :

${renderLicenseSection(data.license)} `
}\n


## Contributing

${capitalize(data.contribute)}

## Tests

${capitalizeInstructions(data.tests)}

## Questions

You can reach the project ownner at: 

**${capitalize(data.name)}**\n
 
* [Github](https://github.com/${data.github})
* [Email](mailto:${data.email})


`;
}

//Function to capitalize case every first letter in a string
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    })
    .join(" ");
}

// function to return one word in TOC markdown format
function generateToc(str) {
  return str
    .split(" ")
    .map((item) => `* [${capitalize(item)}](#${item.toLowerCase()})\n`)
    .join("");
}

//function to capitalize first letter of instructions and return every instruction on a new line
function capitalizeInstructions(str) {
  return str
    .split("-")
    .map((item) => `* ${capitalize(item)}\n`)
    .join("");
}

module.exports = generateMarkdown;
