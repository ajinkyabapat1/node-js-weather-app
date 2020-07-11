const request = require("request");

const geoCode = (address, callback) => {
  const URL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiYWppbmt5YWJhcGF0MSIsImEiOiJja2M3N3JxeDkwazI3MzJuMHJ3eWR1ZHMyIn0.wrzxXau-aODkUSHhyQxDsA&limit=1";

  request({ url: URL, json: true }, (err, res) => {
    if (err) {
      callback("Unable to Find Location", undefined);
    } else if (res.body.features.length === 0) {
      callback("No Location found", undefined);
    } else {
      callback(undefined, res.body);
    }
  });
};

module.exports = geoCode;
