const { emojibet, alphabet, alphaValues } = require('./emojibet')

const plainEmojify = (char: string, nonEmojiArr: Array<any>) => {
    // emoji translation time
  let isItIn: number = alphabet.indexOf(char)
  return isItIn !== -1
    ? alphaValues[isItIn][0]
    : char === ' '
      ? char
      : char+char
}

module.exports = plainEmojify
