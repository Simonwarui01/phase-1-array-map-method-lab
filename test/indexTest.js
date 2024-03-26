const chai = require('chai');
global.expect = chai.expect;
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code;

jsdom({
  html,
  src
});

// Import the titleCased function from index.js
const { titleCased } = require('../index.js');

describe('titleCased()', () => {
  it('returns an array with title case tutorial names', () => {
    // Your test code here...
  });
});