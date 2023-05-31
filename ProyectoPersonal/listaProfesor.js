//declaracion de variables
var contenidoTabla = document.querySelector("#resultados")
const myModal = new bootstrap.Modal(document.getElementById("agregarProfe"));
var formulario = document.getElementById("formulario");

var agregarProfe = document.getElementById("agregarProfe");

var id = document.getElementById("id");

//actualizar los profes
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("guardando");

    var id = document.getElementById("id")
    var cedula = document.getElementById("cedula").value;
    var correoelectronico = document.getElementById("correoelectronico").value;
    var telefono = document.getElementById("telefono").value;
    var telefonocelular = document.getElementById("telefonocelular").value;
    var fechanacimiento = document.getElementById("fechanacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var direccion = document.getElementById("direccion").value;
    var nombre = document.getElementById("nombre").value;
    var apellidopaterno = document.getElementById("apellidopaterno").value;
    var apellidomaterno = document.getElementById("apellidomaterno").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var idCarrera = document.getElementById("idCarrera").value;
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
    idCarrera: idCarrera,
    usuario: usuario,
  };
  

  fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php", {
    method: "POST",
    body: JSON.stringify(datosenviar),
  }) //url de peticion de datos
    .then((respuesta) => respuesta.json()) //recibe los datos en formato json
    .then((datosrepuesta) => {
      window.location = "listaProfesor.html";
      console.log("Datos", datosrepuesta);
    })
    .catch(console.log); //errores
});


//cargar los datos
function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php") //url de peticion de datos
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
            <td>${valor.idCarrera}</td>
            <td>${valor.usuario}</td>
                    <td>
                <a name="" id="id" class="btn btn-danger" onclick="eliminar('${valor.id}')" role="button">Borrar</a>
                    ||
                <a name="" id="nombre" class="btn btn-primary" onclick="editar('${valor.id}', '${valor.cedula}', '${valor.correoelectronico}', 
                '${valor.telefono}', '${valor.telefonocelular}', '${valor.fechanacimiento}', '${valor.sexo}', '${valor.direccion}', '${valor.nombre}', 
                '${valor.apellidopaterno}', '${valor.apellidomaterno}', '${valor.nacionalidad}', '${valor.idCarrera}', '${valor.usuario}') "role="button">Editar</a>
            </td>
        </tr>`;
    }
}

//editar los profes
function editar(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento,
    sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarrera, usuario) {
    myModal.show();
    document.getElementById("id").value = id;
    document.getElementById("cedula").value = cedula;
    document.getElementById("correoelectronico").value = correoelectronico;
    document.getElementById("telefono").value = telefono;
    document.getElementById("telefonocelular").value = telefonocelular;
    document.getElementById("fechanacimiento").value = fechanacimiento;
    document.getElementById("sexo").value = sexo;
    document.getElementById("direccion").value = direccion;
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellidopaterno").value = apellidopaterno;
    document.getElementById("apellidomaterno").value = apellidomaterno;
    document.getElementById("nacionalidad").value = nacionalidad;
    document.getElementById("idCarrera").value = idCarrera;
    document.getElementById("usuario").value = usuario;
}

//eliminar los profes
function eliminar(id) {
    alert("eliminar " + id);
    var datosenviar = {
      id: id,
};
    //console.log(datosenviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php", {
      method: "POST",
      body: JSON.stringify(datosenviar),
    }) //url de peticion de datos
      .then((respuesta) => respuesta.json()) //recibe los datos en formato json
      .then((datosrepuesta) => {
        //alert(datosrepuesta.data);
        console.log("Datos", datosrepuesta); 
      })
      .catch(console.log); //errores
}

//agregar profes
agregarProfe.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("guardando");
      
        var datosenviar = {
            nombre: nombre,
        };
        console.log(datosenviar);
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php", {
          method: "POST",
          body: JSON.stringify(datosenviar),
        }) //url de peticion de datos
          .then((respuesta) => respuesta.json()) //recibe los datos en formato json
          .then((datosrepuesta) => {
            window.location = "listaGrupo.html";
            console.log("Datos", datosrepuesta);
          })
          .catch(console.log); //muestra errores
});


  cargarDatos();