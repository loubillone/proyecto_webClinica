let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let medicos = JSON.parse(localStorage.getItem("usuariosAprobados")) || [];
let contenedorLista = document.getElementById("menu-lista");
let formMenu = document.getElementById("formulario-menu");
let contenedorCards = document.getElementById("containerCards");
let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

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

  if (usuarioLogueado) {
    medicos.forEach((medico, index) => {
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
            class="btn btn-primary boton-card"
            onclick = "mostrarModal(${index})"
          >
            Sacar turno
          </button>
        </div>`;
        div.innerHTML = card;
        contenedorCards.appendChild(div);
      }
    });
  }
};

//------------MODAL----------------

//Para usar el modal

let myModal = new bootstrap.Modal(document.getElementById("myModal"));

//Mostrar modal

const mostrarModal = (index) => {
  myModal.show();
  crearCuerpoModal(index);
};

const crearCuerpoModal = (index) => {
  document.querySelector(".modal-body").innerHTML = "";

  let bodyModal = document.querySelector(".modal-body");
  let contenidoBody = `<form onSubmit="guardarTurno(event)">
  <div class="modal-body">
    <p class="p-modal">
      Ingrese el motivo de su consulta, el dia y el horario.
    </p>
    <label for="exampleInputEmail1" class="form-label text-white"
      >Motivo de Consulta:
    </label>
    <input
      type="text"
      class="form-control"
      placeholder="Ingrese el motivo de la consulta"
      id="consulta"
      aria-describedby="emailHelp"
      required
      minlength="5"
      maxlength="40"
    />
    <label for="exampleInputEmail1" class="form-label text-white"
      >Profesional.
    </label>
    <input
      type="text"
      class="form-control"
      placeholder="Correo Electrónico, teléfono o usuario"
      id="nombre-medico"
      aria-describedby="emailHelp"
      required
      minlength="5"
      maxlength="40"
      value="${medicos[index].nombre}"
    />
    <label for="exampleInputEmail1" class="form-label text-white"
      >Especialidad.
    </label>
    <input
      type="text"
      class="form-control"
      placeholder="Correo Electrónico, teléfono o usuario"
      id="especialidad"
      aria-describedby="emailHelp"
      required
      value="${medicos[index].especialidad}"
    />
    <label for="exampleInputEmail1" class="form-label text-white"
      >Fecha.
    </label>
    <input
      type="text"
      class="form-control"
     value="${medicos[index].dia}"
      id="dia"
      aria-describedby="emailHelp"
      required
      minlength="5"
      maxlength="40"
    />
    <label for="exampleInputEmail1" class="form-label text-white">Hora. </label>
    <input
      type="text"
      class="form-control"
      placeholder="Correo Electrónico, teléfono o usuario"
      id="horario"
      aria-describedby="emailHelp"
      required
      value="${medicos[index].horario}"
    />
  </div>
  <div class="modal-footer">
    <input
      type="submit"
      href="#"
      class="btn btn-success"
      value="Registrar turno"
      id="sacar-turno"
    />
  </div>
</form>`;

  bodyModal.innerHTML = contenidoBody;
};

//GUARDAR TURNO

class Turno {
  constructor(paciente, consulta, nombreMedico, especialidad, dia, horario) {
    this.paciente = paciente;
    this.consulta = consulta;
    this.nombreMedico = nombreMedico;
    this.especialidad = especialidad;
    this.dia = dia;
    this.horario = horario;
  }
}

const guardarTurno = (e) => {
  e.preventDefault();

  let paciente = usuarioLogueado.nombre;
  let consulta = document.getElementById("consulta").value;
  let nombreMedico = document.getElementById("nombre-medico").value;
  let especialidad = document.getElementById("especialidad").value;
  let dia = document.getElementById("dia").value;
  let horario = document.getElementById("horario").value;

  turnos.push(
    new Turno(paciente, consulta, nombreMedico, especialidad, dia, horario)
  );

  localStorage.setItem("turnos", JSON.stringify(turnos));
  myModal.hide();
  location.replace("../pages/panelTurnosPacientes.html");
};

mostrarCards();
