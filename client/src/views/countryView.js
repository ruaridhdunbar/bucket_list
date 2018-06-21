const CountryView = function() {
  this.countries = [];
}

CountryView.prototype.addCountry = function(country) {
  this.countries.push(country);
  this.addToDropDown(country);
}

CountryView.prototype.addToDropDown = function(country) {
  const selector = document.querySelector('#select-country');
  const option = document.createElement('option');
  option.textContent = country.name;
  option.value = JSON.stringify(country);
  selector.appendChild(option);
}


module.exports = CountryView;
