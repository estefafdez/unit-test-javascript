# unit-test-javascript

[![CI](https://github.com/estefafdez/unit-test-javascript/actions/workflows/ci.yml/badge.svg)](https://github.com/estefafdez/unit-test-javascript/actions/workflows/ci.yml)
![Coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Festefafdez%2Funit-test-javascript%2Fbadges%2Fcoverage.json)

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

## Code coverage

```bash
npm run test:coverage
```

This runs the specs with [c8](https://github.com/bcoe/c8) and prints the coverage of `Calculator.js` in the terminal. An HTML report is written to `coverage/lcov-report/index.html`. CI also posts the test results as a comment on each pull request and updates the coverage badge above on every push to `main`.

## Run the tests in the browser

Open `index.html` in a browser. It loads Jasmine from a CDN, then `Calculator.js` and the specs, and shows the results on the page.

## Project structure

```
Calculator.js            # Code under test
spec/test.spec.js        # Jasmine specs
spec/calculator.examples.spec.js  # Fixed-value, data-driven and spy examples
spec/helpers/            # Helpers loaded before the specs when running with Node.js
spec/support/jasmine.json
index.html               # Browser test runner
```
