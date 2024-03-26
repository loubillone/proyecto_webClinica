let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let medicos = JSON.parse(localStorage.getItem("usuariosAprobados")) || [];
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");
let contenedorCards = document.getElementById("containerCards");

//Cuando se loguea admin se añade al navbar el item de Administración
if (usuarioLogueado) {
  if (usuarioLogueado.rol === "admin") {
    let item = document.createElement("li");
    item.classList = "nav-item";
    let contenidoItem = `<a class="nav-link" aria-current="page" href="../pages/panelAdmin.html"
    >Administración</a`;
    item.innerHTML = contenidoItem;
    contenedorLista.appendChild(item);
  }
}

//CERRAR SESIÓN
if (usuarioLogueado) {
  let boton = document.createElement("button");
  boton.classList = `btn btn-secondary m-2 boton-navbar`;
  boton.type = "button";
  boton.id = "boton-cerrarSesion";
  let cuerpoBoton = `<i class="fa fa-sign-out" aria-hidden="true"></i>`;
  boton.innerHTML = cuerpoBoton;
  formMenu.appendChild(boton);

  const cerrarSesion = () => {
    let validar = confirm(
      `Hola ${usuarioLogueado.nombre}, quieres cerrar sesión?`
    );

    if (validar) {
      localStorage.removeItem("login");
      alert("Cerraste sesión");
      location.replace("../index.html");
    }
  };

  document
    .getElementById("boton-cerrarSesion")
    .addEventListener("click", cerrarSesion);
}

//INICIAR SESIÓN

if (!usuarioLogueado) {
  let boton = document.createElement("button");
  boton.classList = `btn btn-secondary m-2 boton-navbar`;
  boton.type = "button";
  boton.id = "boton-iniciarSesion";
  let cuerpoBoton = `<i class="fa fa-user-circle-o" aria-hidden="true"></i>`;
  boton.innerHTML = cuerpoBoton;
  formMenu.appendChild(boton);

  const iniciarSesion = () => {
    location.replace("../pages/cardsLogin.html");
  };

  document
    .getElementById("boton-iniciarSesion")
    .addEventListener("click", iniciarSesion);
}

//CARD MÉDICO

const mostrarCards = () => {
  contenedorCards.innerHTML = "";

  medicos.forEach((medico) => {
    if (medico.rol === "medico") {
      let div = document.createElement("div");
      div.classList = `col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 offset-md-0 col-lg-3 offset-lg-0 my-3`;
      let card = `<div class="card card-medicos">
      <img
        src="${medico.imagen}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body text-center" id="cardMedicos">
        <h5 class="card-title">${medico.nombre}</h5>
        <p class="card-text">${medico.especialidad}</p>
        <button
          href="./pages/formularioTurno.html"
          class="btn btn-primary boton-card btn-sacar-turno"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-especialidad="pediatra"
          data-nombre="Dr. Pablo Alvarez"
        >
          Sacar turno
        </button>
      </div>`;
      div.innerHTML = card;
      contenedorCards.appendChild(div);
    }
  });
};
mostrarCards();
