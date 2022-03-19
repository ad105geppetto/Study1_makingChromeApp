const weather = document.querySelector('#weather')

navigator.geolocation.getCurrentPosition((position) => {
    weatherAPI(position.coords.latitude, position.coords.longitude)
});

function weatherAPI (lat, lon) {
    const appId =''
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return weather.innerText = `사는 곳: ${data.name}
             날씨: ${data.weather[0].main}`

        })
};

// weather.innerText = '왕'

// weatherAPI()