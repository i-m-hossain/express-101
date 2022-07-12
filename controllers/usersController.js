
exports.usersList = (req,res)=>{
        res.send(`this is user pages, ${req.url}`)
    },
exports.singleUser = (req, res)=>{
        res.send(`this is single user page, ${req.originalUrl}`)
    }
