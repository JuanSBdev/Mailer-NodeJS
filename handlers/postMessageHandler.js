const postMessageController = require("../controllers/postMessageController");

 const postMessageHandler = async (req, res)=>{
    let {email, name, message} = req.body;
    try {
       let result = await postMessageController(email, name, message)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json(error)
    }

}
module.exports = postMessageHandler