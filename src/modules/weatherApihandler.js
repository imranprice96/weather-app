const weatherApihandler = (() => {
  const uu =
    "http://api.openweathermap.org/data/2.5/weather?q=Auckland&APPID=f2cac786360dcbdab66d346e21f80e14";

  async function getLocationData(url) {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  }

  //another async function to use these
  const buildCurrentWeatherUrl = (coords) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=f2cac786360dcbdab66d346e21f80e14`;
  };

  const buildLocationUrl = (cityName) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f2cac786360dcbdab66d346e21f80e14`;
  };

  return {
    getLocationData,
    buildCurrentWeatherUrl,
    buildLocationUrl,
  };
})();

export default weatherApihandler;
