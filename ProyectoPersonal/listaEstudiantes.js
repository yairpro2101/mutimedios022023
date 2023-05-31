//declaracion de variables
var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarEstudiante"));
var formulario = document.getElementById("formulario");


//actualizar los estudiantes
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

    var id = document.getElementById("id").value;
    var cedula = document.getElementById("cedula").value;
    var correoelectronico = document.getElementById("correoelectronico").value;
    var telefono = document.getElementById("telefono").value;
    var telefonocelular = document.getElementById("telefonocelular").value;
    var fechanacimiento = document.getElementById("fechanacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var direccion = document.getElementById("direccion").value;
    var nombre = document.getElementById("nombreEstudiante").value;
    var apellidopaterno = document.getElementById("apellidopaterno").value;
    var apellidomaterno = document.getElementById("apellidomaterno").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var idCarreras = document.getElementById("idCarreras").value;
    var usuario = document.getElementById("usuario").value;

  var datosenviar = {
    id: id,
    cedula: cedula,
    correoelectronico: correoelectronico,
    telefono: telefono,
    telefonocelular: telefonocelular,
    fechanacimiento: fechanacimiento,
    sexo: sexo,
    direccion: direccion,
    nombre: nombre,
    apellidopaterno: apellidopaterno,
    apellidomaterno: apellidomaterno,
    nacionalidad: nacionalidad,
    idCarreras: idCarreras,
    usuario: usuario,
  };

  fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      window.location = "listaEstudiantes.html";
      console.log("Datos", datosrepuesta);
    })
    .catch(console.log); //errores
});

//cargar los datos
function cargarDatos() {
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaEstudiantes.php") //url de peticion de datos
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
          <td>${valor.cedula}</td>
          <td>${valor.correoelectronico}</td>
          <td>${valor.telefono}</td>
          <td>${valor.telefonocelular}</td>
          <td>${valor.fechanacimiento}</td>
          <td>${valor.sexo}</td>
          <td>${valor.direccion}</td>
          <td>${valor.nombre}</td>
          <td>${valor.apellidopaterno}</td>
          <td>${valor.apellidomaterno}</td>
          <td>${valor.nacionalidad}</td>
          <td>${valor.idCarreras}</td>
          <td>${valor.usuario}</td>
                  <td>
              <a name="" id="id" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                  ||
              <a name="" id="nombre" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.cedula}', '${valor.correoelectronico}', 
              '${valor.telefono}', '${valor.telefonocelular}', '${valor.fechanacimiento}', '${valor.sexo}', '${valor.direccion}', '${valor.nombre}', 
              '${valor.apellidopaterno}', '${valor.apellidomaterno}', '${valor.nacionalidad}', '${valor.idCarreras}', '${valor.usuario}') "role="button">Editar</a>
          </td>
      </tr>`;
  }
}

//editar los estudiante
function editar(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento,
  sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario) {
  myModal.show();
  document.getElementById("id").value = id;
  document.getElementById("cedula").value = cedula;
  document.getElementById("correoelectronico").value = correoelectronico;
  document.getElementById("telefono").value = telefono;
  document.getElementById("telefonocelular").value = telefonocelular;
  document.getElementById("fechanacimiento").value = fechanacimiento;
  document.getElementById("sexo").value = sexo;
  document.getElementById("direccion").value = direccion;
  document.getElementById("nombreProfe").value = nombre;
  document.getElementById("apellidopaterno").value = apellidopaterno;
  document.getElementById("apellidomaterno").value = apellidomaterno;
  document.getElementById("nacionalidad").value = nacionalidad;
  document.getElementById("idCarreras").value = idCarreras;
  document.getElementById("usuario").value = usuario;
}

//eliminar los profes
function eliminar(id) {
  var datosenviar = {
    id: id,
};

  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      //alert(datosrepuesta.data);
      console.log("Datos", datosrepuesta); 
      window.location = "listaEstudiantes.html";
    })
    .catch(console.log); //errores
}

//agregar Estudiantes
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

var cedula = document.getElementById("cedula").value;
var correoelectronico = document.getElementById("correoelectronico").value;
var telefono = document.getElementById("telefono").value;
var telefonocelular = document.getElementById("telefonocelular").value;
var fechanacimiento = document.getElementById("fechanacimiento").value;
var sexo = document.getElementById("sexo").value;
var direccion = document.getElementById("direccion").value;
var nombre = document.getElementById("nombreEstudiante").value;
var apellidopaterno = document.getElementById("apellidopaterno").value;
var apellidomaterno = document.getElementById("apellidomaterno").value;
var nacionalidad = document.getElementById("nacionalidad").value;
var idCarreras = document.getElementById("idCarreras").value;
var usuario = document.getElementById("usuario").value;
  
var datosenviar = {
    cedula: cedula,
    correoelectronico: correoelectronico,
    telefono: telefono,
    telefonocelular: telefonocelular,
    fechanacimiento: fechanacimiento,
    sexo: sexo,
    direccion: direccion,
    nombre: nombre,
    apellidopaterno: apellidopaterno,
    apellidomaterno: apellidomaterno,
    nacionalidad: nacionalidad,
    idCarreras: idCarreras,
    usuario: usuario,
  }
  
  console.log(datosenviar);
  fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      console.log("Datos", datosrepuesta);
    })
    .catch(console.log); //muestra errores
});


cargarDatos();