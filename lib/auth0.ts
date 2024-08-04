const CryptoJS = require("crypto-js");
const md5 = require("md5");

/**
 * Hash advanced timing
 * @param unix_time UNIX Timestamp
 * @param advanced_key String
 * @param callback (error, response)
 *
 */
function Auth0(unix_time, advanced_key, cb) {
  try {
    const b64 = CryptoJS.AES.encrypt(unix_time, md5(advanced_key)).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    cb(null, e64.toString(CryptoJS.enc.Hex));
  } catch (error) {
    cb(error, null);
  }
}

export { Auth0 };
