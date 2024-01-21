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
    const funkArr: Array<string> = alphaValues[isItIn]
    let funkyRandom = Math.floor((Math.random() * funkArr.slice(1).length) + 1)
    return funkArr[funkyRandom]
  }
}

module.exports = funk

