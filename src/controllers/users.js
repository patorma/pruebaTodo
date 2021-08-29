const connection = require('../connection')
    // const users = [
    //     { id: 1, nombre: 'Patricio', edad: 35 },
    //     { id: 2, nombre: 'Juan', edad: 25 },
    //     { id: 3, nombre: 'José', edad: 22 }
    // ]

const getUsers = (req, res) => {
    const sql = 'select * from users';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('Ha ocurrido un error' + err.message)
        } else {
            console.log(result)
                // enviar datos a una plantilla ejs
            res.render("users", { users: result });
        }
    })

};

const getCreateUser = (req, res) => {
    res.render("create-user");
};

const getUpdateUser = (req, res) => {
    res.render("update-user");
};
const getDeleteUser = (req, res) => {
    res.render("delete-user");
};

const createUser = (req, res) => {
    const { name, age } = req.body;
    // se mostraran los datos ingresados(sin bd )
    const sql = 'INSERT INTO users (name,age) VALUES (?,?)'

    connection.query(sql, [name, age], (err) => {
        if (err) {
            console.log('Ha ocurrido un error' + err.message)

        } else {
            console.log('Usuario registrado')
            res.redirect('/users/all');
        }
    })

}

const updateUser = (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            users[i].nombre = req.body.nombre
            users[i].edad = req.body.edad
            break
        }
    }
    res.render("users", { users });
}

const deleteUser = (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            // que elimine el usuario actual (el que encontro) y el numero que solo elimine uno
            users.splice(i, 1)
            break
        }
    }
    res.render("users", { users });
}

module.exports = {
    getUsers,
    getCreateUser,
    getUpdateUser,
    getDeleteUser,
    createUser,
    updateUser,
    deleteUser
};