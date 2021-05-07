// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.License;
  let licenseString = '';
  if (licenseType === 'APACHE'){
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (licenseType === 'GNU'){
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (licenseType === 'IBM'){
    licenseString = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (licenseType === 'MIT'){
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  return licenseString
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Content
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#test)
7. [Questions](#qontact)

## Description 
${data.Description}

## Installation 
${data.Installation}

## Usage
${data.Usage}

## License
${renderLicenseBadge(data)}

## Contributing 
${data.Contributing}

## Tests
${data.Tests}

## Questions 

-Github: [GitHub](http://www.github.com/${data.Github})  
-Email: ${data.Email}
`
}

module.exports = generateMarkdown;
