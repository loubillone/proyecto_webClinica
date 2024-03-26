let usuariosAdmin = JSON.parse(localStorage.getItem("usuariosAdmin")) || [];
let formulario = document.getElementById("formulario");

class Admin {
  constructor(nombre, email, password, rol = "admin") {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}

const handleSubmit = (e) => {
  e.preventDefault();

  registroAdmin();
};

const registroAdmin = () => {
  let nombre = document.getElementById("nombre").value.toUpperCase();
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;
  let confPass = document.getElementById("confPass").value;

  const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const resultadoValidacion = validarEmail.test(email);

  if (!resultadoValidacion) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No es un email válido",
    });
  }

  let buscadorEmail = usuariosAdmin.find((usuario) => {
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

  usuariosAdmin.push(new Admin(nombre, email, password, this.rol));

  localStorage.setItem("usuariosAdmin", JSON.stringify(usuariosAdmin));

  document.getElementById("formulario").reset();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Usuario registrado con éxito",
    showConfirmButton: false,
    timer: 2000,
  });

  setTimeout(() => {
    location.replace("loginAdmin.html");
  }, 2500);
};

formulario.addEventListener("submit", handleSubmit);
