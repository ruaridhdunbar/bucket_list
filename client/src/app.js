// const CountryView = require("./views/countryView")
const Request = require('./services/request.js');

// const countryView = new CountryView();
const request = new Request('http://restcountries.eu/rest/v2/all');

const appStart = function(){
  request.get(getCountriesRequestComplete);
}

const getCountriesRequestComplete = function(allCountries) {
  console.log(allCountries);
}

window.addEventListener('load', appStart);
