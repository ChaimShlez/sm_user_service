const connection = require("../db/connection-wrapper");
const authQuery = require("../sql/query/authQuery");



async function register(userRegister) {
    console.log(userRegister)
  
    let sql2 = `insert into client_users(name, phone) values(?,?)`;

    let parameters2 = [userRegister.name, userRegister.phone];
    console.log(parameters2)
   const id = await connection.executeWithParameters(sql2, parameters2);
      
    let sql1 = `insert into user(email,password,client_user_id) values(?,?,?)`;
 
    let parameters1 = [userRegister.email, userRegister.password, id.insertId];
    await connection.executeWithParameters(sql1, parameters1);
}



module.exports = {

    register
};
