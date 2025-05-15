const express = require('express')
const router = express.Router()
const { signupUser, loginPostUser} = require('../controllers/userRoutes') 

router.post('/login',loginPostUser);
router.post('/signup',signupUser);

module.exports = router;