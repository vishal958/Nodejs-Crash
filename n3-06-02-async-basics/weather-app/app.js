const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c20e791c89be0ed46d0090722d02d499&query=37.8267,-122.4233'

request({url:url},(error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})