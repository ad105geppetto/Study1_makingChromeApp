function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log('You live in', lat, lng)
}

function onGeoErr() {
    alert(`Can't find you, No weather for you!`)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)