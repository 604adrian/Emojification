Emojification is a module to turn strings of text into strings of emoji. To see how it works, check out this example website: https://604adrian.github.io/emojify-on-the-web/
# Highlights
* [Modes](#Modes)
* [Wildcards](#Wildcards)
* [Quotations](#Quotations)
# Install
To install Emojification, first download the package:
<pre>npm install emojification</pre>
Once you've installed it, you can start playing around with it almost immediately like so:
<pre>npm run basic-cli</pre>
This should prompt you for text input, and then produce corresponding emoji output, giving you a feeling for how the Emojification process works.

# Usage
Once you've installed Emojification, you can use it in your projects to quickly convert between text and emoji. Here is a basic example:

```javascript
const toEmoji = require('emojification')
const textInput = 'Hello World!'

// toEmoji() has two parameters
// The 1st parameter requires a string. The 2nd is a boolean value
const emojiOutput = toEmoji(textInput, false)

console.log(emojiOutput)
```

The output should look like this:

<pre>🇭 🇪 🇱 🇱 🇴,  🇼 🇴 🇷 🇱 🇩!</pre>

The first parameter specifies the string to translate into emoji-form. The second parameter specifies the mode by which this is done: if a falsy value is given then the translation will occur in Boring Mode, and if a truthy value is given then the translation will occur in Funky Mode (see [Modes](#Modes) for more information). The first parameter is required, but the second parameter is optional and will default to a falsy value if not specified.

**A note for web deveopers**: In at least some browsers, certain HTML tags will change the spacing of the emoji-string, eroding the whitespace between words. For example the `<p></p>`, `<h1></h1>` etc.) may display `toEmoji('Hello World')` as `🇭 🇪 🇱 🇱 🇴 🇼 🇴 🇷 🇱 🇩`. To avoid this, wrapping the emojis in a `<pre></pre>` tag is recommended, since this will preserve the original spacing of the emoji-strings.

**A note for node.js developers**:
Take note of the background colour of your terminal. In some terminals (e.g. iTerm) emojis may blend into the terminals background colour, depending on how dark it is. This can make the emojis difficult to see. So, if you are a die-hard console.logger using a dark terminal theme, consider highlighting the relevant emoji-output using ascii-escape codes, [chalk](https://www.npmjs.com/package/chalk) or a similar tool.

# Modes 
Emojis are plentiful, so sometimes there are multiple emojis corresponding to a single letter of the alphabet. Faced with so many great options, it can be difficult to know which emoji to use. To solve this conundrum, emojify comes with two modifiers, or modes: Boring Mode and Funky Mode.

## Boring Mode
Boring mode provides a predictable and uniform way of emojing in style. With boring mode, every letter is converted into its corresponding Regional Indicator Symbol (RIS), and punctuation marks are left as is. This is because there is a RIS emoji for every letter in the Latin alphabet, so sticking solely to RIS emojis provides uniformity, reproducibility and predictability in your emoji outputs.

To use Boring Mode, simply turn off all the relevant funk. This can be done by passing a falsy value as the second parameter of the toEmoji function. This can be done like so:

```javascript
const boringModeExample1 = toEmoji('Hello again, World', false)

console.log(boringModeExample1)
```

If the second parameter is not provided, it will default to a falsy value:

```javascript
// This also works
const boringModeExample2 = toEmoji('Hello again, World')

console.log(boringModeExample2)
```

In both of the above examples, the resulting output will look like this:

<pre>🇭 🇪 🇱 🇱 🇴   🇦 🇬 🇦 🇮 🇳,   🇼 🇴 🇷 🇱 🇩</pre>

Boring Mode does not use translate punctuation marks into emoji-form. 

## Funky Mode
What Funky Mode lacks in terms of predictability and reproducibility, it makes up for in funk. In Funky Mode, when the input string contains a letter with more than one corresponding emoji, any one of these potential suitors will be chosen at random. For example, the letter 'X' has a number of different emojis to its name: there are '🇽','✖️', '𝕏', '❌', or '❎'. So there is more than one right way to translate the text-string 'X' to an emoji-string. Funky Mode deals with this ambiguity by picking any suitable X emoji at random (except for the RIS emoji) and using that emoji for the translation process. If a letter has only one suitable emoji (its RIS emoji) then Funky Mode will just go with that one. Funky Mode uses emojis for punctuation.

To use Funky Mode, simply turn on all the relevant funk. This can be done by passing a truthy value as the second parameter of the toEmoji function. Here's an example:

```javascript
const funkyModeExample = toEmoji("Hello - for a 3rd time!", true)

console.log(funkyModeExample)
```

This might print something like this:

<pre><D-c>♓ 📧 🏒 🏒 🛟 ,     🔱 🔘 ®️ 🏒 🐬      ➖     🇫 🔘 ®️      🅰️      3️⃣ ®️ 🐬      ⛏️ 👁️ ♏ 📧</pre>

As we can see, this string is much funkier, albeit slightly less legible.

Unlike Boring Mode, Funky Mode translates certain punctuation marks (i.e. '!', '?', and '-') into emoji-form.

# Wildcards
Emojification, has a 'wildcard' option. Whenever a user uses a '\*' symbol is used in a string, a random emoji will be chosen from an extensive array of emojis, handpicked to maximise comedic value.

For example, let's take take the string "Hello World \*". Running this string through Emojification 3 times might give this output:

<pre>🇭 🇪 🇱 🇱 🇴,  🇼 🇴 🇷 🇱 🇩  😎</pre>

Or this output:
<pre>🇭 🇪 🇱 🇱 🇴,  🇼 🇴 🇷 🇱 🇩  😰</pre>

Or this output:
<pre>🇭 🇪 🇱 🇱 🇴,  🇼 🇴 🇷 🇱 🇩  🥴</pre>

Or any number of other possible outputs.

# Quotations
In some cases, it is necessary to leave some of one's string unemojified. This can be done using Emojifi's quotation feature. To use this feature, simply wrap the relevant text with the tilde ('~') symbol. An example of this is below. 

```javascript
const quotationExample = toEmoji('Quotes?~ They work like this.~ Now you know.')

console.log(quotationExample)
```

This would produce the following output:

<pre>🇶 🇺 🇴 🇹 🇪 🇸? They work like this. 🇳 🇴 🇼   🇾 🇴 🇺   🇰 🇳 🇴 🇼.</pre>

Note that, in some circumstances, it may be necessary to quote the whitespaces that exist before and after the quoted text. This is because certain combinations of RIS emojis can, when placed side-by-side, encode a compound emoji. (For example, when run together '🇪 🇸' encodes '🇪🇸'). To prevent unintentionally encoding for these compound emojis, Emojification automatically inserts a whitespace between any-two given emojis. This can lead to inconsistent spacing before and after a quotation if the relevant whitespace is not also quoted.

If one wishes to only prevent a single character from being emojified, this can be done using the backslash. Here is an example:
```javascript
// The backslash is preventing the letter 'x' from being emojified
const singleCharQuotes = toEmoji('\x \x', true)
console.log(singleCharQuotes) // Prints "x x" to the console

// Here, there is no backslash, so the 'x' is emojified
const noQuotes = toEmoji('x x', true)
console.log(noQuotes) // Prints "❎  ❌" to the console
```

Both tildes and backslashes can be used to inhibit wildcard functionality:
```javascript
// How wildcards normally work:
const wildcards = toEmoji(* * * * *)
console.log(wildcards) // Prints "😰  🥸  🤭  🤡  😵‍💫" to the console

// How wildcards work in tilde-quotes:
const noWildcard = toEmoji('~* * * * *~')
console.log(noWildcard) // Prints "* * * * *" to the console

// How wildcards work in backslash-quotes:
const noWildcard2 = toEmoji('\*  \*  \*  \*  \*')
console.log(noWildcard2) // Prints "*  *  *  *  *" to the console
```


Note that the wildcards in backslash-quotes are more spaced-out. This is because their surrounding whitespace is not quoted (see above).

# Licence
MIT. See the [licence file](https://github.com/604adrian/Emojification?tab=MIT-1-ov-file) for more information.

---

And there you have it. That is how you use Emojification. Use with caution and keep emojing.

