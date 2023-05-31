var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarCurso"));
var formulario = document.getElementById("formulario");


//actualizar los grupos
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("guardando");
  
    var nombre = document.getElementById("nombre").value;
  
    var datosenviar = {
      nombre: nombre,
    };
    
  
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    }) //url de peticion de datos
      .then((respuesta) => respuesta.json()) //recibe los datos en formato json
      .then((datosrepuesta) => {
        window.location = "listaGrupo.html";
        console.log("Datos", datosrepuesta);
      })
      .catch(console.log); //errores
  });