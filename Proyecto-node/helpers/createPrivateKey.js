const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) // e37222a40a11dd2792decfd20b513c919660c5d1a1259e79f41e134f73b47331