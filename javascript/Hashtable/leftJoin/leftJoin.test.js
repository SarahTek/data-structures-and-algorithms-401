'use strict';
const join = require('./leftJoin');

describe('join()', () => {
  it('Returns 2D array of right map joined to left map', () => {
    const left = new Map([
      ['fond', 'enamored'],
      ['wrath', 'anger'],
      ['diligent', 'employed'],
      ['outfit', 'garb'],
      ['guide', 'usher']
    ])
    const right = new Map([
      ['fond', 'averse'],
      ['wrath', 'delight'],
      ['diligent', 'idle'],
      ['guide', 'follow'],
      ['flow', 'jam']
    ])
    const output = new Map([
      ['fond', ['enamored', 'averse']],
      ['wrath', ['anger', 'delight']],
      ['diligent', ['employed', 'idle']],
      ['outfit', ['garb', null]],
      ['guide', ['usher', 'follow']]
    ])
    expect(join(left, right)).toStrictEqual(output)
  })
})
