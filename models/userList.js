const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const addUser = sequelize.define(
    "user_list",
    {
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      joined_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return addUser;
};
