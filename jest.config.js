module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testMatch: [
    '**/?(*.)tests.ts?(x)'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
    "~/(.*)": "<rootDir>/src/$1"
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}
