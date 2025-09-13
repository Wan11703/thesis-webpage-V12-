const mysql = require('mysql2');
var colors = require('colors');
require("dotenv").config();

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_ROOT_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT 
});

dbConnection.connect(function(err){
    if(!err){
        console.log("Connected to the MySQL server!".underline.cyan);
    } else{
        console.error("Error connecting: " + err.stack);
    }
});

module.exports = {dbConnection};