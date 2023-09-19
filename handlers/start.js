const start = async (req, res)=>{
    try {
        let a = 'Hello'
        res.status(200).json(a)
        
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = start