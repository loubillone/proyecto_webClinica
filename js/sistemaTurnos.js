// Inicio Data del login
// Data logins desde el localStorage
// const dataUser = JSON.parse(localStorage.getItem("user"));
const dataUser = {
  nombre: "juancito", //"Dr. Raúl Gómez",
  tipoUsuario: "paciente", // si es paciente o doctor
};
//   const dataUser = {
//     nombre: "Dr. Raúl Gómez",
//     tipoUsuario: "doctor", // si es paciente o doctor
//   };

// if (dataUser.tipoUsuario == "doctor") {
//   const rowDoctores = document.querySelector("#row-doctores");
//   rowDoctores.style.display = "none";
// }

// const btnSacarTurno = document.querySelector("#sacar-turno");
// const turnosGenerales = [
//   {
//     paciente: "pedrito",
//     doctor: "Dr. Raúl Gómez",
//     motivo: "sintomas covid",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "juancito",
//     doctor: "Dr. Raúl Gómez",
//     motivo: "sintomas dengue",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "pedrito",
//     doctor: "Dr. Raúl Gómez",
//     motivo: "fiebre",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "juancito",
//     doctor: "Dr. Raúl Gómez",
//     motivo: "fiebre",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },

//   {
//     paciente: "pedrito",
//     doctor: "Dr. Pablo Alvarez",
//     motivo: "sintomas covid",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "jose",
//     doctor: "Dr. Pablo Alvarez",
//     motivo: "vomito",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "raul",
//     doctor: "Dr. Pablo Alvarez",
//     motivo: "dolor de cabeza",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
//   {
//     paciente: "juancito",
//     doctor: "Dr. Raúl Gómez",
//     motivo: "dolor de cabeza",
//     fecha: "2023-12-18",
//     especialidad: "cardiologo",
//     hora: "16:00",
//   },
// ];

// localStorage.setItem("turnos", JSON.stringify(turnosGenerales));

// rellenarTablaTurnos(
//   "#tabla-turnos",
//   verTurnosFunction(dataUser.tipoUsuario, dataUser.nombre)
// );

// btnSacarTurno.addEventListener("click", (e) => {
//   e.preventDefault();
//   const formInputDr = document.getElementById("input-dr");
//   const formInputMotivo = document.getElementById("input-motivo");
//   const formInputFecha = document.getElementById("input-fecha");
//   const formInputEspecialidad =
//     document.getElementById("input-especialidad");
//   const formInputHora = document.getElementById("input-hora");

//   const turno = {
//     paciente: dataUser.nombre,
//     doctor: formInputDr.value,
//     motivo: formInputMotivo.value,
//     fecha: formInputFecha.value,
//     especialidad: formInputEspecialidad.value,
//     hora: formInputHora.value,
//   };

//   let turnos = localStorage.getItem("turnos");

//   if (localStorage.getItem("turnos")) {
//     turnos = JSON.parse(localStorage.getItem("turnos"));
//   } else {
//     turnos = [];
//   }
//   turnos.push(turno);
//   localStorage.setItem("turnos", JSON.stringify(turnos));

//   rellenarTablaTurnos(
//     "#tabla-turnos",
//     verTurnosFunction(dataUser.tipoUsuario, dataUser.nombre)
//   );
// });

// function verTurnosFunction(tipoTurno, id) {
//   const verTurnos = JSON.parse(localStorage.getItem("turnos"));
//   const turnoMedico = [];
//   verTurnos.forEach((turno) => {
//     if (turno[tipoTurno] == id) {
//       turnoMedico.push(turno);
//     }
//   });
//   return turnoMedico;
// }

// function rellenarTablaTurnos(selector = "#tabla-turnos", turnos) {
//   const tabla = document.querySelector(`${selector} tbody`);
//   let dataTabla = "";
//   let dataPacienteDoctor = "doctor",
//     dataMotivoEspecialidad = "especialidad";
//   if (dataUser.tipoUsuario == "doctor") {
//     dataPacienteDoctor = "paciente";
//     dataMotivoEspecialidad = "motivo";
//     const tablaHead = document.querySelector(`${selector} thead`);
//     tablaHead.innerHTML = `<tr>
//         <th>Fecha</th>
//         <th>Hora</th>
//         <th>Paciente</th>
//         <th>Motivo</th>
//       </tr>`;
//   }

//   turnos.forEach((turno) => {
//     dataTabla += `
//       <tr>
//         <td>${turno.fecha}</td>
//         <td>${turno.hora}</td>
//         <td>${turno[dataPacienteDoctor]}</td>
//         <td>${turno[dataMotivoEspecialidad]}</td>
//       </tr>`;
//   });

//   tabla.innerHTML = dataTabla;
// }
