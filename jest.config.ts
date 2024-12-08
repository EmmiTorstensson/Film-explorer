import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Gör om TypeScript till JavaScript
    '^.+\\.(js|jsx)$': 'babel-jest', // För JavaScript-filer
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Om du använder CSS-moduler
  },
};

export default config;
