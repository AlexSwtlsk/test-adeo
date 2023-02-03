import * as dotenv from 'dotenv'
dotenv.config()

import { exit } from 'process'
import { data } from './data/mock'

const ALLOWED_FEATURES = ['--filter', '--count']

const checkArgumentsFromCli = (args: string[]) => {
  const givenArgument = args.slice(2)[0]
  if (!givenArgument) {
    throw new Error('No feature given')
  }

  const isAnExistingFeature = ALLOWED_FEATURES.find((feature: string) => givenArgument.startsWith(feature))
  if (!isAnExistingFeature) {
    throw new Error('Available features: --filter=<your search> and --count')
  }
  return givenArgument
}

const filterMode = (filterValueFromCli: string) => {
  const filterValue = filterValueFromCli.slice('--filter='.length)
  if (!filterValue) {
    throw new Error('Usage: --filter=<your criteria>')
  }

  
  return getCountrieWithAnimalsFromCritera(filterValue)
}

const getCountrieWithAnimalsFromCritera = (filterValue: string): Country[] => {
  

  return data.map((country) => ({
    name: country.name,
    people: _checkAnimalsForCriteria(country.people),
  }))

}


const countMode = () => {
  //
}

const start = () => {
  const app = checkArgumentsFromCli(process.argv)
  
  if (app.startsWith('--filter')) {
    filterMode(app)
    return
  }

  return countMode()
}

start()
exit()