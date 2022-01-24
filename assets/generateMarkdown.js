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
      return ` `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Boost Software License 1.0":
      return `https://choosealicense.com/licenses/bsl-1.0/`;
    case "MIT":
      return `https://choosealicense.com/licenses/mit/`;
    case "Apache 2.0 License":
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case "No License":
      return ` `;
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
# ${transform(data.title)}

## Description

${data.description.charAt(0).toUpperCase() + data.description.slice(1)}

## Table of Contents

${generateToc(data.toc)}

## Installation

\`\`\`${data.install}\`\`\`

## Usage
${transform(data.usage)}

## Credits

${transform(data.credits)}

## License
This project is licensed under the ${data.license}\n
   ${renderLicenseSection(data.license)}

## Contributing

${transform(data.contribute)}

## Tests

${transform(data.tests)}

## Questions

You can reach the project ownner at: 

**${transform(data.name)}**\n
 
* [Github](https://github.com/${data.github})
* [Email](mailto:${data.email})


`;
}

//Function to upper case every letter in a string
function transform(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

// function to return one word in TOC markdown format
function generateToc(str) {
  // const singleWord = transform(str);
  return str
    .split(" ")
    .map((item) => `* [${transform(item)}](#${item.toLowerCase()})\n`)
    .join("");
}

module.exports = generateMarkdown;
