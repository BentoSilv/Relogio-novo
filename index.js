  function showTime() {
 
  var data = new Date();
 
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();
  var periodo = "";

  if (hora >= 12) {
  periodo = "PM";
  } else {
  periodo = "AM";
  }
 if (hora == 0) {
  hora = 12;
  } else {
  if (hora > 12) {
  hora = hora - 12;
  }
  }
 
  hora = update(hora);
  minuto = update(minuto);
  segundo = update(segundo);

  document.getElementById("digital-clock").innerHTML = hora + " : " + minuto + " : " + segundo + " " + periodo;
  setInterval(showTime, 1000);
  }

  function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
    }
  showTime();