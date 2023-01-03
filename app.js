const weatherDetails = require('./utils/weather.js')

const locationList = process.argv.slice(2)

for(let i=0;i<locationList.length;i++)
    weatherDetails(locationList[i],(err,res) => console.log(res))