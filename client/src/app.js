// const CountryView = require("./views/countryView")
const Request = require('./services/request.js');
const CountryView = require('./views/countryView.js')

// const countryView = new CountryView();
const request = new Request('http://restcountries.eu/rest/v2/all');

const countryView = new CountryView();

const appStart = function(){
  request.get(getCountriesRequestComplete);

  const saveButton = document.querySelector('#submit');
  saveButton.addEventListener('click', handleButtonClick);


}

const handleButtonClick = function(event) {
  event.preventDefault();


}

const getCountriesRequestComplete = function(allCountries) {
  allCountries.forEach(function(country) {
    countryView.addCountry(country);
  })

}

window.addEventListener('load', appStart);
