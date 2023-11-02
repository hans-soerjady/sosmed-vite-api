// CONTOH
// const accountsController = require("./accounts")

// module.exports = {
//     accountsController
// }
const tweetsController = require("./tweets");
const authsController = require("./auths");

module.exports = {
    authsController,
    tweetsController
};