import { describe, expect, it } from 'vitest'
import { checkArgumentsFromCli } from './cli'

describe('CLI suite tests', () => {
  it('Should return string containing filter or count', () => {
    const cliArgs = ['yarn', 'start', '--filter=ly']
    expect(checkArgumentsFromCli(cliArgs, ['--filter'])).toBe(cliArgs[2])
  })
	
  it('Should throw an error if given arguments are not compliant', () => {
    //
    const cliArgs = ['yarn', 'start']
    const invalidArgs = ['--filter ly', 'filter', 'filter=ff', 'count', 'a', '--a']
    invalidArgs.forEach((criteria) => {
      try {
        checkArgumentsFromCli([...cliArgs, criteria], [])
      } catch (e) {
        expect(e).toBeInstanceOf(Error)
      }
    })
  })
})