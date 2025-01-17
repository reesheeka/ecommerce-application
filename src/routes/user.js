const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js");

router.post('/signUp', userController.signUp);
router.post('/login', userController.login);

module.exports = router;