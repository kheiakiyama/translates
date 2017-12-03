const cognitiveServices = require('cognitive-services'),
      GoogleTranslate = require('./translates/google');
require('dotenv').config();

const microsoft = new cognitiveServices.textTranslator({
  apiKey: process.env.MICROSOFT_KEY,
  endpoint: process.env.MICROSOFT_ENDPOINT
});
const google = new GoogleTranslate(process.env.GOOGLE_PROJECT, process.env.GOOGLE_KEY);

const input = "翻訳で日本語から英語に変換するテスト",
      from = "ja"
      to = "en";

msTranslate = microsoft.translate({
  parameters: {
    from: from,
    to: to,
    text: input
  }
});
googleTranslate = google.translate(input, {
  from: from,
  to: to
});
Promise.all([msTranslate, googleTranslate])
.then((res) => {
  console.log({
    input: input,
    microsoft: res[0],
    google: res[1]
  });
})
.catch((err) => {
  console.log({
    microsoft: err[0],
    google: err[1]
  });
});
