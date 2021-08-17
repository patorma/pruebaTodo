const users = [
    { id: 1, nombre: 'Patricio', edad: 35 },
    { id: 2, nombre: 'Juan', edad: 25 },
    { id: 3, nombre: 'José', edad: 22 }
]

const getUsers = (req, res) => {
    // enviar datos a una plantilla ejs
    res.render("users", { users: users });
};

const createUser = (req, res) => {
    res.render("create-user");
};

const updateUser = (req, res) => {
    res.render("update-user");
};
const deleteUser = (req, res) => {
    res.render("delete-user");
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};