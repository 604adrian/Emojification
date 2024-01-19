const { emojibet, alphabet, alphaValues } = require('./src/emojibet')
const funk = require('./src/funk')
const plainEmojify = require('./src/plainEmoji')

const toEmoji: Function = (nonEmoji: string, funky=false) => {
  const emojified: Array<string> = []
  const nonEmojiArr: Array<any> = nonEmoji.toLowerCase().split('')

  // Check the characters pontential funk
  const emojiSorter = (char: string) => {
    const charFiltered = plainEmojify(char, nonEmojiArr) 
    if (charFiltered !== undefined) {
      emojified.push(charFiltered)
    }
  }

  const isItSpecial = (char: string) => {
    const specials: Array<string> = ['~', '\\']
    const specialChar = specials.indexOf(char)
    if (specialChar !== -1) { return true } 
    return false
  }

  const isItEscaped = (char: string) => {
    const escapedChar = nonEmojiArr[nonEmojiArr.indexOf(char) - 1]
    const escaped = isItSpecial(escapedChar)
    if (escaped) { return true }
    return false
  }

  const translateArr = (arrToTranslate: Array<string>) => {

    arrToTranslate.forEach((char) => {
      const special = isItSpecial(char)
      const doesItFunk = funk(char)
      const escaped = isItEscaped(char)

      if (special) { return }
      else if (escaped) { emojified.push(char) }
      else if (funky) {
	if (!doesItFunk) { emojiSorter(char) }
	else { emojified.push(doesItFunk) }
      } else if (!funky) {
	if (char === '*') { emojified.push(funk(char)) }
	else { emojiSorter(char) }
      }
    })
 
  }

  translateArr(nonEmojiArr)
   
  return emojified.join(' ').trim()
}

module.exports = toEmoji
