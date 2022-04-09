const reporter = require('cucumber-html-reporter')

// theme options:
// bootstrap (typical), hierarchy, foundation, simple

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
}

reporter.generate(options)
