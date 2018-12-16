module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
      name: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      society: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
  );
  