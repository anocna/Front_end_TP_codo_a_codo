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
  