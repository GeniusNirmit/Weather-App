const request = require('request');

require('dotenv').config()

const weatherDetails = (address,callback) =>{
    var geoCoding = process.env.openWeatherAPI + address

    var url = process.env.weatherStackAPI

    request({url: geoCoding, json:true}, (error,response) =>{
        if(error)
            callback('Unable to connect to location services',undefined)
        else if(response.body.error)
            callback('Unable to find the location. Try another search',undefined)
        else
        {
            url = url + response.body[0].lat + "," +response.body[0].lon
            getTemperature()
        }
    })

    const getTemperature = async () => {
        request({url: url, json:true}, (err,res) => {
            if(err)
                callback('Error',undefined)
            else
                callback(undefined,"Temperature in "+ res.body.location.name+ " is "+res.body.current.temperature)
        })
    }
}

module.exports = weatherDetails