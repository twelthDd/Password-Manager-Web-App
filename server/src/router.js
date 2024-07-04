const express = require('express'); 
const isLoggedIn = require('./middleware/isLoggedIn')
const router = express.Router();

const readItemsRoute = require('./routes/readItemsRoute')
const updateItemRoute = require('./routes/updateItemRoute')
const createItemRoute = require('./routes/createItemRoute')
const deleteItemRoute = require('./routes/deleteItemRoute')
const loginRoute = require('./routes/loginRoute')


router.post('/login', loginRoute)

router.get('/items', isLoggedIn, readItemsRoute)
router.post('/items', isLoggedIn, createItemRoute)
router.put('/items/:id', isLoggedIn, updateItemRoute)
router.delete('/items/:id', isLoggedIn, deleteItemRoute)

module.exports = router;