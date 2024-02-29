const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

//home
app.get("/home", (req, res) => {
    res.send("hello world")
});


app.get("/", (req, res) =>{
    return res.send({
        error: false,
        message: "Ticket-management with nodejs react",
        written_by: "Sutthirak Sutsaenya"
    })    
});    

//connection to database
let dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ticket_management"
});    

dbConnection.connect();

//get all tickets
app.get("/tickets", (req, res) => {
    dbConnection.query("select * from ticket", (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results == undefined || results.length == 0){
            message = "ticket empthy";
        }else {
            message = "success all tickets";
        }
        return res.send({error: false, data: results, message: message})
    })
});

//get ticket
app.get("/ticket/:id", (req, res) => {
    let id = req.params.id;
    dbConnection.query("select * from ticket where id = ?", [id], (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results == undefined || results.length == 0){
            message = "ticket not found";
        }else {
            message = "founded ticket";
        }
        return res.send({error: false, data: results, message: message})
    })
});

//create ticket
app.post("/ticket", (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    let contact = req.body.contact;
    let status = "pending" 

    if (!title || !description || !contact || !status){
        return res.status(400).send({error: true, message: "Please fill in complete information."})
    }else {
        dbConnection.query("insert into ticket (title, description, contact, status) values (?, ?, ?, ?)", [title, description, contact, status], (error, results, fields) => {
            if (error) throw error;
            return res.send({error: false, data: results, message: "create ticket successfully"})
        })
    }
})

//update
app.put("/ticket", (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let contact = req.body.contact;

    if (!title || !description || !contact){
        return res.status(400).send({error: true, message: "Please fill in complete information."})
    }else {
        dbConnection.query("update ticket set title = ?, description = ?, contact = ? where id = ?", [title, description, contact, id], (error, results, fields) => {
            if (error) throw error;

            let message = ""

            if (results.changedRows == 0) {
                message = "Same ticket or ticket not found"
            }else {
                message = "ticket updated"
            }
            return res.send({error: false, data: results, message:message})
        })
    }
})

//filter ticket
app.get("/tickets/filter/:status", (req, res) => {
    let status = req.params.status;
    dbConnection.query("select * from ticket where status = ?", [status], (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results == undefined || results.length == 0){
            message = "empthy this status.";
        }else {
            message = `founded status ${status}`;
        }
        return res.send({error: false, data: results, message: message})
    })
});



app.listen(port, () => {
    console.log(`server running on port ${port}`);
});


