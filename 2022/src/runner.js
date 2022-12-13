import { exec } from 'child_process'
import * as fs from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

var day = process.argv.pop()
if (day.length == 1) {
	day = '0' + day
}
console.log(`> running day ${day}`)

// Compile
exec(`npx tsc`, async (err, stdout, stderr) => {
	if (err) {
		console.log(err)
		console.log(stdout)
		console.log(stderr)
	} else {
		console.log('> compiled successfully')
		console.log()

		const __dirname = dirname(fileURLToPath(import.meta.url))
		let input = await fs.readFile(__dirname + `/${day}/input.txt`, {
			encoding: 'utf-8',
		})

		// Run day and check performance
		let CurrentDay = (await import(`../dist/${day}/index.js`)).default
		let d = new CurrentDay()

		let startTime1 = Date.now()
		let part1 = await d.part1(input)
		let elapsedTime1 = Date.now() - startTime1
		console.log('> Part 1')
		console.log(part1)
		console.log(`time: ${elapsedTime1}ms`)
		console.log()

		let startTime2 = Date.now()
		let part2 = await d.part2(input)
		let elapsedTime2 = Date.now() - startTime2
		console.log('> Part 2')
		console.log(part2)
		console.log(`time: ${elapsedTime2}ms`)
	}
})
