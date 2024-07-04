const ItemModel = require('../models/ItemModel')

module.exports = async (req, res) => {
    const { id } = req.params;
    const item = await ItemModel.findById(id)
    await item.deleteOne()
    res.status(200).json(item)
}
