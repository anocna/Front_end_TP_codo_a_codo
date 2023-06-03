function validateForm() {
    var name = document.forms["myForm"]["nombre"].value;
    var apellido = document.forms["myForm"]["apellido"].value;
    var show = document.forms["myForm"]["show"].value;
    var email = document.forms["myForm"]["email"].value;
    var cantidad = document.forms["myForm"]["cantidad"].value;
    var date = document.forms["myForm"]["date"].value;

    
    if (name == "") {
      alert("Por favor, ingresa tu nombre");
      return false;
    }

    if (apellido == "") {
        alert("Por favor, ingresa tu apellido");
        return false;
    }

    if (date == "") {
        alert("Por favor, ingresa tu fecha de nacimiento, recorda que debes ser mayor de 16 años");
        return false;
      }
    
    if (show == "") {
        alert("Por favor, selecciona un show");
        return false;
    }

    if (cantidad == "") {
        alert("Por favor, selecciona la cantidad de entradas");
        return false;
    }

    if (email == "") {
      alert("Por favor, ingresa tu correo electrónico");
      return false;
    }
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    // Realiza la solicitud a la API de OpenWeatherMap
    var request = new XMLHttpRequest();
    var apiKey = 'fa6d5bf1d6e047db0c91192beb716174'; // Reemplaza con tu propia API Key
    var city = 'Banfield'; // Reemplaza con el nombre de la ciudad deseada
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&lang=es&units=metric';
  
    /*request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Procesa la respuesta de la API
        var data = JSON.parse(request.responseText);
        
        // Accede a los datos relevantes del clima
        var cityName = data.name;
        var temperature = data.main.temp;
        var weatherDescription = data.weather[0].description;
        var condition = data.weather[0].description;
        var iconCode = data.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

         Muestra los datos en el contenedor HTML
        var container = document.getElementById('weather-container');
        container.innerHTML = 'Ciudad: ' + cityName + '<br>' +
                              'Temperatura: ' + temperature + '°C<br>' +
                              'Descripción: ' + weatherDescription;
      */
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        
        // Acceso a los datos 
        var location = data.name;
        var temperature = Math.round(data.main.temp);
        var condition = data.weather[0].description;
        var iconCode = data.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
  
        // Muestrar datos
        var locationElement = document.getElementById('location');
        var temperatureElement = document.getElementById('temperature');
        var conditionElement = document.getElementById('condition');
        var iconElement = document.createElement('img');
        iconElement.src = iconUrl;
  
        locationElement.textContent = location;
        temperatureElement.textContent = temperature + '°C';
        conditionElement.textContent = condition;
        conditionElement.appendChild(iconElement);

      } else {
        console.log('Error al realizar la solicitud a la API');
      }
    };
  
    request.onerror = function() {
      console.log('Error de conexión');
    };
  
    request.send();
  });


