const puppeteer = require("puppeteer");

async function predict(team1, team2) {
  // setup
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
  );
  await page.goto("https://footystats.org/england/premier-league", {
    waitUntil: "networkidle2",
  });

  // list team
  let team = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".team"), (x) =>
      x.innerText.trim()
    );
  });

  // list mp
  let mp = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".mp"), (x) =>
      x.innerText.trim()
    );
  });

  // list gf
  let gf = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".gf"), (x) =>
      x.innerText.trim()
    );
  });

  // list ga
  let ga = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".ga"), (x) =>
      x.innerText.trim()
    );
  });

  let gfx1 = find_gfx(team1, team, gf, mp);
  let gfx2 = find_gfx(team2, team, gf, mp);

  let gax1 = find_gax(team1, team, ga, mp);
  let gax2 = find_gax(team2, team, ga, mp);

  let score1 = gfx1 * gax2;
  let score2 = gfx2 * gax1;

  let probability1 = parseInt((score1 / (score1 + score2)) * 100);
  let probability2 = parseInt((score2 / (score1 + score2)) * 100);

  await browser.close();

  let result = `${team1} ${probability1}% VS ${team2} ${probability2}%`;
  return result;
}

function find_gfx(team, team_list, gf, mp) {
  for (let index = 1; index < team_list.length; index++) {
    if (team_list[index].toLowerCase().includes(team)) {
      let gfx = parseInt(gf[index]);
      let mpx = parseInt(mp[index]);

      return gfx / mpx;
    }
  }
}

function find_gax(team, team_list, ga, mp) {
  for (let index = 1; index < team_list.length; index++) {
    if (team_list[index].toLowerCase().includes(team)) {
      let gax = parseInt(ga[index]);
      let mpx = parseInt(mp[index]);

      return gax / mpx;
    }
  }
}

module.exports = { predict };
