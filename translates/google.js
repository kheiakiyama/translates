class GoogleTranslator {

  constructor(projectId, key) {
    this.projectId = projectId;
    this.key = key;
  }

  translate(text, options) {
    const gcloud = require('google-cloud');
    const googleTranslate = gcloud.translate({
      key: process.env.GOOGLE_KEY
    });
    return new Promise((resolve, reject) => {
      googleTranslate.translate(text, options, (err, translation) => {
        if (!err) {
          resolve(translation);
        } else {
          reject(err);
        }
      });
    });
  }
}

module.exports = GoogleTranslator;