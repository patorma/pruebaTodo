const express = require("express");
const user = require('./routes/users');
const app = express();
const path = require('path')
const port = 3000;
const loggedMiddleware = require('./middlewares/logged')

// settings (configuración)
app.set('title', 'Aplicación hecha en Node.js')


//middleware se ejecuta cuando el servidor recibe una peticion y antes que este envie una respuesta al liente
//app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname, 'public')))

// rutas

app.get("/", (req, res) => {
    res.send("Bienvenido");
});

app.use('/users', user);

// ahora se agrega para escuchar el puesrto
app.listen(port, () => {
    console.log(`Mi ${app.get('title')} está corriendoen el puerto ${port}`);
})