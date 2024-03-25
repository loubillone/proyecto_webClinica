let usuariosMedicos =
  JSON.parse(localStorage.getItem("usuariosAprobados")) || [];
let formularioPaciente = document.getElementById("formularioMedico");

const handleSubmit = (e) => {
  e.preventDefault();

  inicioSesionMedico();
};

const inicioSesionMedico = () => {
  let email = document.getElementById("emailMedico").value;
  let password = document.getElementById("passMedico").value;

  let validarMedico = usuariosMedicos.find((usuario) => {
    return usuario.email === email;
  });

  if (validarMedico) {
    if (validarMedico.password === password && validarMedico.rol === "medico") {
      localStorage.setItem("login", JSON.stringify(validarMedico));
      location.replace("/index.html");
    } else {
      alert("Su correo o contraseña es incorrecto, verifique sus credenciales");
    }
  } else {
    alert("Su correo o contraseña es incorrecto, verifique sus credenciales");
  }
};

formularioMedico.addEventListener("submit", handleSubmit);
