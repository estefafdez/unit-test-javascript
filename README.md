# unit-test-javascript

Example of a simple project with unit tests using JavaScript and [Jasmine](https://jasmine.github.io/). The tests cover a small calculator (`Calculator.js`) with add, subtract, multiply and divide.

## Requirements

- [Node.js](https://nodejs.org/) and npm

## Run the tests

Install the dependencies and run Jasmine:

```bash
npm install
npm test
```

The specs live in `spec/` and are configured in `spec/support/jasmine.json`. The numbers used by each test are random, so every run uses different values.

## Run the tests in the browser

Open `index.html` in a browser. It loads Jasmine from a CDN, then `Calculator.js` and the specs, and shows the results on the page.

## Project structure

```
Calculator.js            # Code under test
spec/test.spec.js        # Jasmine specs
spec/helpers/            # Helpers loaded before the specs when running with Node.js
spec/support/jasmine.json
index.html               # Browser test runner
```
