# Emojify
Emojify is a module to turn strings of text into strings of emoji.

To use it, first download the package:

> npm install emojify

Then you can use it in your projects to quickly convert between text and emoji. Here is a basic example of how it works:

> const toEmoji = require('emojify')
>
> const textInput = 'Hello World!'
> const emojiOutput = emojify(textInput, false)
> console.log(emojiOutput)

The output should look like this:

> 🇭 🇪 🇱 🇱 🇴    🇼 🇴 🇷 🇱 🇩 ! 

Take note of the background colour of your terminal. In some terminals (e.g. iTerm) emojis may blend into the terminals background colour, depending on how dark it is. This can make the emojis difficult to see. So, if you are a die-hard console.logger using a dark terminal theme, consider colouring the relevant emoji-output using ascii-escape codes, [chalk](https://www.npmjs.com/package/chalk), or a similar tool. 

## Funky mode
Emojis are plentiful, so sometimes there are multiple emojis corresponding to a single letter of the alphabet. Faced with so many great options, it can be difficult to know which emoji to use. To solve this conundrum, emojify comes with two modes: Boring Mode and Funky Mode.

### Boring Mode
Boring mode provides a predictable and uniform way of emojing in style. With boring mode, every letter is converted into its corresponding Regional Indicator Symbol (RIS), and punctuation marks are left as is. This is because there is a RIS emoji for every letter in the Latin alphabet, so sticking solely to RIS emojis provides uniformity, reproducibility and predictability in your emoji outputs.

To use Boring Mode, simply turn off all the relevant funk. This can be done by passing a falsy value as the second parameter of the toEmoji function. This can be done like so:

> console.log(emojify('Hello again, World', false))

If the second parameter is not provided, it will default to a falsy value:

> // This also works
> console.log(emojify('Hello again, World'))

In both of the above examples, the resulting output will look like this:

> 🇭 🇪 🇱 🇱 🇴    🇦 🇬 🇦 🇮 🇳 ,    🇼 🇴 🇷 🇱 🇩


That is how Boring Mode works.

# Funky Mode
What Funky Mode lacks in terms of predictability and reproducibility, it makes up for in funk. In Funky Mode, when the input string contains a letter with more than one corresponding emoji, any one of these potential suitors will be chosen at random. For example, the letter 'X' has a number of different emojis to its name: there are '🇽','✖️', '❎','❌',or '𝕏', to name a few. So there is more than one right way to translate the text-string 'X' to an emoji-string. Funky Mode deals with this ambiguity by picking any suitable X emoji at random (except for the RIS emoji) and using that emoji for the translation process. If a letter has only one suitable emoji (its RIS emoji) then Funky Mode will just go with that one. Funky Mode uses emojis for punctuation.

To use Funky Mode, simply turn on all the relevant funky. This can be done by passing a truthy value as the second parameter of the toEmoji function. Here's an example:

> console.log(emojify('Hello - for a 3rd time!', true))

This might print something like this:

> 🇭 📧 🇱 🇱 🍩    -    🇫 ⭕ 🇷    🅰️    ✝️  🇭 ℹ️  ®️  🇩    ☦️  ℹ️  🇲 📧 ❗

That is how Funk Mode works.

So there you have it: that is Emojify, the emoji translator. Emoji safely.

## Wildcards
Emojify has a 'wildcard' option. Whenever a user uses a '*' symbol is used in a string, a random emoji will be chosen from an extensive array of emojis, handpicked to maximize comedic value.

Wildcards will work with any kind of string -- its not necessary to use string-literals. Wildcards will work the same in both Boring Mode and Funky Mode.

## Escape characters

Escape characters will work with any kind of string -- it is not necessary to use string-literals. Escape characters will work the same in both Boring Mode and funky mode.
