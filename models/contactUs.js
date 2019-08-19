module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    // Giving the user model a name of type STRING
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    class: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    message: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true
    }
  });

  return Contact;
};
