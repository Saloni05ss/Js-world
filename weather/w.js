//if user pressed enter button and the text field is not empty then
const text = document.querySelector("input");
const infoText = document.querySelector("h4");
const locationBt = document.querySelector(".location");
const container = document.querySelector(".container");
const goBtn = document.querySelector(".back");
const weCon = document.querySelector("img");
let apiKey;
let api;

text.addEventListener("keyup", e => {
    if (e.key == "Enter" && text.value != "") {
        //console.log("ok");
        requestAPI(text.value);
    }
})
//location fetch
locationBt.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
    //if location supported by your device
    else {
        alert("your device does not support geolocation api");
    }
})

function onSuccess(position) {
    //console.log(position);
    const { latitude, longitude } = position.coords;
    //fetching latitude and longitude
    //console.log(latitude, longitude);
    apiKey = `0ee5e9c54fe3ee3f71b8ce481c3b2746`;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    fetchData();
}

function onError(error) {
    //console.log(error);
    infoText.innerText = error.message;
    infoText.classList.add("error");
}
//city name fetch
function requestAPI(city) {
    //here text.value will be equal to city
    //console.log(city);
    //let api=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
    apiKey = `0ee5e9c54fe3ee3f71b8ce481c3b2746`;
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetchData();
}
function fetchData() {
    //before fetching
    infoText.innerText = "Getting weather details"
    infoText.classList.add("pending")
    //fetch(api).then(response => console.log(response.json()));
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
    //here we fetch api response and return it in json format then we call weatherDetails function and pass result as an argument
    //here result stores all the weather data
}
function weatherDetails(info) {
    //here info is same as result
    infoText.classList.replace("pending", "error");
    if (info.cod == "404") {
        infoText.innerText = `${text.value} is not a valid city name`;
    }
    else {
        infoText.classList.remove("pending", "error");
        container.classList.add("active");
        let city1 = info.name;
        let temp = info.main.temp;
        let wdetails = info.weather[0].description;
        let wid = info.weather[0].id;
        let feel = info.main.feels_like;
        let sun_rise = info.sys.sunrise;
        let sun_set = info.sys.sunset;
        let pressure = info.main.pressure;
        let humidity = info.main.humidity;
        let windspeed = info.wind.speed;
        
        const sunriseDate = new Date(sun_rise * 1000); // Multiply by 1000 to convert seconds to milliseconds
        const sunsetDate = new Date(sun_set * 1000);
        
        // Format the Date objects to readable strings
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        
        const sunriseTimeString = sunriseDate.toLocaleTimeString('en-IN', options);
        const sunsetTimeString = sunsetDate.toLocaleTimeString('en-IN', options);
        
        //console.log(`Sunrise: ${sunriseTimeString}`);
        //console.log(`Sunset: ${sunsetTimeString}`);

        if (wid == 800) {
            //clear
            weCon.src = "clear.svg";
        }
        else if (wid > 800) {
            //cloud
            weCon.src = "cloud.svg";
        }
        else if(wid == 721){
            //haze
            weCon.src="haze.svg";
        }
        else if(wid >= 600 && wid <= 622){
            //snow
            weCon.src="snow.svg";
        }
        else if(wid >= 500 && wid <= 531){
            //rain
            weCon.src="rain.svg";
        }
        else if(wid >= 200 && wid <= 232){
            //storm
            weCon.src="storm.svg";
        }
        else if(wid >= 300 && wid <= 321){
            //drizzle
            weCon.src="drizzle.jpeg";
        }
        else{
            weCon.src="";
        }


        document.querySelector(".place").innerText = `${city1}`;
        document.querySelector(".degree").innerText = `${Math.floor(temp - 273.15)}°C`;
        document.querySelector(".w_details").innerText = `${wdetails}`;

        document.querySelector(".Feels_like").innerText = `${Math.floor(feel - 273.15)}°C`;
        document.querySelector(".Sunrise").innerText = `${sunriseTimeString}`;
        document.querySelector(".Sunset").innerText = `${sunsetTimeString}`;
        document.querySelector(".pressure").innerText = `${pressure}p`;
        document.querySelector(".Humidity").innerText = `${humidity}%`;
        document.querySelector(".Wind_speed").innerText = `${windspeed}km/h`;
    }
    console.log(info);
}
goBtn.addEventListener("click",() =>{
    container.classList.remove("active");
})



