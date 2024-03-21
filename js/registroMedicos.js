let usuariosMedicos = JSON.parse(localStorage.getItem("usuariosMedicos")) || [];
let formulario = document.getElementById("formulario");

class Medico {
  constructor(
    nombre,
    especialidad,
    email,
    dia,
    horario,
    password,
    rol = "medico"
  ) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.email = email;
    this.dia = dia;
    this.horario = horario;
    this.password = password;
    this.rol = rol;
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  registroMedico();
};

const registroMedico = () => {
  let nombre = document.getElementById("nombre").value;
  let especialidad = document.getElementById("especialidad").value;
  let email = document.getElementById("email").value;
  let dia = document.getElementById("dia").value;
  let horario = document.getElementById("horario").value;
  let password = document.getElementById("password").value;
  let confPass = document.getElementById("confPass").value;

  if (password != confPass) {
    return alert("Las contraseñas no coinciden");
  }

  let validarEmail = usuariosMedicos.find((usuario) => {
    return usuario.email === email;
  });

  if (validarEmail) {
    return alert(
      "El email ya está registrado, por favor inicie sesión con sus credenciales"
    );
  }

  usuariosMedicos.push(
    new Medico(nombre, especialidad, email, dia, horario, password, this.rol)
  );

  localStorage.setItem("usuariosMedicos", JSON.stringify(usuariosMedicos));

  document.getElementById("formulario").reset();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Usuario registrado con éxito",
    showConfirmButton: false,
    timer: 2000,
  });

  //   setTimeout(() => {
  //     location.replace("loginMedico.html");
  //   }, 2500);
};

formulario.addEventListener("submit", handleSubmit);
