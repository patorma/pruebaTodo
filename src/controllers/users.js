const connection = require("../connection");
// const users = [
//     { id: 1, nombre: 'Patricio', edad: 35 },
//     { id: 2, nombre: 'Juan', edad: 25 },
//     { id: 3, nombre: 'José', edad: 22 }
// ]

const getUsers = (req, res) => {
  const sql = "select * from users";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Ha ocurrido un error" + err.message);
    } else {
      console.log(result);
      // enviar datos a una plantilla ejs
      res.render("users", { users: result });
    }
  });
};

const getCreateUser = (req, res) => {
  res.render("create-user");
};

const getUpdateUser = (req, res) => {
  const param = req.params.id;
  const sql = "SELECT * FROM users WHERE id=?";
  connection.query(sql, param, (err, result) => {
    if (err) {
      console.log("Ha ocurrido un error" + err.message);
    } else {
      console.log(result);
      res.render("update-user", { user: result });
    }
  });
};
const getDeleteUser = (req, res) => {
  const param = req.params.id;
  const sql = "SELECT * FROM users WHERE id=?";
  connection.query(sql, param, (err, result) => {
    if (err) {
      console.log("Ha ocurrido un error" + err.message);
    } else {
      console.log(result);
      res.render("delete-user", { user: result });
    }
  });
};

const createUser = (req, res) => {
  const { name, age } = req.body;
  // se mostraran los datos ingresados(sin bd )
  const sql = "INSERT INTO users (name,age) VALUES (?,?)";

  connection.query(sql, [name, age], (err) => {
    if (err) {
      console.log("Ha ocurrido un error" + err.message);
    } else {
      console.log("Usuario registrado");
      res.redirect("/users/all");
    }
  });
};

const updateUser = (req, res) => {
  const param = req.params.id;
  // se agrega funcionalidad para actualizar usuario
  const sql = `UPDATE users SET name='${req.body.name}', age=${req.body.age} WHERE id=${param} `
  connection.query(sql,(err,result)=>{
      if(err){
          console.log('Ha ocurrido un eror'+ err.message)
      }else {
          console.log('Usuario actualizado')
          res.redirect('/users/all')
      }
  })
 
  //res.render("users", { users });
};

const deleteUser = (req, res) => {
  const param = req.params.id;
  // se agrega funcionalidad para actualizar usuario
  const sql = `delete from users where id= ${param}`
  connection.query(sql,(err,result)=>{
      if(err){
          console.log('Ha ocurrido un eror'+ err.message)
      }else {
          console.log('Usuario eliminado')
          res.redirect('/users/all')
      }
    })

}


module.exports = {
  getUsers,
  getCreateUser,
  getUpdateUser,
  getDeleteUser,
  createUser,
  updateUser,
  deleteUser,
};
