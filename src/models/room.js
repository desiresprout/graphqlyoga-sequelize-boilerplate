module.exports = (sequelize, DataTypes) => (
    sequelize.define('room', {
      name: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    }, {
      timestamps: true,
      paranoid: true,
    })
  );
  