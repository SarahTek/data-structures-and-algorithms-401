'use strict';

const repeatedWord = require('./repeatedWord');

describe('Testing our repeatedWord function', () => {

  const testString = 'The ballon rose up, up and away into the sky';

  test('Should return the first matching word in a string', () => {
    let word = repeatedWord(testString);
    expect(word).toEqual('up');
  });

  test('return duplicate word', () => {
    let word = repeatedWord('clap clap');
    expect(word).toEqual('clap');
  });

  test('Should return No matching words found when there is not a duplicate word', () => {
    let word = repeatedWord('Hello there, my name is Sarah');
    expect(word).toEqual('No matching words found');
  });
});
