window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDesciption = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone= document.querySelector('.location-timezone');
    let button = document.querySelector('.button');
    let inputValue = document.querySelector('.inputValue');
    let weatherDescription = document.querySelector('.weather-description');
    



    button.addEventListener('click',function(){

            const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=2fc890b474e643f9e74c837f951d5d75&units=imperial`

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temp}= data.main;
                const name = data.name;
                const timezone = data.timezone;
                const description = data.weather[0].description
                
                //Set DOM elements from the API
                temperatureDegree.textContent = temp;
                temperatureDesciption.textContent = name; 
                locationTimezone.textContent = timezone;
                weatherDescription.textContent = description;
            });
        });
}
    
);