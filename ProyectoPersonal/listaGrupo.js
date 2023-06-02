//declaracion de variables
var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarGrupos"));
const myModalEdit = new bootstrap.Modal(document.getElementById("editarGrupo"));
var formulario = document.getElementById("formularioG");
var formularioEditar = document.getElementById("formularioEditar");



//actualizar los grupos
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); 

  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;

  var datosenviar = {
    id: id,
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

//actualizar los grupos
formularioEditar.addEventListener("submit", function (e) {
  e.preventDefault(); 

  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombreGrupoEdit").value;

  var datosenviar = {
    id: id,
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


//cargar los datos
function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php") //url de peticion de datos
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
                    <td>
                <a name="" id="id" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                    ||
                <a name="" id="nombre" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.nombre}') "role="button">Editar</a>
            </td>
        </tr>`;
    }
}

//editar los grupos
function editar(id, nombre) {
    myModalEdit.show();

    document.getElementById("id").value = id;
    document.getElementById("nombreGrupoEdit").value = nombre;
}

//eliminar los grupos
function eliminar(id) {
    var datosenviar = {
      id: id,
};
    //console.log(datosenviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    }) //url de peticion de datos
      .then((respuesta) => respuesta.json()) //recibe los datos en formato json
      .then((datosrepuesta) => {
        //alert(datosrepuesta.data);
        console.log("Datos ", datosrepuesta); 
        window.location = "listaGrupo.html";
      })
      .catch(console.log); //errores
}

//agregar grupos
formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        var nombre = document.getElementById("nombreGrupo").value;

        var datosenviar = {
            nombre: nombre,
        }
        console.log(datosenviar);
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php", {
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