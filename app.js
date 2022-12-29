/*Selleción de productos y se carga al carrito */

const shopContenedor = document.getElementById("shopContenedor");
const verCompra = document.getElementById("verCompra");
const modalContenedor = document.getElementById("modalContenedor");

let prod = [
  {nombre: "Plan Clásico", precio: 890},
  {nombre: "Plan Premiun", precio: 1500},
];

let carrito = [];

prod.forEach((p) =>{
 let contenedor = document.createElement ("div");
 contenedor.innerHTML = `
 <h3>Producto: ${p.nombre} </h3>
 <p>Precio: $ ${p.precio} </p>
 `;
 shopContenedor.appendChild(contenedor);
 
 let comprar = document.createElement ("button");
 comprar.innerText = "Comprar";
 contenedor.append(comprar);

 comprar.addEventListener("click", () =>{
  carrito.push({
   producto: p.nombre,
   precio: p.precio,
  });
  console.log(carrito);
 });
});

verCompra.addEventListener("click", () =>{
  const modalHeader = document.createElement ("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <p class= "modal-h"> Tu producto seleccionado </p>
  `;
  modalContenedor.append(modalHeader);
  const modalbutton = document.createElement ("h2");
  modalbutton.innerText = "x";
  modalHeader.append(modalbutton);

  carrito.forEach((p) =>{
    let carritoConter = document.createElement ("div");
    carritoConter.innerText = `
    <h3>Producto: ${p.nombre} </h3>
    <p>Precio: $ ${p.precio} </p>
    `;
    modalContenedor.append(carritoConter);
  });
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = Document.createElement ("div");
  totalCompra.innerHTML = `
  Total a pagar $ ${totalCompra}
  `;
  modalContenedor.append(totalCompra);
});

/*Arrays de medio de pago */
const medioDePago = ["tarjeta de debito", "tarjeta de credito"]

/*Convierto a Json */
const aJson = JSON.stringify(medioDePago)

/*guardo en localstorage */
localStorage.setItem("medio de pago", aJson)

// let prod = [
//   {nombre: "Plan Clásico", precio: 890},
//   {nombre: "Plan Premiun", precio: 1500},
// ];

// for (let p of prod){
//  let contenedor = document.createElement ("div");
//  contenedor.innerHTML = `
//  <h3>Producto: ${p.nombre} </h3>
//  <p>Precio: $ ${p.precio} </p>
//  <button class= "btn btn-success"> Agregar </button>
//  <button class= "btn btn-danger"> Eliminar </button>
//  `;
//  document.body.appendChild(contenedor);
// }



/* Validación de datos para saber si cumple con los requisitos para contratar el producto*/

/*Inicio de cotización*/

// function saludoInicial() {
//   alert ("Bienvenido a Vida Activa");
// }

// saludoInicial();
// /* Aplicar ciclo Do While */
// const listaNombre = [];
// let cantidad = 1;

// do{
//   let entrada = prompt("Ingrese su nombre y apellido")
//   listaNombre.push(entrada.toUpperCase());
// }while(listaNombre.length != cantidad);
// console.log(listaNombre)

// function registroInicial() {
//   let nombre = prompt ("Ingrese su nombre");
//   let apellido = prompt ("Ingrese su apellido");
//   if ((nombre != "") && (apellido != "")) {
//     alert ("Hola"+" " + nombre + " " + apellido + " " + "vamos a hacer algunas validaciones para saber que producto se adapta mejor a vos");
//   } else {
//     alert ("Error al ingresar dato");
//   }
// }

// registroInicial();

/* Requisito de la edad, de 18 a 60 años por Funcion con IF*/

// function primerValidacion() {
//   let edades = prompt ("¿Sos mayor de 18 años?")
//   if (edades == "si") {
//     alert ("¡Genial! Continuemos..")
//   } else {
//     alert ("Vuelve cuando lo seas o pide ayuda de un mayor 😃")
//   }
// }
// primerValidacion();

// function requisitoEdad() {
//   let edad = parseInt (prompt ("Ingrese su edad"));
//   if ((edad >= 18) && (edad <= 60)) {
//     alert ("Es un placer conocerte")
//   } else {
//     alert ("Lo siento, no podemos continuar 😔")
//   }
// }

// requisitoEdad();

/* Requisito de antecedente de salud por medio de ciclo swicth en una funcion*/

// function enfermedades() {
// let antecedenteSalud = prompt (`¿Según tus conocimientos, has padecido alguna de las siguientes enfermedades?:
// 1: Cáncer
// 2: Infarto de miocardio
// 3: Accidente cerebro vascular
// 4: Insuficiencia renal
// 5: Ninguna de las anteriores
// `);
// switch (antecedenteSalud) {
//   case "1":
//     alert ("No cumple con los requisitos para este servicio")
//     break;
//   case "2":
//     alert ("No cumple con los requisitos para este servicio")
//     break;
//   case "3":
//     alert ("No cumple con los requisitos para este servicio")
//     break;
//   case "4":
//     alert ("No cumple con los requisitos para este servicio")
//     break;
//   case "5":
//     alert ("¡Genial! Podemos continuar.")
//     break;
//   default:
//     alert ("¡Lo siento su opción es incorrecta!.")
//     return 0;
//     break;
// }
// }

// enfermedades();

/* Opciones de productos por objeto */

// function Producto (nombre, precio){
//   this.nombre = nombre;
//   this.precio = precio;
// }
// Producto();
// const productoUno = new Producto ("Plan Clásico", 890);
// const productoDos = new Producto ("Plan Premiun", 1500);

// console.log (productoUno);
// console.log (productoDos);

// /*Utilización de arrays con Objeto */

// const arrayProducto = [productoUno, productoDos];
// console.log(arrayProducto);



/*Aplicación de métodos */
// arrayProducto.forEach((a, indice)=>{
// console.log(`¨${indice} : ${a}`)
// })

// let vistaPrevia = arrayProducto.filter((p) => p.precio <900);
// console.log(vistaPrevia)

// let vistaPreviaProducto = arrayProducto.filter((n) => n.nombre !== "Plan Clásico");
// console.log(vistaPreviaProducto);

// console.log(arrayProducto.includes(productoUno));

/* Opciones de productos */

// function productos() {
//   let producto = prompt (`¿Qué producto preferis?:
//   1: Plan básico
//   2: Plan premiun
//   `)
//   switch (producto) {
//     case "1":
//       alert ("Su precio es de $890 sin iva salud")
//       break;
//     case "2":
//       alert ("Su precio es de $1500 sin iva salud")
//       break;
//     default:
//       alert ("Erros en la opción")
//       return 0;
//       break;
//   } 
// }
// productos()

// alert ("Vamos a calcular su costo con iva incluido")

// function calculoIva(precio, iva) {
//      return (precio * 0.105)  
// }
// let resultado = calculoIva (890 * 0.105)
// alert(`El costo final del producto es de ${resultado}`)


// /* Opciones de pago por swichr*/

// function pago() {
// let formaDePago = prompt(`¿Qué medio de pago preferis?:
// 1: Débito bancario
// 2: Tarjeta de crédito
// 3: No cuento con estos medios de pago
// `)
// switch (formaDePago) {
//   case "1":
//     alert ("¡Genial! Podemos continuar.")
//     break;
//   case "2":
//     alert ("¡Genial! Podemos continuar.")
//     break;
//   case "3":
//     alert ("Lo siento, solo trabajamos con estos medios de pago")
//     break;
//   default:
//     alert ("Lo siento, solo trabajamos con estos medios de pago")
//     return 0;
//     break;
// }
// }
// pago();

// function fin() {
//   let finalizacion = prompt ("¿Deseas continuar con la compra?")
//   if (finalizacion == "si") {
//     alert ("¡Genial! Ahora nos pondremos en contacto")
//   } else {
//     alert ("Vuelva pronto 😃")
//   }
// }
// fin()

// alert ("Gracias por visitarnos, volve pronto!!")

/* Medio de pago*/


// const inputCard = document.querySelector(".inputCard");
// const inputDate = document.querySelector(".inputDate");
// const inputVencimiento = document.querySelector(".inputVencimiento");

// const maskNumero = "####-####-####-####";
// const maskFecha = "##/##";
// const maskVencimiento = "###";

// let current = "";
// let cardNumber = [];
// let dateNumber = [];
// let cdsNumber = [];

// inputCard.addEventListener("keydown", (e) =>{
//   if (e.key == "Tab"){
//   } return;
//   e.preventDefault();
//   handleInput(maskNumero, e.key, cardNumber);
//   inputCard.value = cardNumber.join("");
// });

// function handleInput(mask, key, arr){
//   let numbers = ["0", "1","2","3","4","5","6","7","8","9"];
//   if (key == "Backspace" && arr.length > 0) {
//     arr.pop();
//     return;
//   }
//   if (numbers.includes(key) && arr.length + 1 <= mask.length){
//    if (mask[arr.length] == "-" || mask[arr.length] == "/") {
//     arr.push(mask[arr.length], key);
//    } else{
//     arr.push(key);
//    }
//   }    
// }
// handleInput();

// inputDate.addEventListener("keydown", (e) =>{
//   if (e.key === "tab"){
//   } return;
//   e.preventDefault();
//   handleInput(maskFecha, e.key, dateNumber);
//   inputDate.value = dateNumber.join("");
// });

