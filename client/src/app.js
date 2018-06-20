const CountryView = require("./views/countryView")
const Request = require('./services/request.js');

const countryView = new CountryView();
const request = new Request('http://restcountries.eu/rest/v2/all');

onst appStart = function(){
  request.get(getCountriesRequestComplete);
}

window.addEventListener('load', appStart);
