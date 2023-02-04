import { describe, expect, it } from 'vitest'
import { filterAnimalsFromCriteria, filterFromCriteria } from './filter'


const animals = [{ name: 'lylu'}, { name: 'aau'}]

const people = [
  { name: 'george', animals: [animals[0]] },
  { name: 'albert', animals: [animals[1]] },
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

describe('Filter tests', () => {
  it('Should retrieve animal names from containing criteria', () => {
    expect(filterAnimalsFromCriteria(animals, 'ly')).toEqual([animals[0]])
    expect(filterAnimalsFromCriteria(animals, 'a')).toEqual([animals[1]])
    expect(filterAnimalsFromCriteria(animals, 'u')).toEqual(animals)
  })

  it('Should correctly format filters', () => {
    expect(filterFromCriteria('randon', countries)).toEqual([])
    expect(filterFromCriteria('u', countries)).toEqual([ {
      name: 'working',
      people,
    }])
  })
})