// CONTOH
// const accountsRouter = require("./accounts");

// module.exports = {
//     accountsRouter,
// }

const authsRouter = require("./auths");
const tweetsRouter = require("./tweets");

module.exports = {
      tweetsRouter,
  authsRouter,
};