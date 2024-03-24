let usuariosPaciente = JSON.parse(localStorage.getItem("panelAdmin")) || [];
let formulario = document.getElementById("formulario");

class Paciente {
  constructor(
    nombreCompleto,
    fechaNac,
    email,
    contraseña,
    genero,
    obraSocial,
    rol = "paciente"
  ) {
    this.nombreCompleto = nombreCompleto;
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
  let nombreCompleto = document.getElementById("nombreCompleto").value;
  let fechaNac = document.getElementById("fechNac").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;
  let genero = document.getElementById("genero").value;
  let obraSocial = document.getElementById("obraSocial").value;
  let confPass = document.getElementById("confPass").value;

  if (contraseña != confPass) {
    return alert("Las contraseñas no coinciden");
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
      nombreCompleto,
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
    title: "Usuario registrado con éxito",
    showConfirmButton: false,
    timer: 2000,
  });

  setTimeout(() => {
    location.replace("loginPaciente.html");
  }, 2500);
};
formulario.addEventListener("submit", handleSubmit);
