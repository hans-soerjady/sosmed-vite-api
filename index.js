require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send("API RUNNING")
})

// DEFINE ROUTER
const { tweetsRouter } = require("./routers");
app.use("/tweet", tweetsRouter)

app.listen(PORT, () => {
    console.log("API RUNNING", PORT);
})