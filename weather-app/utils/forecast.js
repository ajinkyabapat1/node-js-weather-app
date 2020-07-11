const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9b8869abaa48baddbee576662ba52889&query=" +
    lat +
    "," +
    long +
    "&units=f";
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect", undefined);
    } else if (res.body.error) {
      callback("Unable to Find Location", undefined);
    } else {
      callback(
        undefined,
        "Current Temprature is " +
          res.body.current.temperature +
          " F" +
          " And Weather forecast is " +
          res.body.current.weather_descriptions
      );
    }
  });
};

module.exports = forecast;
