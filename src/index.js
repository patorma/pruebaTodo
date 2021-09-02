const express = require("express");
const user = require('./routes/users');
const app = express();
const path = require('path')
const connection = require('./connection')
const loggedMiddleware = require('./middlewares/logged')

// settings (configuración)
app.set('title', 'Aplicación hecha en Node.js');
app.set('port', 3000)
    // configuracion de plantilla se añade funcionalidad a los archivos HTML
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


//middleware se ejecuta cuando el servidor recibe una peticion y antes que este envie una respuesta al liente
//app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname, 'public')))
    //app.use(express.json())  con esto le digo que acepte datos tipos json
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
    // rutas

app.get("/", (req, res) => {
    res.render('index')
});

app.use('/users', user);

// ahora se agrega para escuchar el puesrto
app.listen(app.get('port'), () => {
    console.log(`Mi ${app.get('title')} está corriendo en el puerto ${app.get('port')}`);
})