
const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");


app.use(express.json());
app.use(express.urlencoded({extended : true}));


//home
app.get("/home", (req, res) => {

    res.send("hello world")

});


app.get("/", (req, res) =>{
    return res.send({
        error: false,
        message: "Welcome to RESTful CRUD API with NodeJS, Express, MYSQL",
        written_by: "Sutthirak"
    })    
});    

//connection to database
// let dbConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "todoweb"
// });    

// dbConnection.connect();



app.listen(port, () => {
    console.log(`server running on port ${port}`);
});


