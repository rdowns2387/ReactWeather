var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=789be102f4e099c9a93523218f50f61c&units=imperial';

//789be102f4e099c9a93523218f50f61c

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error (res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error('Unable to fetch the weather for that location');
    });
  }
}
