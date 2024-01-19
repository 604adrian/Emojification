const { emojibet, alphabet, alphaValues } = require('./emojibet')

const specialChars = (char: string, nonEmojiArr: Array<any>) => {

  switch (char) {
    case ('<'):
    case ('>'):
    case ('\\'):
      return true
  }
  
  return false

}

module.exports = specialChars
