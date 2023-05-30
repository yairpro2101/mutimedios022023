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

  //       //  apis/ActualizarCursos.php
  // // { "id":3, "nombre":"React 22",
  //  "descripcion":"React Junior",
  //  "tiempo":"10 Meses",

  var datosenviar = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    tiempo: tiempo,
    usuario: "profesor Mario",
  };
  // console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
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