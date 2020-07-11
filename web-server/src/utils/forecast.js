const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b8869abaa48baddbee576662ba52889&query=' + latitude + ',' + longitude+"&units=f";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. The Weather Description is ' + body.current.weather_descriptions);
        }
    })
}

module.exports = forecast
