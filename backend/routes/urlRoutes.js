const express = require('express')
const router = express.Router()
const {loginUser, signupUser, loginPostUser} = require('../controllers/userRoutes') 

router.get('/login',loginUser);
router.post('/login',loginPostUser);
router.post('/signup',signupUser);

module.exports = router;