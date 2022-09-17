import weatherApihandler from "./modules/weatherApihandler";

async function main() {
  const a = await weatherApihandler.getWeatherData("Auckland", "Metric");
  console.log(a);
}

main();

// radio button for units
// 100 vh div with body background
