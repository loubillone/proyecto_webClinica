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
  if (usuarioLogueado.rol === "paciente") {
    if (turnos.length > 0) {
      turnos.map((turno, index) => {
        if (turno.paciente === usuarioLogueado.nombre) {
          let tr = document.createElement("tr");
          let celda = `<th scope="row">${index + 1}</th>
                
                <td>${turno.nombreMedico}</td>
                <td>${turno.dia}</td>
                <td>${turno.horario}</td>`;

          tr.innerHTML = celda;
          containerTabla.appendChild(tr);
        }
      });
    }
  }
};

mensajebienvenida();
mostrarTurnos();
