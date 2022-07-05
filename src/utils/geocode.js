const request = require("postman-request");


const geocode = (address, callback) => {
  const url =
    "http://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoiam9obnNvbjAwNyIsImEiOiJjbDQxYTJ3bG4wMjJwM2ZsaWJoZ2Y5bHQ1In0.bqZHA1C6t16sUn7L2PDIZg";

  request({ url, json: true }, (error, {body}) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    if (error) {
      callback("Unable to connect to the location services!", undefined);
    } else if (body.features.length === 0) {
      //   callback(response.body.features.error);
      callback("Unable to find the location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[1],
        longitude: body.features[0].geometry.coordinates[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
