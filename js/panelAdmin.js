let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");

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
