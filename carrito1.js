//////////////////////////// INICIALIZACIONES  //////////////////// {
let totaldelcarro = JSON.parse(localStorage.getItem("totaldelcarro"))
const miCarro = JSON.parse(localStorage.getItem("miCarro"))
const cuerpo = document.getElementById("cuerpo")
const totalCarritoArriba = document.getElementById("totalCarritoArriba")
//}
//////////////////////////// FUNCIONES //////////////////////////// {
//----------------------------------------------------------------
// funcion que pone el subtotal (hasta ahora) del carrito en la barra nav. de arriba
function barraArribaCarrito(){
  if(totaldelcarro == null){
  totalCarritoArriba.innerHTML = ` VER CARRITO  0 $`
  } else {totalCarritoArriba.innerHTML = ` VER CARRITO  ${totaldelcarro} $`}
  drop2 = document.getElementById("drop2")
  drop2.addEventListener('click', () => { verMas() })
}
  //----------------------------------------------------------------
  // funcion que arranca la pagina
function paginaCarrito(){
  barraArribaCarrito()
  cuerpo.innerHTML += `<h3 style="color:blue;"> Su carro es: </h3><br>`
  // pongo en el body, si es null que esta vacio y si no, muestro el carro.
  if(miCarro == null){
   cuerpo.innerHTML = `<h2 style="color:red;">Tu carro esta vacio</h2>`
   } else{
   miCarro.forEach((cadaUnito) => {
   cuerpo.innerHTML += ` Producto: ${cadaUnito.nombre} || unidades: ${cadaUnito.cantidad}  ||  Subtotal: ${cadaUnito.precio} <br>  `  
   })
   cuerpo.innerHTML += ` Total :  ${totaldelcarro} $ <br><br><br> <div class="right"><button class="btn btn-primary btn-custom m-1 productito" id="comprar">Comprar</button><button class="btn btn-primary btn-custom m-1 productito" id="limpiar">Limpiar</button></div>`
   const btnComprar = document.getElementById("comprar")
   const btnLimpiar = document.getElementById("limpiar")

   // boton comprar, compra y guarda compra
   btnComprar.addEventListener('click', () => {   
   Swal.fire({
    position: 'top',
    icon: 'success',
    title: `COMPRADOOO.!`,
    showConfirmButton: false,
    timer: 2000,

    })
    cuerpo.innerHTML =  `Su carro fue COMPRADO <br>`   
    for (var i=0; i<miCarro.lenght; i++){
     localStorage.setItem(`Carrito compra ${i}`,JSON.stringify(miCarro))
     localStorage.setItem(`Total de compra ${i}`,JSON.stringify(totaldelcarro))
     localStorage.removeItem("miCarro") 
     localStorage.removeItem("totaldelcarro")
    }
   }) 
   // boton limpiar, limpia el carro. ( lo borra)
   btnLimpiar.addEventListener('click', () => {   
    btnLimpiar.classList.add('popup-active')
    setTimeout(() => {
    btnLimpiar.classList.remove('popup-active')
    }, 2500)
    cuerpo.innerHTML =  `Su carro fue borrado! <br>`    
    localStorage.removeItem("miCarro") 
    localStorage.removeItem("totaldelcarro") 
    localStorage.removeItem("Stock")
    productos = JSON.parse(localStorage.getItem("TodosLosProductos1"))
    localStorage.setItem("Stock",JSON.stringify(productos)) 
    })  
    }
} 
//----------------------------------------------------------------
//}
//////////////////////////// EJECUTA JS ////////////////////////////{
// entra la pagina y arranca la funcion pagina 
paginaCarrito()
console.log(miCarro)

//}