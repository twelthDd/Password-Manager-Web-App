const ItemModel = require('../models/ItemModel')

module.exports = async (req, res) => {
    const { id } = req.params;
    const item = await ItemModel.findById(id)
    item.username = req.body.username
    item.password = req.body.password
    item.website = req.body.website
    item.favorite = req.body.favorite
    await item.save()
    res.json(item)
}