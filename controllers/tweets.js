const { tweets } = require("../models")
module.exports={
    getData: async(req, res) => {
        try{
            const result = await tweets.findAll();
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    },
    postContent: async (req, res) => {
        try {
            const { userId, content, img } = req.body;
            if (content === undefined) {
                return res.status(400).send({ error: "Content is required" });
            }
            if (content.length > 150) {
                return res.status(400).send({ error: "Content cannot be longer than 150 characters" });
            }
    
            // // Memastikan bahwa img selalu ada dan merupakan array
            // const imgArray = img || []; // Jika img tidak ada, kita gunakan array kosong
    
            // // Memeriksa apakah img memiliki lebih dari 1 elemen
            // if (imgArray.length > 1) {
            //     return res.status(400).send({ error: "Tweet can store max. 1 image (imageURL)" });
            // }
            const result = await tweets.create({ userId, content, img });
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },
    modifyTweet: async (req, res) => {
        try {
            const { userId } = req.params;
            const { content, img } = req.body;
            if (typeof userId === 'undefined' || userId === null) {
                return res.status(400).send({
                    message: "userId is missing or invalid.",
                });
            }
            const tweetData = await tweets.findAll({ where: { userId } });
    
            if (tweetData.length === 0) {
                return res.status(404).send({
                    message: "Tweet not found for userId " + userId,
                });
            }
    
            for (const tweet of tweetData) {
                if (content !== undefined) {
                    tweet.content = content;
                }
                if (img !== undefined) {
                    tweet.img = img;
                }
                await tweet.save();
            }
    
            return res.status(200).send(tweetData);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },
    deletePost: async(req, res) => {
        try {
            const { id } = req.params;
            if (typeof id === 'undefined' || id === null) {
                return res.status(400).send({
                    message: "id is missing or invalid.",
                });
            }
            const tweetData = await tweets.findByPk(id);
            if (!tweetData) {
                return res.status(404).send({
                    message: "Tweet not found for id " + id,

                });
            }
            await tweetData.destroy();
            return res.status(200).send(tweetData);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
      
        }
      
      }
}