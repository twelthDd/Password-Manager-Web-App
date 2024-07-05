const ItemModel = require('../models/ItemModel');

module.exports = async (req, res) => {
    const {name} = req.body;
    const {username} = req.body;
    const {password} = req.body;
    const {website} = req.body;
    const {favorite} = req.body;
    // console.log(username, password, website, favorite); 
    const Item = new ItemModel({
        name: name,
        username: username,
        password: password,
        website: website,
        favorite: favorite
    });
    const newItem = await Item.save();
    res.json(newItem);
};