window.addEventListener("load", () => {
    let long;
    let lat;
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => {
        long= position.coords.longitude;
        lat = position.coords.latitude;
        const proxy= "https://cors-anywhere.herokuapp.com/";
        const api = ${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={c75f579fe9ceef571b3bd453ce011e48};
        fetch(api)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    })
})