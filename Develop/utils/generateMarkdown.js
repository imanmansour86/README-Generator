// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${transform(data.title)}
  ## Description.\n
  ${data.description.charAt(0).toUpperCase() + data.description.slice(1)}
  ## Table of Contents\n

  ${generateToc(data.toc)}
  





  ## Installation\n
   ${data.install}
  ## Usage\n
  ${data.usage}
  ## Credits\n
  ${data.credits}

  ## License\n
   ${data.license}

   ## Badges\n
   ${data.badges}
   ## Contributing\n
${data.contribute}
## Tests\n
  ${data.tests}

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
  const singleWord = transform(str);
  return singleWord
    .split(" ")
    .map((item) => `* [${item}](#${item})\n`)
    .join("\n");
}

module.exports = generateMarkdown;
