const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const addBoard = sequelize.define(
    "board_list",
    {
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING(3000),
        allowNull: false,
      },
      written_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      modified_date: {
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
  return addBoard;
};
