const loadWeatherData = async () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=2b63c0ec704aeed8dba790b11e33e9fe&units=metric
    `;

    const res = await fetch(url);
    const data = await res.json();
    displayWeatherData(data);

}

const getInfo = (id, data) => {
    document.getElementById(id).innerText = data;
}

const displayWeatherData = data => {
    const { name, main, weather, dt } = data;
    console.log(data);
    getInfo('city', name);
    getInfo('temperature', main.temp);
    getInfo('weather', weather[0].main);

    const imgUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weatherImg');
    imgIcon.setAttribute('src', imgUrl);
}