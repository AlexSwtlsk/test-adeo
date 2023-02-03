import * as dotenv from 'dotenv'
dotenv.config()


const start = () => {
	console.log('start')
	console.log(process.env.EXAMPLE_VALUE)
}

start()