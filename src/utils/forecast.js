const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=f274273e3a81c125847d0fab5b2aae56&query='+latitude+','+longitude+'&units=m'
    
    request({url, json: true}, (error,{ body })=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently '+body.current.temperature+' degress outside. It feels like '+body.current.feelslike+' degress out.')
        }
    })
}

module.exports = forecast