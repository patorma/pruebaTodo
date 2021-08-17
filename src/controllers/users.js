const path = require("path");
const root = path.join(__dirname, "../public");
const getUsers = (req, res) => {
    res.sendFile("users.html", { root: root });
};

const createUser = (req, res) => {
    res.sendFile("create-user.html", { root: root });
};

const updateUser = (req, res) => {
    res.sendFile("update-user.html", { root: root });
};
const deleteUser = (req, res) => {
    res.sendFile("delete-user.html", { root: root });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};