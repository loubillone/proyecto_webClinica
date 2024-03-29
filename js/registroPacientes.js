let usuariosPaciente = JSON.parse(localStorage.getItem("panelAdmin")) || [];
let formulario = document.getElementById("formulario");

class Paciente {
  constructor(
    nombre,
    fechaNac,
    email,
    contraseña,
    genero,
    obraSocial,
    rol = "paciente"
  ) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.email = email;
    this.contraseña = contraseña;
    (this.genero = genero), (this.obraSocial = obraSocial), (this.rol = rol);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  validarPaciente();
};

const validarPaciente = () => {
  let nombre = document.getElementById("nombreCompleto").value.toUpperCase();
  let fechaNac = document.getElementById("fechNac").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;
  let genero = document.getElementById("genero").value.toLowerCase();
  let obraSocial = document.getElementById("obraSocial").value.toLowerCase();
  let confPass = document.getElementById("confPass").value;

  if (contraseña != confPass) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Correo ingresado ya esta registrado",
    });
  }
  const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const resultadoValidacion = validarEmail.test(email);

  if (!resultadoValidacion) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No es un email válido",
    });
  }

  let comprobandoExistenciaEmail = usuariosPaciente.find((paciente) => {
    return paciente.email === email;
  });

  if (comprobandoExistenciaEmail) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Correo ingresado ya esta registrado",
    });
    return;
  }

  usuariosPaciente.push(
    new Paciente(
      nombre,
      fechaNac,
      email,
      contraseña,
      genero,
      obraSocial,
      this.rol
    )
  );

  localStorage.setItem("panelAdmin", JSON.stringify(usuariosPaciente));

  document.getElementById("formulario").reset();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Le enviamos un mail para continuar con su proceso de registro",
    showConfirmButton: false,
    timer: 3500,
  });

  setTimeout(() => {
    location.replace("/index.html");
  }, 2500);
};
formulario.addEventListener("submit", handleSubmit);
