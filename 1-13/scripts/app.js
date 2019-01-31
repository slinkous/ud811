
(function() {
  'use strict';

  var dummyForecast = {
    "latitude":38.2527,
    "longitude":85.7585,
    "timezone":"Asia/Urumqi",
    "currently":{
      "time":1548971873,
      "summary":"Mostly Cloudy",
      "icon":"partly-cloudy-night",
      "precipIntensity":0,
      "precipProbability":0,
      "temperature":11.94,
      "apparentTemperature":-1.79,
      "dewPoint":4.88,
      "humidity":0.73,
      "pressure":1024.67,
      "windSpeed":10.95,
      "windGust":12.99,
      "windBearing":209,
      "cloudCover":0.8,
      "uvIndex":0,
      "visibility":10,
      "ozone":338.95
    },
    "daily":{
      "summary":"No precipitation throughout the week, with high temperatures rising to 37°F tomorrow.",
      "icon":"clear-day",
      "data":[
        {"time":1548957600,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1548984213,"sunsetTime":1549021193,"moonPhase":0.89,"precipIntensity":0,"precipIntensityMax":0.0001,"precipIntensityMaxTime":1548979200,"precipProbability":0,"temperatureHigh":25.63,"temperatureHighTime":1549008000,"temperatureLow":13.6,"temperatureLowTime":1549062000,"apparentTemperatureHigh":18.75,"apparentTemperatureHighTime":1549011600,"apparentTemperatureLow":10.34,"apparentTemperatureLowTime":1549069200,"dewPoint":3.84,"humidity":0.55,"pressure":1022.92,"windSpeed":4.54,"windGust":13.48,"windGustTime":1548986400,"windBearing":226,"cloudCover":0.95,"uvIndex":2,"uvIndexTime":1548997200,"visibility":9.94,"ozone":333.11,"temperatureMin":8.06,"temperatureMinTime":1548957600,"temperatureMax":25.63,"temperatureMaxTime":1549008000,"apparentTemperatureMin":-4.29,"apparentTemperatureMinTime":1548957600,"apparentTemperatureMax":18.75,"apparentTemperatureMaxTime":1549011600},
        {"time":1549044000,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1549070561,"sunsetTime":1549107662,"moonPhase":0.92,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1549126800,"precipProbability":0,"temperatureHigh":37.46,"temperatureHighTime":1549094400,"temperatureLow":12.23,"temperatureLowTime":1549148400,"apparentTemperatureHigh":30.86,"apparentTemperatureHighTime":1549094400,"apparentTemperatureLow":4.21,"apparentTemperatureLowTime":1549148400,"dewPoint":4.32,"humidity":0.46,"pressure":1028.43,"windSpeed":5.85,"windGust":17.8,"windGustTime":1549108800,"windBearing":43,"cloudCover":0.99,"uvIndex":2,"uvIndexTime":1549083600,"visibility":5.79,"ozone":322.54,"temperatureMin":13.6,"temperatureMinTime":1549062000,"temperatureMax":37.46,"temperatureMaxTime":1549094400,"apparentTemperatureMin":9.47,"apparentTemperatureMinTime":1549123200,"apparentTemperatureMax":30.86,"apparentTemperatureMaxTime":1549094400},
        {"time":1549130400,"summary":"Partly cloudy until evening.","icon":"partly-cloudy-day","sunriseTime":1549156908,"sunsetTime":1549194130,"moonPhase":0.95,"precipIntensity":0.0001,"precipIntensityMax":0.0003,"precipIntensityMaxTime":1549213200,"precipProbability":0.01,"precipAccumulation":0.035,"precipType":"snow","temperatureHigh":36.29,"temperatureHighTime":1549184400,"temperatureLow":17.05,"temperatureLowTime":1549234800,"apparentTemperatureHigh":32.26,"apparentTemperatureHighTime":1549184400,"apparentTemperatureLow":10.8,"apparentTemperatureLowTime":1549234800,"dewPoint":8.01,"humidity":0.53,"pressure":1029.99,"windSpeed":3.35,"windGust":8.09,"windGustTime":1549130400,"windBearing":352,"cloudCover":0.52,"uvIndex":3,"uvIndexTime":1549173600,"visibility":10,"ozone":311.23,"temperatureMin":12.23,"temperatureMinTime":1549148400,"temperatureMax":36.29,"temperatureMaxTime":1549184400,"apparentTemperatureMin":4.21,"apparentTemperatureMinTime":1549148400,"apparentTemperatureMax":32.26,"apparentTemperatureMaxTime":1549184400},
        {"time":1549216800,"summary":"Partly cloudy starting in the evening.","icon":"partly-cloudy-night","sunriseTime":1549243253,"sunsetTime":1549280599,"moonPhase":0.98,"precipIntensity":0.0001,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1549224000,"precipProbability":0.01,"precipAccumulation":0.04,"precipType":"snow","temperatureHigh":37.14,"temperatureHighTime":1549267200,"temperatureLow":9.37,"temperatureLowTime":1549328400,"apparentTemperatureHigh":31.19,"apparentTemperatureHighTime":1549267200,"apparentTemperatureLow":5.04,"apparentTemperatureLowTime":1549332000,"dewPoint":9.05,"humidity":0.55,"pressure":1025.1,"windSpeed":5.11,"windGust":22.17,"windGustTime":1549292400,"windBearing":21,"cloudCover":0.19,"uvIndex":3,"uvIndexTime":1549260000,"visibility":10,"ozone":313.25,"temperatureMin":17.05,"temperatureMinTime":1549234800,"temperatureMax":37.14,"temperatureMaxTime":1549267200,"apparentTemperatureMin":6.64,"apparentTemperatureMinTime":1549296000,"apparentTemperatureMax":31.19,"apparentTemperatureMaxTime":1549267200},
        {"time":1549303200,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1549329597,"sunsetTime":1549367068,"moonPhase":0.01,"precipIntensity":0.0002,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1549371600,"precipProbability":0.02,"precipAccumulation":0.06,"precipType":"snow","temperatureHigh":28.68,"temperatureHighTime":1549357200,"temperatureLow":14.96,"temperatureLowTime":1549411200,"apparentTemperatureHigh":21.32,"apparent100 24076  100 24076    0     0  46658      0 --:--:-- --:--:-- --:--:-- 46658atureLowTime":1549411200,"dewPoint":2.09,"humidity":0.5,"pressure":1015.38,"windSpeed":3.2,"windGust":17.76,"windGustTime":1549303200,"windBearing":39,"cloudCover":0.92,"uvIndex":2,"uvIndexTime":1549342800,"visibility":10,"ozone":317.43,"temperatureMin":9.37,"temperatureMinTime":1549328400,"temperatureMax":28.68,"temperatureMaxTime":1549357200,"apparentTemperatureMin":5.04,"apparentTemperatureMinTime":1549332000,"apparentTemperatureMax":21.32,"apparentTemperatureMaxTime":1549357200},
        {"time":1549389600,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1549415939,"sunsetTime":1549453537,"moonPhase":0.04,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1549425600,"precipProbability":0,"temperatureHigh":34.36,"temperatureHighTime":1549443600,"temperatureLow":20.75,"temperatureLowTime":1549479600,"apparentTemperatureHigh":27.04,"apparentTemperatureHighTime":1549443600,"apparentTemperatureLow":13.14,"apparentTemperatureLowTime":1549486800,"dewPoint":3,"humidity":0.41,"pressure":1012.5,"windSpeed":3.59,"windGust":21.36,"windGustTime":1549458000,"windBearing":29,"cloudCover":0.98,"uvIndex":2,"uvIndexTime":1549429200,"visibility":7.54,"ozone":343.93,"temperatureMin":14.96,"temperatureMinTime":1549411200,"temperatureMax":34.36,"temperatureMaxTime":1549443600,"apparentTemperatureMin":8.14,"apparentTemperatureMinTime":1549411200,"apparentTemperatureMax":27.04,"apparentTemperatureMaxTime":1549443600},
        {"time":1549476000,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1549502280,"sunsetTime":1549540005,"moonPhase":0.07,"precipIntensity":0.0019,"precipIntensityMax":0.0071,"precipIntensityMaxTime":1549519200,"precipProbability":0.16,"precipAccumulation":0.473,"precipType":"snow","temperatureHigh":32.48,"temperatureHighTime":1549530000,"temperatureLow":22.82,"temperatureLowTime":1549576800,"apparentTemperatureHigh":24.09,"apparentTemperatureHighTime":1549533600,"apparentTemperatureLow":14.54,"apparentTemperatureLowTime":1549573200,"dewPoint":14.15,"humidity":0.61,"pressure":1021.79,"windSpeed":1.1,"windGust":11.99,"windGustTime":1549522800,"windBearing":314,"cloudCover":1,"uvIndex":2,"uvIndexTime":1549515600,"visibility":5.72,"ozone":325.42,"temperatureMin":20.75,"temperatureMinTime":1549479600,"temperatureMax":32.48,"temperatureMaxTime":1549530000,"apparentTemperatureMin":13.14,"apparentTemperatureMinTime":1549486800,"apparentTemperatureMax":24.09,"apparentTemperatureMaxTime":1549533600},
        {"time":1549562400,"summary":"Mostly cloudy until evening.","icon":"partly-cloudy-day","sunriseTime":1549588619,"sunsetTime":1549626474,"moonPhase":0.1,"precipIntensity":0.0004,"precipIntensityMax":0.0018,"precipIntensityMaxTime":1549562400,"precipProbability":0.07,"precipAccumulation":0.13,"precipType":"snow","temperatureHigh":36.97,"temperatureHighTime":1549616400,"temperatureLow":11.1,"temperatureLowTime":1549666800,"apparentTemperatureHigh":31.12,"apparentTemperatureHighTime":1549616400,"apparentTemperatureLow":2.08,"apparentTemperatureLowTime":1549666800,"dewPoint":17.34,"humidity":0.67,"pressure":1035.4,"windSpeed":2.58,"windGust":8.27,"windGustTime":1549638000,"windBearing":186,"cloudCover":0.83,"uvIndex":2,"uvIndexTime":1549602000,"visibility":10,"ozone":333.05,"temperatureMin":17.44,"temperatureMinTime":1549645200,"temperatureMax":36.97,"temperatureMaxTime":1549616400,"apparentTemperatureMin":10.55,"apparentTemperatureMinTime":1549645200,"apparentTemperatureMax":31.12,"apparentTemperatureMaxTime":1549616400}
    ]},
    "flags":{"sources":["cmc","gfs","icon","isd","madis"],"units":"us"},"offset":6}



  var weatherAPIUrlBase = 'https://api.darksky.net/forecast/1d75c71db9cb96d1e1817c9296fe3280/';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  /* Event listener for refresh button */
  document.getElementById('butRefresh').addEventListener('click', function() {
    app.updateForecasts();
  });

  /* Event listener for add new city button */
  document.getElementById('butAdd').addEventListener('click', function() {
    // Open/show the add new city dialog
    app.toggleAddDialog(true);
  });

  /* Event listener for add city button in add city dialog */
  document.getElementById('butAddCity').addEventListener('click', function() {
    var select = document.getElementById('selectCityToAdd');
    var selected = select.options[select.selectedIndex];
    var key = selected.value;
    var label = selected.textContent;
    app.getForecast(key, label);
    app.selectedCities.push({key: key, label: label});
    app.toggleAddDialog(false);
  });

  /* Event listener for cancel button in add city dialog */
  document.getElementById('butAddCancel').addEventListener('click', function() {
    app.toggleAddDialog(false);
  });


  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the add new city dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  // Updates a weather card with the latest weather forecast. If the card
  // doesn't already exist, it's cloned from the template.
  app.updateForecastCard = function(data) {
    var card = app.visibleCards[data.key];
    if (!card) {
      card = app.cardTemplate.cloneNode(true);
      card.classList.remove('cardTemplate');
      card.querySelector('.location').textContent = data.label;
      card.removeAttribute('hidden');
      app.container.appendChild(card);
      app.visibleCards[data.key] = card;
    }
    card.querySelector('.description').textContent = data.currently.summary;
    card.querySelector('.date').textContent =
      new Date(data.currently.time * 1000);
    card.querySelector('.current .icon').classList.add(data.currently.icon);
    card.querySelector('.current .temperature .value').textContent =
      Math.round(data.currently.temperature);
    card.querySelector('.current .feels-like .value').textContent =
      Math.round(data.currently.apparentTemperature);
    card.querySelector('.current .precip').textContent =
      Math.round(data.currently.precipProbability * 100) + '%';
    card.querySelector('.current .humidity').textContent =
      Math.round(data.currently.humidity * 100) + '%';
    card.querySelector('.current .wind .value').textContent =
      Math.round(data.currently.windSpeed);
    card.querySelector('.current .wind .direction').textContent =
      data.currently.windBearing;
    var nextDays = card.querySelectorAll('.future .oneday');
    var today = new Date();
    today = today.getDay();
    for (var i = 0; i < 7; i++) {
      var nextDay = nextDays[i];
      var daily = data.daily.data[i];
      if (daily && nextDay) {
        nextDay.querySelector('.date').textContent =
          app.daysOfWeek[(i + today) % 7];
        nextDay.querySelector('.icon').classList.add(daily.icon);
        nextDay.querySelector('.temp-high .value').textContent =
          Math.round(daily.temperatureMax);
        nextDay.querySelector('.temp-low .value').textContent =
          Math.round(daily.temperatureMin);
      }
    }
    if (app.isLoading) {
      app.spinner.setAttribute('hidden', true);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
  };


  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/

  // Gets a forecast for a specific city and update the card with the data
  app.getForecast = function(key, label) {
    var url = weatherAPIUrlBase + key + '.json';
    // Make the XHR to get the data, then update the card
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          response.key = key;
          response.label = label;
          app.updateForecastCard(response);
        }
      }
    };
    request.open('GET', url);
    request.send();
  };

  // Iterate all of the cards and attempt to get the latest forecast data
  app.updateForecasts = function() {
    var keys = Object.keys(app.visibleCards);
    keys.forEach(function(key) {
      app.getForecast(key);
    });
  };
  app.updateForecastCard(dummyForecast)
})();
