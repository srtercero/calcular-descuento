// Calcular
function calcular() {
  let cantidad = document.getElementById("quantity").value;
  let precioFijo = document.getElementById("price").value;
  let descuento = 0;
  let total = 0;

  if (cantidad >= 1 && cantidad < 100) descuento = descuento = 1.5;
  if (cantidad >= 100 && cantidad < 1000) descuento = descuento = 3;
  if (cantidad >= 1000 && cantidad < 5000) descuento = descuento = 6;
  if (cantidad >= 5000) descuento = descuento = 9;

  let precioSinDscto = cantidad * precioFijo;

  let descuentoFinal = (descuento * precioSinDscto) / 100;
  document.getElementById("discontFinal").value = descuentoFinal.toFixed(2);

  let PrecioTotal = precioSinDscto - descuentoFinal;
  document.getElementById("priceFinal").value = PrecioTotal.toFixed(2);
}

function myFunction(e) {
  document.getElementById("price").value = e.target.value;
}

// Librería
let btn = document.getElementById("swal");
btn.addEventListener("click", () =>
  swal({
    title: "Borrado con éxito",
    icon: "success",
    button: "Ok",
  })
);

// Reset
function limpiar() {
  document.getElementById("form").reset();
  document.getElementById("priceFinal").value = "";
  document.getElementById("discontFinal").value = "";
  document.getElementById("nombre").value = "";
}

// JSON
const cliente = {
  name: "Jorge",
  age: 42,
};
console.log(cliente["name"]);

// Array
const productos = ["Memorias USB", "Tomatodos", "Libretas", "Resaltadores"];
console.log(productos);

//Local Storage
function bienvenidaCliente() {
  let name = document.getElementById("nombre").value;
  document.getElementById("bienvenida").innerHTML =
    "Hola " + name + "! Bienvenido!";
}

localStorage.setItem("nombre");
document.getElementById("msj").innerHTML = localStorage.getItem("nombre");
