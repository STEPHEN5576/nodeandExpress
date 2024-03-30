const notfound = (req, res) =>{
 res.status(404).send("route deos not exist")
}

module.exports = notfound