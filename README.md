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

## Examples

```jsx
const app = require("epl_prediction");

const team1 = "leeds";
const team2 = "liverpool";

app.predict(team1, team2).then(function (result) {
  console.log(result);
});
```

// you can see the example files on test.js

## License

epl_prediction is open source software [licensed as MIT](https://github.com/afifudinmtop/epl_prediction/blob/main/LICENSE).
