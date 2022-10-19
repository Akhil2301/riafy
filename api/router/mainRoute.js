const express=require('express')
const {stockSearch,stockById} =require('../controller/mainController')
const router=express.Router()

router.get('/stock',stockSearch)
//single data
router.get('/stockbyid',stockById)

module.exports=router