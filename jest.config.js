// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  roots: ["<rootDir>/src"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    // 'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@react-navigation|@rneui)/)'
    "/node_modules/(?!chartjs-adapter-date-fns).+\\.js$"
  ],
  // You can also add additional configuration options as needed
};
