import weatherApihandler from "./modules/weatherApihandler";
import weatherEventHandler from "./modules/weatherEventHandler";
import weatherInputHandler from "./modules/weatherInputHandler";

async function init() {
	const data = await weatherApihandler.getWeatherData("London", "Metric");
	console.log(data);
	weatherApihandler.getWeatherData().catch((error) => {
		console.log(error);
	});
	weatherInputHandler.displayData(data);
}

init();

// radio button for units
