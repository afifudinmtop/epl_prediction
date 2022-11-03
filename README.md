# epl_prediction

english premiere league match prediction based on league performance

## Installation

```
npm i epl_prediction
```

## Demo

Local demo:

```
git clone https://github.com/afifudinmtop/epl_prediction.git
cd epl_prediction
npm install && node test.js

// it will return the probability of teams => leeds 33% VS liverpool 66%
// please change the teams variable to get different result
```

## Examples head to head

```jsx
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

// it will return on json:
/*
{
  team1: 'chelsea',
  probability1: '29%',
  team2: 'arsenal',
  probability2: '70%'
}

*/
```

// you can see the example files on test.js

## Examples weekend football fixtures prediction

```jsx
const app = require("./app.js");

app.weekly().then(function (result) {
  console.log(result);
});

// it will return this weekend football fixtures prediction on json
/*
[
  {
    team1: 'Leeds United',
    probability1: '64%',
    team2: 'AFC Bournemouth',
    probability2: '35%'
  },
  {
    team1: 'Manchester City',
    probability1: '77%',
    team2: 'Fulham',
    probability2: '22%'
  },
  {
    team1: 'Nottingham Forest',
    probability1: '24%',
    team2: 'Brentford',
    probability2: '75%'
  },
  {
    team1: 'Wolverhampton Wanderers',
    probability1: '19%',
    team2: 'Brighton & Hove Albion',
    probability2: '80%'
  },
  {
    team1: 'Everton',
    probability1: '52%',
    team2: 'Leicester City',
    probability2: '47%'
  },
  {
    team1: 'Chelsea',
    probability1: '29%',
    team2: 'Arsenal',
    probability2: '70%'
  },
  {
    team1: 'Aston Villa',
    probability1: '34%',
    team2: 'Manchester United',
    probability2: '65%'
  },
  {
    team1: 'Southampton',
    probability1: '18%',
    team2: 'Newcastle United',
    probability2: '81%'
  },
  {
    team1: 'West Ham United',
    probability1: '51%',
    team2: 'Crystal Palace',
    probability2: '48%'
  },
  {
    team1: 'Tottenham Hotspur',
    probability1: '51%',
    team2: 'Liverpool',
    probability2: '48%'
  }
]

*/
```

// you can see the example files on weekly.js

## License

epl_prediction is open source software [licensed as MIT](https://github.com/afifudinmtop/epl_prediction/blob/main/LICENSE).
