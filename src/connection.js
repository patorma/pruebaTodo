const mysql = require('mysql')
const { mysql_database } = require('./config')

const connection = mysql.createConnection(mysql_database)

// el primer parametro el error y conn la coneccion establecida
connection.connect((err, conn) => {
    if (err) {
        console.log('Ha ocurrido un error al conectarse')
        console.log(err.message)
    } else {
        console.log('Conexión exitosa')
        return conn
    }



})

module.exports = connection