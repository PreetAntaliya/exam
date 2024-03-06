const userModel = require('../models/User')
const bcrypt = require('bcrypt')

const login = (req,res) => {
    if(res.locals.users){
        return res.redirect('/');
    }
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    return res.render('login')
}


const loginUser = (req, res, next) => {
    return res.redirect('/')
};


const register = (req,res) => {
    return res.render('register')
}

const addUser = async (req,res) => {
    const {name,email,password,cpassword} = req.body
    try{
        if(password==cpassword){
            let userCreate = await userModel.create({
                name,
                email,
                password : await bcrypt.hash(password,10)
            })
            return res.redirect('/login');
        }
        return res.send(`enter both password same`)
    }catch(err){
        console.log(err);
        return false
    }
}



module.exports = {
    login,
    loginUser,
    register,
    addUser
}