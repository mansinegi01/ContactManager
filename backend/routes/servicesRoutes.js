const express = require('express')
const router = express.Router();
const {Add,Remove,View_all,Update} = require('../controllers/servicesRoutes')

router.post("/add",Add)
router.post("/remove",Remove)
router.get("/view_all",View_all)
router.put("/update",Update)

module.exports = router;