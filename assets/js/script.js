// Initialize Materialize CSS
M.AutoInit();

// DOM Element Variables
const citySearchEl = document.getElementById('city-search');
const mainWeatherEl = document.getElementById('weather-render')
const submitButtonEl = document.getElementById('city-submit');

// Search variables
let cityQuery = '';
let currentWeather = '';
let forecastWeather = '';
let cityImage = '';

// Weatherstack API URL and KEY
const weatherURL = 'http://api.weatherstack.com/';
const weatherKey = '6c2a44a6bfac6c49aad8e871d365fb56';
const unsplashApiKey = 'bJlzPHCI0vahqxnDYHw17P2WKMEE4PZqbrZ9Uop1wzU'

// test fetch function
const getCurrentWeather = function (url, key, query) {

	// set the url and the key to a search
	const searchURL = `${url}current?access_key=${key}&query=${cityQuery}`;
	fetch(searchURL).then(function(response) {
		response.json().then(function(data) {
			currentWeather = data;
			console.log(currentWeather);
		})
	})
};

const getForecast = function(url, key, query) {

	// set the url and the key to a search
	const searchURL = `${url}forecast?access_key=${key}&query=${cityQuery}`;
	fetch(searchURL).then(function(response) {
		response.json().then(function(data) {
			forecastWeather = data;
			console.log(forecastWeather);
		})
	})
}

const getCityImage = function(query) {
	const unsplashApiUrl =`https://api.unsplash.com/search/photos?client_id=${unsplashApiKey}&query=${cityQuery}`;
	fetch(unsplashApiUrl).then(function(response){
		response.json().then(function(data){
			cityImage = data;
			console.log(cityImage);
		})
	})
};

const removeEl = function() {
	mainWeatherEl.innerHTML = '';
};

const submitting = function(event) {
	event.preventDefault();
	cityQuery = citySearchEl.value;
 	console.log(cityQuery);
 	removeEl();
 	getCurrentWeather(weatherURL, weatherKey, cityQuery);
 	getForecast(weatherURL, weatherKey, cityQuery);
 	getCityImage(cityQuery);
};


// Event Listener functions
citySearchEl.addEventListener('onsubmit', submitting);

submitButtonEl.addEventListener('click', submitting);


// Resize cards on smaller windows
$(window).resize(function(){

		if($(window).width() <= 1244){
		$('.horizontal').removeClass('horizontal');
		}
		if(1243 <= $(window).width()){
			$('.main-weather').addClass('horizontal');
		}

		if($(window).width() <= 1200){
		$('.daily').removeClass('m2');
		}
		if(1200 <= $(window).width()){
			$('.daily').addClass('m2');
		}

    });