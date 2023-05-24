var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser")
var connection = require('./database');
var cors = require("cors")
var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/content/contact-us', function (req, res) {
    // const filter = req.body;
    // console.log('filter', filter);
    return res.status(200).json({ result: `Chào bạn abc3` });
})

app.post('/signup', function (req, res) {
    
    const username = req.body.username;
    const email = req.body.email
    const password = req.body.password; 
    connection.query("INSERT INTO `product1`.`users` ( `username`, `email`, `password`) VALUES (?, ?, ?)",[username, email, password], 
    function(err, results){
        if (results) {
            res.send({message:"success"});
        } else {
            res.send({message: "ENTER CORRECT ASKED DETAILS"})
        } 
    }
    )
})

app.post('/login', function (req, res) {
    
    const username = req.body.username;
    const password = req.body.password;
    connection.query("SELECT * FROM users WHERE username = ? and password = ?",[username, password], 
    (err, result) => {
        console.log(result)
        if (result.length>0) {
            res.send({message:"success"})
        } else 
        res.send({message: "WRONG USERNAME OR PASSWORD"})
    }
    )
})

// get product
app.get('/', function (req, res) {
    let sql = "SELECT * FROM product";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
})

// get product detail
app.get('/product/:id', function (req, res) {
    let sql = "SELECT * FROM product1.productimages, product1.product "
    + "where product.id = productimages.idProduct and productimages.idProduct = ?"
    connection.query(sql, req.params.id, function(err, results){
        if (err) throw err;
        res.send(results);
    });
})



app.listen(5000, function () {
    console.log("listen on port 5000")
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
})