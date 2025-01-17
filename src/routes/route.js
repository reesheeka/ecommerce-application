const express = require('express');
const router = express.Router();

router.use('/user', require('./user.js'));
router.use('/product', require('./product.js'));
router.use('/category', require('./category.js'));


module.exports = router;