module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  setupFiles: ['dotenv/config'],
};
