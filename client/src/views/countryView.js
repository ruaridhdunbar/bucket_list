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

CountryView.prototype.addToList = function(countries){
  const ul = document.querySelector('#saved-countries');
  countries.forEach(function(country){
    const li = document.createElement('li');
    li.textContent = country.name;
    ul.appendChild(li);
  })
}

CountryView.prototype.clear = function() {
  this.countries = [];
  const ul = document.querySelector('#saved-countries');
  ul.innerHTML = '';
}


module.exports = CountryView;
