const CryptoJS = require("crypto-js");
const md5 = require("md5");

/**
 * Hash advanced timing
 * @param unix_time UNIX Timestamp
 * @param advanced_key String
 * @param callback (error, response)
 *
 */
export function Auth0(unix_time: any, advanced_key: string, cb: any) {
  try {
    const b64 = CryptoJS.AES.encrypt(String(unix_time), md5(advanced_key)).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    cb(null, e64.toString(CryptoJS.enc.Hex));
  } catch (error) {
    cb(error, null);
  }
}
