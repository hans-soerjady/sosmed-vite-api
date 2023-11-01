const { auths } = require("../models")
module.exports = {
    getData: async (req, res, next) => {
        try {
            const result = await auths.findAll();
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    },
    login: async (req, res, next) => {
        try {
            if (req.body.input.includes(".com")) {
                req.body.email = req.body.input;
                delete req.body.input;
            } else if (parseInt(req.body.input)) {
                req.body.phoneNumber = req.body.input;
                delete req.body.input;
            } else {
                req.body.username = req.body.input;
                delete req.body.input;
            }

            const result = await auths.findAll({
                where: req.body
            });

            if (result.length) {
                return res.status(200).send({
                    success: true,
                    message: "Login successful.",
                    result
                })
            } else {
                return res.status(404).send({
                    success: false,
                    message: "Account not found, please input username/email/phone correctly."
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    },
    update: async (req, res) => {
        try {
            let reqBodyArray = Object.keys(req.body)
            let check = true
            reqBodyArray.forEach(val => { check = check && (val === "bio" || val === "username" || val === "email") })
            if (check) {
                const result = await auths.update(req.body, { where: { id: req.params.id } })
                if (result[0]) {
                    return res.status(200).send({ success: true, message: "successfully updated account" })
                } else {
                    return res.status(404).send({
                        success: false,
                        message: `Cannot find account with id: ${req.params.id}`
                    })
                }
            } else {
                return res.status(500).send({
                    success: "false",
                    message: "You can only edit bio, username or email" 
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    }
}