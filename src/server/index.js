const express = require("express");
const app = express();
const path = require("path");
const models = require("../../models");

app.set("port", process.env.PORT || 5555);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  models.user_list
    .findAll()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "포트에서 서버 실행중");
});
