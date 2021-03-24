// Initialize Materialize CSS
M.AutoInit();

// DOM Element Variables
citySearchEl = document.getElementById('city-search');
mainEl = document.getElementById('main')
submitButtonEl = document.getElementById('city-submit');

// Search variables
let cityQuery = '';

// Weatherstack API URL and KEY
const weatherURL = 'http://api.weatherstack.com/';
const weatherKey = '6c2a44a6bfac6c49aad8e871d365fb56';

// test fetch function
const getCurrentWeather = function (url, key, query) {

	// set the url and the key to a search
	const searchURL = `${url}current?access_key=${key}&query=${cityQuery}`;
	fetch(searchURL).then(function(response) {
		response.json().then(function(data) {
			let currentWeather = data;
			console.log(currentWeather);
		})
	})
};


const removeEl = () => {
	mainEl.innerHTML = '';
};

// Event Listener functions
citySearchEl.addEventListener('onsubmit', function(event) {
	event.preventDefault();
	cityQuery = citySearchEl.value;
	removeEl();
 	console.log(cityQuery);
 	getCurrentWeather(weatherURL, weatherKey, cityQuery);
});

submitButtonEl.addEventListener('click', function(event) {
	event.preventDefault();
	cityQuery = citySearchEl.value
	removeEl();
	console.log(cityQuery);
	getCurrentWeather(weatherURL, weatherKey, cityQuery);
})


// Resize cards on smaller windows
$(window).resize(function(){

		if($(window).width() <= 860){
		$('.horizontal').removeClass('horizontal');
		}
		if(860 <= $(window).width()){
			$('.main-weather').addClass('horizontal');
		}

		if($(window).width() <= 1200){
		$('.daily').removeClass('m2');
		}
		if(1200 <= $(window).width()){
			$('.daily').addClass('m2');
		}

    });