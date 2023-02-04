import { describe, expect, it } from 'vitest'
import { countMode } from './count'


const animals = [{ name: 'lylu'}, { name: 'aau'}]

const people = [
  { name: 'george', animals: [animals[0]] },
]

const countries = [
  {
    name: 'empty',
    people: []
  },
  {
    name: 'working',
    people,
  }
]

describe('Count', () => {
  it('test', () => {
    expect(countMode(countries)).toEqual([{
      name: 'working [1]',
      people: [
        {
          name: 'george [1]',
          animals: [animals[0]]
        }
      ],
    }])
  })
})