module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/app/tests/jest.setup.js',
    '<rootDir>/src/app/tests/setup-tests.js'
  ],
  testEnvironment: 'jsdom'
};
