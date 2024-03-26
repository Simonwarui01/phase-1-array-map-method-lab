const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(titleCase);
}

function titleCase(sentence) {
  return sentence.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

module.exports = {
  titleCased // Exporting the titleCased function for testing
};

// Assuming you have a function called titleCased()
const { titleCased } = require('../index.js');

describe('titleCased()', () => {
  it('returns an array with title case tutorial names', () => {
    // Your test data
    const tutorials = [
      'what does the this keyword mean?',
      'What is the Constructor OO pattern?',
      'implementing Blockchain Web API',
      'The Test Driven Development Workflow',
      'What is NaN and how Can we Check for it',
      'What is the difference between stopPropagation and preventDefault?',
      'Immutable State and Pure Functions',
      'what is the difference between == and ===?',
      'what is the difference between event capturing and bubbling?',
      'what is JSONP?'
    ];

    // Expected result (sorted in alphabetical order)
    const expected = [
      'Immutable State And Pure Functions',
      'Implementing Blockchain Web API',
      'The Test Driven Development Workflow',
      'What Does The This Keyword Mean?',
      'What Is JSONP?',
      'What Is NaN And How Can We Check For It',
      'What Is The Constructor OO Pattern?',
      'What Is The Difference Between == And ===?',
      'What Is The Difference Between Event Capturing And Bubbling?',
      'What Is The Difference Between StopPropagation And PreventDefault?'
    ].sort();

    // Call the function and sort the result
    const actual = titleCased(tutorials).sort();

    // Compare the sorted arrays
    expect(actual).to.deep.equal(expected);
  });
});