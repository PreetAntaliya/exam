const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const passport = require('passport')
const multer = require('multer')

const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,'uploads')
    }
})

routes.get('/login', userController.login)
routes.get('/register', userController.register)
routes.post('/addUser', userController.addUser)
routes.post('/loginUser', userController.loginUser)

// routes.get('/admin',,userController.loginUser)

// HOME PAGE passport.checkUser,
routes.get('/product', adminController.product)
routes.post('/createProduct', adminController.createProduct)

module.exports = routes