const { emojibet, alphabet, alphaValues } = require('./src/emojibet')
const funk = require('./src/funk')
const plainEmojify = require('./src/plainEmoji')

const toEmoji: Function = (nonEmoji: string, funky=false) => {

  const emojified: Array<string> = []
  const nonEmojiArr: Array<any> = nonEmoji.split('')

  const quoteChar: string = '~'
  const escapeSingleChar: string = '\\'

  // Check the character's pontential funk
  const emojiSorter = (char: string) => {
    const charFiltered = plainEmojify(char, nonEmojiArr) 
    if (charFiltered !== undefined) {
      emojified.push(charFiltered)
    }
  }

  const isItSpecial = (char: string) => {
    const specials: Array<string> = [quoteChar, escapeSingleChar]
    const specialChar = specials.indexOf(char)
    if (specialChar !== -1) { return true } 
    return false
  }

  var quoted: boolean = false

  const translateArr = (arrToTranslate: Array<string>) => {
    arrToTranslate.map((c, i) => {
      const char = c.toLowerCase()
      const special = isItSpecial(char)
      const escaped = isItSpecial(arrToTranslate[i-1])
      const doesItFunk = funk(char)
      
      if (c === quoteChar) { 
	if (quoted) { quoted = false }
	else { quoted = true }
      }

      if (escaped && c !== quoteChar) { emojified.push(char); return }
      else if (special) { return }
      else if (quoted) { emojified.push(c); return }
      else if (funky) {
	if (!doesItFunk) { emojiSorter(char) }
	else { emojified.push(doesItFunk) }
      } else if (!funky) {
	if (char === '*') { emojified.push(funk(char)) }
	else { emojiSorter(char) }
      }

      emojified.push(' ')
    })
  }

  translateArr(nonEmojiArr)

  return emojified.join('').trim()
}

module.exports = toEmoji
