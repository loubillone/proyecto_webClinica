let usuariosAdmin = JSON.parse(localStorage.getItem("usuariosAdmin")) || [];
let formularioAdmin = document.getElementById("formularioAdmin");

const handleSubmit = (e) => {
  e.preventDefault();

  inicioSesionAdmin();
};

const inicioSesionAdmin = () => {
  let email = document.getElementById("emailAdmin").value;
  let password = document.getElementById("passwordAdmin").value;

  let validarAdmin = usuariosAdmin.find((usuario) => {
    return usuario.email === email;
  });

  if (validarAdmin) {
    if (validarAdmin.password === password) {
      localStorage.setItem("loginAdmin", JSON.stringify(validarAdmin));
      location.replace("/index.html");
    } else {
      alert("Su correo o contraseña es incorrecto, verifique sus credenciales");
    }
  } else {
    alert("Su correo o contraseña es incorrecto, verifique sus credenciales");
  }
};
formularioAdmin.addEventListener("submit", handleSubmit);
