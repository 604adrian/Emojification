const readline = require('readline')
const toEmoji = require('../index.js')
const chalk = require('chalk')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Enter message to translate to emoji: ", function(text: string) {
  rl.question("Enable funky mode? [Y/N] ", function(funky: string) {
    if (funky.toLowerCase() === 'n') { 
      console.log(chalk.black.bgWhite(toEmoji(text, false) + '  ')) 
    } else { console.log(toEmoji(text, true)) }
    rl.close()
  })
})

rl.on("close", function() {
  process.exit(0)
})

