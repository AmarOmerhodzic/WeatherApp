let weather ={
  "apiKey": "e69ecb2769e7593b4e8ab1b80f421c36",
  fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
    .then((response)=> response.json())
    .then((data)=>this.displayWeather(data));
  },
  displayWeather: function(data){
    const { name } = data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    document.querySelector(".city").innerText="Weather in "+ name;
    document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    document.querySelector(".description").innerText= description;
    document.querySelector(".temp").innerText=temp + "°C"; 
    document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText= "Wind speed: " + speed + "km/h";
  },
  search: function (){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click", function (){
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    weather.search();
  }
});
//search-list
const Search = document.getElementById('.search');
const matchList = document.getElementById('.match-list');
const searchStates = async searchText =>{
  const res = await fetch('.../data/states.json');
  const states = await res.json;
  console.log(states);
}
Search.addEventListener('input', () => searchStates(Search.value));

weather.fetchWeather("London")