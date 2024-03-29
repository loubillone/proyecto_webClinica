let usuariosPaciente =
  JSON.parse(localStorage.getItem("usuariosAprobados")) || [];
let formularioPaciente = document.getElementById("formularioPaciente");

const handleSubmit = (e) => {
  e.preventDefault();

  inicioSesionPaciente();
};

const inicioSesionPaciente = () => {
  let email = document.getElementById("emailPaciente").value;
  let password = document.getElementById("passPaciente").value;

  let validarPaciente = usuariosPaciente.find((usuario) => {
    return usuario.email === email;
  });

  if (validarPaciente) {
    if (
      validarPaciente.contraseña === password &&
      validarPaciente.rol === "paciente"
    ) {
      localStorage.setItem("login", JSON.stringify(validarPaciente));
      location.replace("/index.html");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su correo o contraseña es incorrecto, verifique sus credenciales",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Su correo o contraseña es incorrecto, verifique sus credenciales",
    });
  }
};

formularioPaciente.addEventListener("submit", handleSubmit);
