import weatherApihandler from "./modules/weatherApihandler";
import weatherEventHandler from "./modules/weatherEventHandler";
import weatherInputHandler from "./modules/weatherInputHandler";

async function init() {
	const data = await weatherApihandler.getWeatherData("Auckland", "Metric");
	weatherInputHandler.displayData(data);
}

init();
