const mysql = require('mysql'),
    Sequalize = require('sequelize'),
  sequelize = new Sequalize(
  'legalgampangdb', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
});

  sequelize.authenticate()
  .then(() => console.log('Connection to db has been successfully'))
  .catch (error => console.error('Unable to connect to the database:', error))



/*  Old database connect
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "legalgampangdb"
});


sequelize.connect(function (err){
    if(err) throw err;
});
*/

module.exports = sequelize;