module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-global',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  setupFilesAfterEnv: ['esm'],
};
