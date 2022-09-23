const weatherInputHandler = (() => {
	const trimCityName = (cityName) => {
		return cityName
			.toString()
			.replace(/(\s+$|^\s+)/g, "")
			.replace(/(,\s+)/g, ",")
			.replace(/(\s+,)/g, ",")
			.replace(/\s+/g, "+");
	};

	const getInput = () => {
		return trimCityName(document.getElementById("search-input").value);
	};

	const displayData = (data) => {
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
		feel.innerHTML = `Feels like: ${feelRounded}&#8451;`;

		const windRounded = Math.round(data.wind.speed).toString();
		wind.innerHTML = `Wind: ${windRounded}km/h`;

		humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
	};

	return {
		getInput,
		displayData,
	};
})();

export default weatherInputHandler;
