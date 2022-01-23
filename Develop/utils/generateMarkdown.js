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
  ## ${data.description}
  ## ${data.toc}
  ## ${data.install}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.contribute}
  ## ${data.tests}
  ## ${data.questions}
`;
}

//function to upper case every letter in a string
function transform(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

module.exports = generateMarkdown;
