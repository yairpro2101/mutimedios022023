//declaracion de variables
var contenidoTabla = document.querySelector("")
const myModal = new bootstrap.Modal(document.getElementById("modalId"));
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("guardando");
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var descripcion = document.getElementById("descripcion").value;
  var tiempo = document.getElementById("tiempo").value;


  var datosenviar = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    tiempo: tiempo,
  };
  

  fetch("", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      window.location = "listar.html";
      console.log("Datos", datosrepuesta); //Muestra el resultado de la peticion
    })
    .catch(console.log); //muestra errores
});