const weatherApihandler = (() => {
  async function getWeatherData(cityName, units) {
    const url = buildLocationUrl(cityName, units);

    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  }

  const buildLocationUrl = (cityName, units) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f2cac786360dcbdab66d346e21f80e14&units=${units}`;
  };

  return {
    getWeatherData,
  };
})();

export default weatherApihandler;
