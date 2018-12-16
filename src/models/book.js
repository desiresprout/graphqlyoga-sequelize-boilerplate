module.exports = (sequelize, DataTypes) => (
    sequelize.define('book', {
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      
    }, {
      timestamps: true,
      paranoid: true,
    })
  );
  