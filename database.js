const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'testdb1',
    user: 'root',
    password: '2046'
});

var db_connection_status = '';

connection.connect(function(error){
    if(error){
        db_connection_status = 'Connection Error'
        console.log(db_connection_status);
        console.log(error)
    }
    else{
        db_connection_status = 'Connection Success'
        console.log(db_connection_status);
    }
}
);

module.exports = connection;