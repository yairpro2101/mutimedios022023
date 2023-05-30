
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
}

crearMenu();
          


