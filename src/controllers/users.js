const User = require('../models/user')
// const users = [
//     { id: 1, nombre: 'Patricio', edad: 35 },
//     { id: 2, nombre: 'Juan', edad: 25 },
//     { id: 3, nombre: 'José', edad: 22 }
// ]

//funcion callback en caso de error 

const getUsers = (req, res) => {

  User.find({ }, (err, result) => {
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
  
  User.find({_id: param}, (err, result) => {
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

  User.find({_id: param}, (err, result) => {
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
  const user  = new User({
    name,
    age
  })
  // se mostraran los datos ingresados(sin bd )
  //const sql = "INSERT INTO users (name,age) VALUES (?,?)";

  user.save( (err) => {
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
  const data = req.body
  // se agrega funcionalidad para actualizar usuario
  //encuetra un usuario y lo actualizo
  User.findOneAndUpdate({_id: param},data,(err,result)=>{
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
 
  User.deleteOne({_id: param},(err,result)=>{
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
