
function crearMenu(){
    headerClases.innerHTML += `

    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Muscle Cars</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="listaEstudiantes.html">Estudiantes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="listaProfesor.html">Profesor</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="listaGrupo.html">Grupo</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="listaCursos.html">Cursos</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
            `;  

    footerClases.innerHTML += `
        <div class="container-fluid">
        <div class="row p-3 bg-dark text-white text-center align-items-center">
          <div class="col-xs-12 col-md-6 col-lg-6"> 
            <h1>Gracias por pensar en nosotros</h1>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6"> 
            <h3>Links</h3>
            <div class="mb-2">
              <a class="text-muted p-3" href="index.html">Muscle Cars</a>
              <a class="text-muted p-3" href="listaEstudiantes.html">Estudiantes</a>
            </div>
            <div class="mb-2">
              <a class="text-muted p-3" href="listaProfesor.html">Profesores</a>
              <a class="text-muted p-3" href="listaGrupo.html">Grupos</a>
            </div>
            <div class="mb-2">
              <a class="text-muted p-3" href="listaCursos.html">Cursos</a>
            </div>
          </div>
        </div>
      </div>

            `; 
}


crearMenu();
          


