/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'node',
  injectGlobals: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = config
