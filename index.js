function showTime() {
 
  var date = new Date();
 
  var hour = date.getHours();
 
var minute = date.getMinutes();
 
  var second = date.getSeconds();
  //  Variável para armazenar AM/ PM
  var period = "";
  // Atribuição AM/PM de acordo com a hora atual
  if (hour >= 12) {
  period = "PM";
  } else {
  period = "AM";
  }
  // Converter a hora em formato de 12 horas
  if (hour == 0) {
  hour = 12;
  } else {
  if (hour > 12) {
  hour = hour - 12;
  }
  }
  //Hora de atualização, minuto e segundo
  //se forem menos de 1010
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adicionando elementos de tempo ao div
  document.getElementById("digital-clock").innerHTML = hour + " : " + minute + " : " + second + " " + period;
  // Set Timer to 1 sec (1000 ms)
  setInterval(showTime, 1000);
  }
  // Função para atualizar elementos de tempo se forem inferiores a 10
  // Apêndice 0 antes dos elementos do tempo se forem inferiores a 10
  function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
  }
  showTime();