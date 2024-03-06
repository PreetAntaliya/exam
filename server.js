const express = require('express')
const port = 8000
const app = express()
const db = require('./config/db')
const path = require('path')
const passport = require('passport');
const passportLocal = require('./config/passportstr')
const session = require('express-session');

app.use(session({
    name : 'idk',
    secret : 'idk#0078',
    saveUninitialized  :true,
    resave : true,
    cookie : {maxAge : 1000 * 60 * 60 * 24}
}))

app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser) 

app.use('/public',express.static(path.join(__dirname,'public')))

app.use('/',require('./routes/index'))

app.listen(port,(err) => {
    (err)?console.log(err) && false : console.log(`server started...`);
})