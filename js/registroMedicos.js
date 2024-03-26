let usuariosMedicos = JSON.parse(localStorage.getItem("panelAdmin")) || [];
let formulario = document.getElementById("formulario");

class Medico {
  constructor(
    nombre,
    especialidad,
    email,
    dia = "lunes",
    horario = "17",
    password,
    imagen,
    rol = "medico"
  ) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.email = email;
    this.dia = dia;
    this.horario = horario;
    this.password = password;
    this.imagen = imagen;
    this.rol = rol;
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  registroMedico();
};

const registroMedico = () => {
  let nombre = document.getElementById("nombre").value.toUpperCase();
  let especialidad = document
    .getElementById("especialidad")
    .value.toLowerCase();
  let email = document.getElementById("email").value.toLowerCase();
  // let dia = document.getElementById("dia").value.toLowerCase();
  // let horario = document.getElementById("horario").value;
  let password = document.getElementById("password").value;
  let confPass = document.getElementById("confPass").value;
  let imagen = document.getElementById("imagen").value;

  const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const resultadoValidacion = validarEmail.test(email);

  if (!resultadoValidacion) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No es un email válido",
    });
  }

  let buscadorEmail = usuariosMedicos.find((usuario) => {
    return usuario.email === email;
  });

  if (buscadorEmail !== undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Correo ingresado ya esta registrado",
    });
    return;
  }

  const validarPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  const resultadoValidacionPass = validarPass.test(password);

  if (!resultadoValidacionPass) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No es una contraseña válida",
    });
  }

  if (password != confPass) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas no coinciden",
    });
    return;
  }

  usuariosMedicos.push(
    new Medico(
      nombre,
      especialidad,
      email,
      this.dia,
      this.horario,
      password,
      imagen,
      this.rol
    )
  );

  localStorage.setItem("panelAdmin", JSON.stringify(usuariosMedicos));

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
