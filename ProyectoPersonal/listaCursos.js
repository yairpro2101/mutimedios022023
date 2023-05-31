//declaracion de variables
var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarCurso"));
var formulario = document.getElementById("formulario");


  //actualizar los cursos
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombreCurso").value;
  
    var datosenviar = {
      id: id,
      nombre: nombre,
    };
    
  
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    }) //url de peticion de datos
      .then((respuesta) => respuesta.json()) //recibe los datos en formato json
      .then((datosrepuesta) => {
        window.location = "listaCursos.html";
        console.log("Datos", datosrepuesta);
      })
      .catch(console.log); //errores
  });

  //cargar los datos
  function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php") //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      steTabla(datosrepuesta.data);
      
    })
    .catch(console.log); //errores
  }

  function steTabla(datos) {
    console.log("Datos", datos);
    for (const valor of datos) {
      contenidoTabla.innerHTML += `
        <tr class="table-primary" >
            <td scope="row">${valor.id}</td>
                <td>${valor.nombre}</td>
                <td>${valor.descripcion}</td>
                <td>${valor.tiempo}</td>
                <td>${valor.usuario}</td>
                    <td>
                <a name="" id="id" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                    ||
                <a name="" id="nombre" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}', '${valor.descripcon}', '${valor.tiempo}', '${valor.usuario}') "role="button">Editar</a>
            </td>
        </tr>`;
    }
}

//editar los grupos
function editar(id, nombre) {
  myModal.show();

  document.getElementById("id").value = id;
  document.getElementById("nombreGrupo").value = nombre;
}

//eliminar los grupos
function eliminar(id) {
  var datosenviar = {
    id: id,
};
  //console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      window.location = "listaCursos.html";
      console.log("Datos ", datosrepuesta); 
      
    })
    .catch(console.log); //errores
}

//agregar Cursos
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var nombre = document.getElementById("nombreCurso").value;
  var descripcion = document.getElementById("descripcion").value;
  var tiempo = document.getElementById("tiempo").value;
  var usuario = document.getElementById("usuario").value;

  var datosenviar = {
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: usuario,
  }

  console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      console.log("Datos ", datosrepuesta);
    })
    .catch(console.log); //muestra errores
});

cargarDatos();
