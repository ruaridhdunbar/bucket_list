// const CountryView = require("./views/countryView")
const Request = require('./services/request.js');
const CountryView = require('./views/countryView.js')
const Country = require('./models/country.js')
const MapWrapper = require('./models/mapWrapper.js')

// const countryView = new CountryView();
const request = new Request('http://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/api/bucket-list');

const countryView = new CountryView();

let mainMap;

const appStart = function(){
  request.get(getCountriesRequestComplete);
  const mapDiv = document.getElementById('country-map');
  mainMap = new MapWrapper(mapDiv, [0, 0], 2);
  dbRequest.get(getSavedCountriesRequestComplete);

}

const getSavedCountriesRequestComplete = function(allSavedCountries) {
  allSavedCountries.forEach(function(country) {
    if (country.coords && country.coords.length === 2) {
      mainMap.addMarker(country.coords);
    }
  })
  countryView.addToList(allSavedCountries);
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
  if (country.coords && country.coords.length === 2) {
    mainMap.addMarker(country.coords);
  }
}

window.addEventListener('load', appStart);
