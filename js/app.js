const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const btn = document.getElementById(`btn`)

function loader(state){
    if(state){
        overlay.classList.remove(`d-none`)
    }else{
        overlay.classList.add(`d-none`)
    }
}

changeLocation.city.focus()
//updateUi
function updateUI(weather) {
    console.log(weather);
 details.innerHTML = `
 <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
          </div>
 `
 weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
if(card.classList.contains(`d-none`)){
    card.classList.remove(`d-none`)
}
}


const getWeather = async (city) => {
    const data = await getData(city)
    return(data);
}

btn.addEventListener(`click`, (e) => {
    e.preventDefault()
    const inputValue = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(inputValue)
    .then((data) => updateUI(data))
    .catch((err ) => {
        console.log(`salom`);
    })
})