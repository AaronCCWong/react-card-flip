const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/tools/jest/jest.preprocess.js'
  },
  // ignore node_modules
  testPathIgnorePatterns: [`node_modules`],

  // display tests with description
  verbose: true,

  testURL: 'http://localhost/',
  // configure Enzyme
  setupFiles: ['./tools/jest/jest.setup'],

  collectCoverageFrom: ['src/*.tsx']
};
