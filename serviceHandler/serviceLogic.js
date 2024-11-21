const serviceDb = require("./serviceDb");
const Hashes = require("jshashes");
const SHA256 = new Hashes.SHA256();






  async function register(userRegister) {
   // validation.isAlreadyExists(userRegister);
   // validation.validateUser(userRegister);
    const hashedPassword = await hashPassword(userRegister.password);
    userRegister.password = hashedPassword;
    await serviceDb.register(userRegister);
  }

  const hashPassword = async (password) => {
    return (encryptPassword = SHA256.hex(password));
  };

  module.exports = {
    
    register
  }
