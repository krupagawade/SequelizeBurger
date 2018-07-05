module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("Burger",{
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: false
  }
);
  return Burger;
} ;


// var burgers = {
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne("burgers", cols, vals, function(res) {
//           cb(res);
//         });
//     },
//     updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
  
// }


// ### Schema

// CREATE DATABASE burgers_db;
// USE burgers_db;

// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	burger_name varchar(255) NOT NULL,
// 	devoured BOOLEAN,
// 	PRIMARY KEY (id)
// );

// Export the database functions for the controller (catsController.js).
//module.exports = burgers;

    
  