const app = require("./app.js");

const teams = [
  "arsenal", //0
  "aston villa", //1
  "bournemouth", //2
  "brentford", //3
  "brighton", //4
  "chelsea", //5
  "crystal palace", //6
  "everton", //7
  "fulham", //8
  "leeds united", //9
  "leicester city", //10
  "liverpool", //11
  "manchester city", //12
  "manchester united", //13
  "newcastle united", //14
  "nottingham forest", //15
  "southampton", //16
  "tottenham hotspur", //17
  "west ham united", //18
  "wolverhampton wanderers", //19
];

app.predict(teams[5], teams[0]).then(function (result) {
  console.log(result);
});
