let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || null;
let containerMensaje = document.getElementById("mensajeBienvenida");
let containerTabla = document.getElementById("cuerpo-tabla_turnos");
let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

/*FUNCIÓN MENSAJE DE BIENVENIDA */
const mensajebienvenida = () => {
  let h1 = document.createElement("h1");
  h1.classList = `my-3`;
  let cuerpoMensaje = `Bienvenido ${usuarioLogueado.nombre}`;
  h1.innerText = cuerpoMensaje;
  containerMensaje.appendChild(h1);
};

const mostrarTurnos = () => {
  containerTabla.innerHTML = "";
  if (usuarioLogueado.rol === "medico") {
    if (turnos.length > 0) {
      turnos.map((turno, index) => {
        if (turno.nombreMedico === usuarioLogueado.nombre) {
          let tr = document.createElement("tr");
          let celda = `<th scope="row">${index + 1}</th>
              
              <td>${turno.paciente}</td>
              <td>${turno.dia}</td>
              <td>${turno.horario}</td>
              <td><button class="btn btn-warning btn-sm" onclick = "aceptarUsuario(${index})"><i class="fa fa-check-square-o" aria-hidden="true"></i></button></td>
              <td><button class="btn btn-danger btn-sm"  onclick = "rechazarUsuario(${index})"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>`;

          tr.innerHTML = celda;
          containerTabla.appendChild(tr);
        }
      });
    }
  }
};

mensajebienvenida();
mostrarTurnos();
