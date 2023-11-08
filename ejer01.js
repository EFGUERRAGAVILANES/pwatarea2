
const botonCambioEstilo = document.getElementById("cambiarEstiloBoton");
const elementoCambiado = document.getElementById("elementoCambiado");


botonCambioEstilo.addEventListener("click", function () {

  const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);

  elementoCambiado.style.backgroundColor = colorAleatorio;
});
