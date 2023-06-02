//declaracion de variables
var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarCurso"));
const myModalEditar = new bootstrap.Modal(document.getElementById("editarCurso"));
var formulario = document.getElementById("formulario");
var formularioEditar = document.getElementById("formularioEditar");


  //actualizar los cursos
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var tiempo = document.getElementById("tiempo").value;
    var usuario = "Yair";
  
    var datosenviar = {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: usuario,
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

  //actualizar los cursos
  formularioEditar.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombreEdit").value;
    var descripcion = document.getElementById("descripcionEdit").value;
    var tiempo = document.getElementById("tiempoEdit").value;
    var usuario = "Yair"
  
    var datosenviar = {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: usuario,
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
      setTabla(datosrepuesta.data);
      
    })
    .catch(console.log); //errores
  }

  function setTabla(datos) {
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
                <a name="" id="nombre" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}', '${valor.descripcion}', '${valor.tiempo}', '${valor.usuario}') "role="button">Editar</a>
            </td>
        </tr>`;
    }
}

//editar los Cursos
function editar(id, nombre, descripcion, tiempo, usuario) {
  myModalEditar.show();

    
    document.getElementById("id").value = id;
    document.getElementById("nombreEdit").value = nombre;
    document.getElementById("descripcionEdit").value = descripcion;
    document.getElementById("tiempoEdit").value = tiempo;
    document.getElementById("usuarioEdit").value = usuario;
    
}


//eliminar los Cursos
function eliminar(id) {
  var datosenviar = {
    id: id,
};
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
  var usuario = "Yair"

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
