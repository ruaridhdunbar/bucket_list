// const CountryView = require("./views/countryView")
const Request = require('./services/request.js');
const CountryView = require('./views/countryView.js')
const Country = require('./models/country.js')

// const countryView = new CountryView();
const request = new Request('http://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/bucket-list');

const countryView = new CountryView();

const appStart = function(){
  request.get(getCountriesRequestComplete);
}


const getCountriesRequestComplete = function(allCountries) {
  allCountries.forEach(function(country) {

    const newCountry = new Country({
      name: country.name,
      coords: country.latlng
    })

    countryView.addCountry(newCountry);
  })
  const saveButton = document.querySelector('#submit');
  saveButton.addEventListener('click', handleButtonClick);
}

const handleButtonClick = function(event) {
  event.preventDefault();
  const selectedCountry = document.querySelector('#select-country').value;
  const selectedCountryParsed = JSON.parse(selectedCountry);
  dbRequest.post(selectedCountryParsed, saveRequestComplete);
}

const saveRequestComplete = function(country){
  console.log('hiya');
}

window.addEventListener('load', appStart);
