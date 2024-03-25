let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");

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
