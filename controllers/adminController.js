const productModel = require('../models/Products')
const path = require('path')
const fs = require("fs");

// Dashboard
const dashboard = async (req,res) => {
    try{
        // let user = req.user
        return res.render('admin/dashboard')
    } catch(err) {

    }
}


// Product
const product = async (req,res) => {
    try{
        return res.render('admin/add-product')
    }catch(err){
        console.log(err);
        return false
    }
}
const addProduct = async(req,res) => {
    try{
        let user = req.user
        let category = await categoryModel.find({})
        let subcategory = await subcategoryModel.find({})
        let excategory = await exsubcategoryModel.find({})
        return res.render('admin/add-product',{user,category,subcategory})
    }catch(err){
        console.log(err);
        return false
    }
}

const createProduct = async (req,res) => {
    try{
        const {name,price,qty,description} = req.body
        const productCreate = await productModel.create({
            name,
            price,
            qty,
            description,
            img : req.file.path
        })
        return res.redirect('back')
    }catch(err) {
        console.log(err);
        return false
    }
}

module.exports = {
    dashboard,
    product,
    createProduct,
}