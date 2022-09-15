// Do not show api key on my js File 
const API_KEY = `be3fa21ee0e378846d2e525782ed9140`
const loadTempreture = city => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      fetch(url)
      .then(res => res.json())
      .then(data => displayTemperture(data))
      
}
const displayTemperture = data => {
      // const temperture = document.getElementById('temperature');
      // // console.log(data.main.temp)
      // temperture.innerText = data.main.temp;
      setInputTextById('temperature', data.main.temp)
      setInputTextById('condition',data.weather[0].main)
      // console.log(data.weather[0].main)
}
const setInputTextById = (id, text) => {
      const temperture = document.getElementById(id);
      temperture.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
      const searchField = document.getElementById('search-field')
      const city = searchField.value 
      // set city 
      document.getElementById('city').innerText = city;
      loadTempreture(city);
})
loadTempreture('dhaka');