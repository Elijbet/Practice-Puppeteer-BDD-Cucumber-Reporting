##BDD, TDD, Cucumber, Gherkin

BDD is Behavior Driven Development, another approach to TDD.
**Central to the Cucumber BDD approach is its ordinary language parser called Gherkin.** It allows expected software behaviors to be specified in a logical language that customers can understand.

This allows also non-technical people, such as product owners and testers, to specify scenarios using plain English.
And developers can develop code which is executed under every plain sentence written in Girkins syntax.

Cucumber proposes to write scenario in the **Given/When/Then format**.

**A Feature File is an entry point to the Cucumber tests.** This is a file where you will describe your tests in Descriptive language (Like English). It is an essential part of Cucumber, as it serves as an automation test script as well as live documents. A feature file can contain a scenario or can contain many scenarios in a single feature file but it usually contains a list of scenarios. The implementation of these steaps is carried out with cucumber.js and puppeteer.

When you execute a feature file, it goes through all of your steps.js files and matches it against Gherkin feature steps with regex and executes them when matched. 
