let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let usuariosPendientes = JSON.parse(localStorage.getItem("panelAdmin")) || [];
let usuariosAprobados =
  JSON.parse(localStorage.getItem("usuariosAprobados")) || [];
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");
let containerMensaje = document.getElementById("mensajeBienvenida");
let containerTablaPendientes = document.getElementById("cuerpo-tabla_pend");
let containerTablaAprobados = document.getElementById("cuerpo-tabla_aprob");

/*FUNCIÓN MENSAJE DE BIENVENIDA */
const mensajebienvenida = () => {
  let h1 = document.createElement("h1");
  h1.classList = `my-3`;
  let cuerpoMensaje = `Bienvenido ${usuarioLogueado.nombre}`;
  h1.innerText = cuerpoMensaje;
  containerMensaje.appendChild(h1);
};

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

//TABLA USUARIOS PENDIENTES

const mostrarTablaPendientes = () => {
  containerTablaPendientes.innerHTML = "";

  if (usuariosPendientes.length > 0) {
    usuariosPendientes.map((usuarioPendiente, index) => {
      let tr = document.createElement("tr");
      let celda = `<th scope="row">${index + 1}</th>
      
      <td>${usuarioPendiente.nombre}</td>
      <td>${usuarioPendiente.email}</td>
      <td>${usuarioPendiente.rol}</td>
      <td><button class="btn btn-warning btn-sm" onclick = "aceptarUsuario(${index})"><i class="fa fa-check-square-o" aria-hidden="true"></i></button></td>
      <td><button class="btn btn-danger btn-sm"  onclick = "rechazarUsuario(${index})"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>`;

      tr.innerHTML = celda;
      containerTablaPendientes.appendChild(tr);
    });
  }
};

//FUNCION ACEPTAR USUARIO

const aceptarUsuario = (index) => {
  let validar = confirm(
    `Está seguro que quiere aceptar al usuario: ${usuariosPendientes[index].nombre}`
  );

  if (validar) {
    usuariosAprobados.push(usuariosPendientes[index]);
    usuariosPendientes.splice(index, 1);
    localStorage.setItem(
      "usuariosAprobados",
      JSON.stringify(usuariosAprobados)
    );

    localStorage.setItem("panelAdmin", JSON.stringify(usuariosPendientes));

    alert("Usuario aprobado");
    mostrarTablaPendientes();
  }
};

//FUNCION RECHAZAR USUARIO

const rechazarUsuario = (index) => {
  let validar = confirm(
    `Está seguro que quiere rechazar al usuario: ${usuariosPendientes[index].nombre}`
  );

  if (validar) {
    usuariosPendientes.splice(index, 1);
    localStorage.setItem("panelAdmin", JSON.stringify(usuariosPendientes));
    alert("Usuario rechazado");
    mostrarTablaPendientes();
  }
};

//TABLA USUARIOS APROBADOS

const mostrarTablaAprobados = () => {
  containerTablaAprobados.innerHTML = "";

  if (usuariosAprobados.length > 0) {
    usuariosAprobados.map((usuarioAprobado, index) => {
      let tr = document.createElement("tr");
      let celda = `<th scope="row">${index + 1}</th>
      
      <td>${usuarioAprobado.nombre}</td>
      <td>${usuarioAprobado.email}</td>
      <td>${usuarioAprobado.rol}</td>
      <td><button class="btn btn-success btn-sm"><i class="fa fa-check-square-o" aria-hidden="true"></i></button></td>`;

      tr.innerHTML = celda;
      containerTablaAprobados.appendChild(tr);
    });
  }
};

mensajebienvenida();
mostrarTablaPendientes();
mostrarTablaAprobados();
