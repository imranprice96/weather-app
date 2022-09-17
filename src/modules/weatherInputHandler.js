const weatherInputHandler = (() => {
  const trimCityName = (cityName) => {
    return cityName
      .replace(/(\s+$|^\s+)/g, "")
      .replace(/(,\s+)/g, ",")
      .replace(/(\s+,)/g, ",")
      .replace(/\s+/g, "+");
  };

  return {
    trimCityName,
  };
  //add validation to search box
  //event listener to button click/hit enter
})();

export default weatherInputHandler;
