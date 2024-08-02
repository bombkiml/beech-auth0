const Cryptr = require("cryptr");
const md5 = require("md5");

/**
 * Hash advanced timing
 * @param timing UNIX Timestamp
 * @param advanced_key String
 * @param callback (error, response)
 * 
 */
function Hash(timing, advanced_key, cb) {
  const crypIt = new Cryptr(advanced_key.toString(), { encoding: "base64url", pbkdf2Iterations: 200, saltLength: 10, });
  cb(crypIt.encrypt(timing.concat(md5(advanced_key).toString())));
}

export { Hash }