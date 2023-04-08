var mysql=require('mysql');

function host() {

}

var connection=mysql.createConnection(
    host: 'localhost',
    user: 'root',
    password: 'alwin',
    database: 'joinus'
});