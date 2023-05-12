// Obtener el elemento del párrafo por su id
var currentDateElement = document.getElementById("currentDate");

// Obtener la fecha actual
var currentDate = new Date();

// Formatear la fecha como desees (ejemplo: DD/MM/AAAA)
var formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();

// Mostrar la fecha en el elemento del párrafo
currentDateElement.innerHTML = formattedDate;
