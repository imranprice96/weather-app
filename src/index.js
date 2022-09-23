import weatherApihandler from "./modules/weatherApihandler";

async function init() {
	const data = await weatherApihandler.getWeatherData("Auckland", "Metric");
	console.log(data);

	const weather = document.getElementById("weather-desc");
	const city = document.getElementById("city");
	const temp = document.getElementById("temp");
	const feel = document.getElementById("feels-like");
	const wind = document.getElementById("wind");
	const humidity = document.getElementById("humidity");

	weather.innerHTML = data.weather[0].main;
	city.innerHTML = ` ${data.name}, ${data.sys.country}`;

	const tempRounded = Math.round(data.main.temp).toString();
	temp.innerHTML = ` ${tempRounded}&#8451;`;

	const feelRounded = Math.round(data.main.feels_like).toString();
	feel.innerHTML += ` ${feelRounded}&#8451;`;

	const windRounded = Math.round(data.wind.speed).toString();
	wind.innerHTML += ` ${windRounded}km/h`;

	humidity.innerHTML += ` ${data.main.humidity}%`;
}

init();

// radio button for units
// 100 vh div with body background
