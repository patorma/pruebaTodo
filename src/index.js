const express = require("express");

const app = express();
const port = 3000;

// rutas

app.get("/", (req, res) => {
    res.send("Bienvenido");
});

app.get("/users", (req, res) => {
    res.send("Mostrando todos los usuarios");
});

// ahora se agrega para escuchar el puesrto
app.listen(port, () => {
    console.log(`Mi aplicación está corriendoen el puerto ${port}`);
})