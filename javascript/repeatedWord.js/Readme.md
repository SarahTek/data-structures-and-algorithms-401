# Feature Tasks

Write a function called repeated word that finds the first word to occur more than once in a string

- Arguments: string
- Return: string

```
'use strict';

const repeatedWord = (string) => {
  let stringyArray = string.toLowerCase().split(/\W+/);
  let array1 = [];
  for (let word of stringyArray) {
    if (array1.includes(word)) {
      return word;
    } else {
      array1.push(word);
    }
  }
  return 'No matching words found';
};

module.exports = repeatedWord;
```
