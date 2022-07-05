console.log("Client side javascript is loaded!");

// fetch("http://api.weatherstack.com/current?access_key=31931a8cf4ce46f8854e839fc6dd3413&query=27.7172,85.3240").then((response) => {
//   response.json().then((data) => {
//     console.log(data.current.weather_descriptions)
//   });
// });


// fetch("http://localhost:3000/weather?address=!").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log( data.error )
//     }else{
//       console.log(data.locationDetail);
//       console.log(data.forecastDetail);
//     }
    
//   });
// });


const weatherForm = document.querySelector("form");
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")




  weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value
  // console.log(location)
  
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  fetch("/weather?address=" + location).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent =  data.error 
      messageTwo.textContent = ''
    }else{
      messageOne.textContent =  data.locationDetail 
      messageTwo.textContent = data.forecastDetail
    }
    
  });
});

  // console.log("Testing!");
});


// fetch("http://localhost:3000/weather?address=bharatpur").then((response) => {
//   response.json().then((data) => {
//     if(data.error){
//       console.log(data.error);
//     }else{
//       console.log(data.locationDetail);
//       console.log(data.forecast);
//     }
//   });
// });
