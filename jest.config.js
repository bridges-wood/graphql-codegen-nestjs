import { resolve } from 'path';
const ROOT_DIR = process.cwd();
const CI = !!process.env.CI;

export default {
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  testEnvironment: 'node',
  rootDir: ROOT_DIR,
  restoreMocks: true,
  reporters: ['default'],
  modulePathIgnorePatterns: ['dist', '.bob'],
  cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
  setupFiles: [`${ROOT_DIR}/dev-test/setup.js`],
  collectCoverage: true,
  testTimeout: 20000,
  resolver: './node_modules/bob-the-bundler/jest-resolver.cjs',
  snapshotFormat: {
    escapeString: false,
    printBasicPrototype: false,
  },
}