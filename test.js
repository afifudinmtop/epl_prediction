const app = require("./app.js");

const team1 = "leeds";
const team2 = "liverpool";

app.predict(team1, team2).then(function (result) {
  console.log(result);
});
