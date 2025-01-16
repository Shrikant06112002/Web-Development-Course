const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

// const homeFile = fs.readFile("index.html","utf-8",(err,data));
const replaceVal = (tempVal,orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}",orgVal.main.temp-275);
    temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min-275);
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max-275);
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    return temperature;
}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=cf67c274ff31b33ad968cbe6eccd05ab")
      .on("data", (chunk)=> {
        const objData = JSON.parse(chunk);
        const arrData = [objData];//convert into array
        // console.log((arrData[0].main.temp)-273);
        const realTimeData = arrData.map((val)=>replaceVal(homeFile,val)).join("");

        res.write(realTimeData);
        // console.log(realTimeData)
      })
      .on("end", (err) =>{
        if (err) return console.log("connection closed due to errors", err);

        res.end();
      });
  }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listenting from port 8000");
});


// // paramter of api
// Fields in API response

// coord
// coord.lon Longitude of the location
// coord.lat Latitude of the location
// weather (more info Weather condition codes)
// weather.id Weather condition id
// weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// weather.description Weather condition within the group. You can get the output in your language. Learn more
// weather.icon Weather icon id
// base Internal parameter
// main
// main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.feels_like Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
// main.humidity Humidity, %
// main.temp_min Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.temp_max Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.sea_level Atmospheric pressure on the sea level, hPa
// main.grnd_level Atmospheric pressure on the ground level, hPa
// visibility Visibility, meter. The maximum value of the visibility is 10km
// wind
// wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// wind.deg Wind direction, degrees (meteorological)
// wind.gust Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
// clouds
// clouds.all Cloudiness, %
// rain
// rain.1h (where available) Rain volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
// rain.3h (where available) Rain volume for the last 3 hours, mm. PPlease note that only mm as units of measurement are available for this parameter.
// snow
// snow.1h(where available) Snow volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
// snow.3h (where available)Snow volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter.
// dt Time of data calculation, unix, UTC
// sys
// sys.type Internal parameter
// sys.id Internal parameter
// sys.message Internal parameter
// sys.country Country code (GB, JP etc.)
// sys.sunrise Sunrise time, unix, UTC
// sys.sunset Sunset time, unix, UTC
// timezone Shift in seconds from UTC
// id City ID. Please note that built-in geocoder functionality has been deprecated. Learn more here.
// name City name. Please note that built-in geocoder functionality has been deprecated. Learn more here.
// cod Internal parameter
// XML
