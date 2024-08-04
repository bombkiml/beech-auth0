const CryptoJS = require("crypto-js");
const md5 = require("md5");

/**
 * Hash advanced timing
 * @param timing UNIX Timestamp
 * @param advanced_key String
 * @param callback (error, response)
 *
 */
function Auth0(timing, advanced_key, cb) {
  const b64 = CryptoJS.AES.encrypt(timing, md5(advanced_key)).toString();
  const e64 = CryptoJS.enc.Base64.parse(b64);
  cb(e64.toString(CryptoJS.enc.Hex));
}

export { Auth0 };
