let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");
let containerMensaje = document.getElementById("mensajeBienvenida");

/*FUNCIÓN MENSAJE DE BIENVENIDA */
const mensajebienvenida = () => {
  let h1 = document.createElement("h1");
  h1.classList = `my-3`;
  let cuerpoMensaje = `Bienvenido ${usuarioLogueado.nombre}`;
  h1.innerText = cuerpoMensaje;
  containerMensaje.appendChild(h1);
};

mensajebienvenida();

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
