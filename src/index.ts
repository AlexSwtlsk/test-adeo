import * as dotenv from 'dotenv'
dotenv.config()

import { exit } from 'process'
import { checkArgumentsFromCli } from './cli'
import { countMode } from './count'
import { data } from './data/mock'
import { filterMode } from './filter'

const ALLOWED_FEATURES = ['--filter', '--count']

export const start = () => {
  console.log('called', )
  const feature = checkArgumentsFromCli(process.argv, ALLOWED_FEATURES)
  
  if (feature.startsWith('--filter')) {
    const result = filterMode(feature, data)
    console.log('result', JSON.stringify(result))
    return
  }

  const result = countMode(data)
  console.log('result', result)
}

start()
exit()