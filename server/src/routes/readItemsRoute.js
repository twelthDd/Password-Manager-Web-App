const ItemModel = require('../models/ItemModel')

module.exports = async (req, res) => {
    const items = await ItemModel.find()
    res.json(items)
}