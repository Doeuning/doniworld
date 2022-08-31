const Sequelize = require("sequelize");
const env = "development";
const config = require(__dirname + "./../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user_list = require("./userList")(sequelize, Sequelize);
db.board_list = require("./boardList")(sequelize, Sequelize);

db.user_list.hasMany(db.board_list, {
  foreignKey: "user_id",
  sourceKey: "id",
});
db.board_list.belongsTo(db.user_list, {
  foreignKey: "user_id",
  sourceKey: "id",
});

module.exports = db;
