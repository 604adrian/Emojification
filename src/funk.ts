const { emojibet, alphabet, alphaValues } = require('./emojibet')

const funk = (char: string) => {
  const funkyChars: Array<string> = [];
  alphaValues.forEach((arr: any) => {
    if (arr.length > 1) {
      funkyChars.push(alphabet[alphaValues.indexOf(arr)])
    }
  })

  let isItFunky = funkyChars.indexOf(char)
  let isItIn = alphabet.indexOf(char)
  if (isItFunky === -1) { return false } 
  else {
    let funkyRandom = Math.floor((Math.random() * alphaValues[isItIn].length-1) + 1)
    return alphaValues[isItIn][funkyRandom]
  }
}

module.exports = funk

