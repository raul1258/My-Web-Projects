const API_KEY="c281a5f9af3bfe6d083f8675f3b61d4d"

const getFormatedWeatherData = async(city,units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=$(API_KEY)&units(units)`;

    const data = await fetch (URL)
    .then((res) => res.json())
    .then((data) => data);

    console.log(data);
} 

export {getFormatedWeatherData}