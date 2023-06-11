//
// utils.jest.config.js
//
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js
  // and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: {
    name: 'utils',
    color: 'green',
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  // if using TypeScript with a baseUrl set to the root directory then you need 
  // the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/config/__mocks__/file-mock.js`,
  },
  passWithNoTests: true,
  rootDir: '../../',
  setupFiles: [`<rootDir>/config/jest/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/config/jest/jest.setup.js`, `jest-extended/all`],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [`/node_modules/`, `/.cache/`, `/public/`, `/__specs__/`, `/specs/`, `/cdk/`],
  testMatch: [`<rootDir>/utils/**/?(*.)+(test).[jt]s?(x)`],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/config/jest/jest-preprocess.js`,
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  verbose: true,
}

// createJestConfig is exported this way to ensure that next/jest can load
/// the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
