const { auths } = require("../models");

module.exports = {
  registerAcc: async (req, res) => {
    try {
      const { passwordConfirm, ...authObject } = req.body;

      if (req.body.password.length < 8) {
        return res.status(401).send({
          success: false,
          message:
            "password is not valid\nCheck if password contain 8 or more char",
        });
      } else if (req.body.password !== req.body.passwordConfirm) {
        return res.status(401).send({
          success: false,
          message:
            "password and password confirmation does not have same value",
        });
      } else {
        const resGET = await auths.findAll({
          where: { username: req.body.username, email: req.body.email },
        });
        if (resGET.length < 1) {
          const result = await auths.create(authObject);
          return res
            .status(200)
            .send({ success: true, message: "Register Success" });
        } else {
          return res.status(401).send({
            success: false,
            message: "Either username or email have been used",
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
