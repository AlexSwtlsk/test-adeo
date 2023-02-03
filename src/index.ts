import * as dotenv from 'dotenv'
dotenv.config()

import { exit } from 'process'
import { checkArgumentsFromCli } from './cli'
import { countMode } from './count'
import { data } from './data/mock'
import { filterMode } from './filter'

const ALLOWED_FEATURES = ['--filter', '--count']


const start = () => {
  const feature = checkArgumentsFromCli(process.argv, ALLOWED_FEATURES)
  
  if (feature.startsWith('--filter')) {
    filterMode(feature, data)
    return
  }

  return countMode()
}

start()
exit()