const { resolve } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');

const ROOT_DIR = process.cwd();
const TS_CONFIG = require(`${ROOT_DIR}/tsconfig.json`);
const tsconfig = require(TS_CONFIG);
const CI = !!process.env.CI;

module.exports = {
  transform: { '^.+\\.tsx$': 'babel-jest' },
  testEnvironment: 'node',
  rootDir: ROOT_DIR,
  restoreMocks: true,
  reporters: ['default'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: `${ROOT_DIR}/`,
  }),
  cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
  collectCoverage: true,
  testTimeout: 20000,
  snapshotFormat: {
    escapeString: false,
    printBasicPrototype: false,
  }
}