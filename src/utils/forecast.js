const request = require('request')

const forecast = (lattitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c74990e97c71cd752f42d6f1338e8eba&query='
        + lattitude + "," + longtitude + "'"
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0]
                + '. It is currently ' + body.current.temperature
                + ' degress out. There is a ' + body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast

