let usuarioLogueado = JSON.parse(localStorage.getItem("login")) || [];
let contenedorLista = document.getElementById("menu-lista");

//Cuando se loguea admin se añade al navbar el item de Administración
if (usuarioLogueado) {
  if (usuarioLogueado.rol === "admin") {
    let item = document.createElement("li");
    item.classList = "nav-item";
    let contenidoItem = `<a class="nav-link" aria-current="page" href="../pages/panelAdmin.html"
    >Administración</a`;
    item.innerHTML = contenidoItem;
    contenedorLista.appendChild(item);
  }
}
