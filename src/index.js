import weatherApihandler from "./modules/weatherApihandler";

async function main() {
  const a = await weatherApihandler.getWeatherData("Auckland", "Metric");
  console.log(a);
}

main();
