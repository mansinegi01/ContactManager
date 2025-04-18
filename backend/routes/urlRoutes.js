const express = require('express')
const router = express()
const {loginUser, signupUser} = require('../controllers/userRoutes') 

router.get('/login',loginUser);
router.post('/login',signupUser);