const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 5555);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "포트에서 서버 실행중");
});
