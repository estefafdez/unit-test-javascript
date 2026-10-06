// Writes reports/junit.xml in CI so the results can be published on the pull request.
if (process.env.CI) {
  const { JUnitXmlReporter } = require('jasmine-reporters');
  jasmine.getEnv().addReporter(
    new JUnitXmlReporter({ savePath: 'reports', consolidateAll: true, filePrefix: 'junit' })
  );
}
