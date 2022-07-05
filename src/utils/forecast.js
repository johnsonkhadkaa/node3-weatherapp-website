const request = require('postman-request')
// const chalk = require('chalk')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=31931a8cf4ce46f8854e839fc6dd3413&query='+latitude+','+longitude
    request({url,json:true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to the weather service!',undefined)
        }else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            
            callback(undefined , body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees out. There is "+ body.current.precip+ " % chance of rain.")
        }
    })
}

module.exports = forecast 