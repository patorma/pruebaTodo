const express = require("express");
const user = require('./routes/users');
const app = express();
const port = 3000;
const loggedMiddleware = require('./middlewares/logged')


//middleware se ejecuta cuando el servidor recibe una peticiony antes que este envie una respuesta al liente
app.use(loggedMiddleware.isLogged)
    // rutas

app.get("/", (req, res) => {
    res.send("Bienvenido");
});

app.use('/users', user);

// ahora se agrega para escuchar el puesrto
app.listen(port, () => {
    console.log(`Mi aplicación está corriendoen el puerto ${port}`);
})