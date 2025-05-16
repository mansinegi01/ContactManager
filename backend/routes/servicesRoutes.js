const express = require('express')
const router = express.Router();
const {Add,Remove,View_all} = require('../controllers/servicesRoutes')

router.post("/add",Add)
router.post("/remove",Remove)
router.get("/view_all",View_all)

module.exports = router;