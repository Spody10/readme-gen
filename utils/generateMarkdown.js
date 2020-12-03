// Switch statment to locate license badge
const generateBadges = licenseBadge => {
	let result = '';

	switch (licenseBadge) {
		case 'MIT':
			result = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellowgreen)](https://opensource.org/licenses/MIT)
      `;
			break;
		case 'Eclipse':
			result =
				'[![License](https://img.shields.io/badge/License-Eclipse-yellow)](https://opensource.org/licenses/EPL-1.0)';
			break;
		case 'IBM':
			result =
				'[![License: IPL 1.0](https://img.shields.io/badge/License-IBM-red)](https://opensource.org/licenses/IPL-1.0)';
			break;
		case 'Mozilla':
			result =
				'[![License: MPL 2.0](https://img.shields.io/badge/License-Mozilla-orange)](https://opensource.org/licenses/MPL-2.0)';
			break;
		case 'Boost':
			result =
				'[![License](https://img.shields.io/badge/License-Boost-green)](https://www.boost.org/LICENSE_1_0.txt)';
			break;
		case 'Apache':
			result =
				'[![License](https://img.shields.io/badge/License-Appache-brightgreen)](https://opensource.org/licenses/Apache-2.0)';
			break;
		default:
			result = '';
	}

	return result;
};
const generateAboutSect = aboutInput => {
  if (!aboutInput) {
    return '';
  }
  return `
  ## About 
  ${aboutInput}
  `;
};
const generateTestSect = testingInput => {
  if (!testingInput) {
    return '';
  }
  return `
  ## Tests
  `;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${generateBadges(data.license)}

  ## Description
  ${data.description}

  ## Deployed
  ### Website
  ${data.website}
  ### Repository
  ${data.repository} 

  ### Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions) 
  - [About](#about)
  - [Tests](#tests)

  ## Usage
  ${data.use}

  ## Installation

  * To install ${data.title} and use, clone project to local repo. 
  * Open in your text editor (Visual Studio, etc.)
  * Run "npm init" from the command line of editor, making sure the file path is in the root of the project directory. Follow prompts from .json package.
  * Next, run "npm install inquirer" from the command line. This will install the "inquirer" package into a node_modules folder.
  * Finally, to run the program, type "node index" on the command line.

  ## Contributions

  ${data.contributors}
  
  ## License

  ${data.license} ${generateBadges(data.license)}

  For information on licenses, click on the badge icons. 

  ## Questions

  Hello, my nam is ${data.name}. If you have any questions about this project, or any other repositories of mine at (${data.github}), feel free to write me at ${data.email}. Thanks!

  ${generateAboutSect (data.about)}

  ${generateTestSect (data.testing)}

`;
};

module.exports = generateMarkdown;
