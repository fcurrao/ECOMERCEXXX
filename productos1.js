
//////////////////////////// INICIALIZACIONES  //////////////////// {
 
	let miCarritoEnLS = JSON.parse(localStorage.getItem("miCarro"))										
	let totaldelcarro = JSON.parse(localStorage.getItem("totaldelcarro"))
	let totalCarritoArriba = document.getElementById("totalCarritoArriba")
	let drop2 = document.getElementById("drop2")
	let miCarro = JSON.parse(localStorage.getItem("miCarro"))
	let probando = document.getElementById("probando")
	let miCarrito = []
	let productos = []
	let productosEnStock = []
	let items = []
	let i=0
	let h=0
	let idNew = 0
	// JSON = todoslosproductos1.JSON

	class Producto {
	    constructor(nombre, precio, nroItem, cantidad){
	        this.nombre = nombre;
	        this.precio = parseFloat(precio);
	         this.nroItem = nroItem;
	         this.cantidad = parseFloat(cantidad);
	        this.vendido = false;
	    }

	    sumaIva(){
	    this.precio = this.precio * 1.21;
	    }
	}
//}

//////////////////////////// FUNCIONES ////////////////////////////{

	//----------------------------------------------------------------

	function borrarstorage ()  {
		localStorage.clear()
		sessionStorage.clear()
	}
	//----------------------------------------------------------------
	function guardarLocal (clave, valor)  {
		localStorage.setItem(clave, valor)
	}
	//----------------------------------------------------------------

	//---------------------------------------------------------------
	function comprando (numerito, boton){
		// realiza la compra"
		items = JSON.parse(localStorage.getItem("Stock"))
		let StockMomentaneoProducto = items[numerito].cantidad
		let numeroAComprar = document.getElementById("cantidadAcomprar").value
		// si la cantidad no se puede comprar porque es mucha
		if(numeroAComprar <= 0 ||  numeroAComprar>StockMomentaneoProducto){
			boton.classList.add('popup-active')
	 	  setTimeout(() => {
	      boton.classList.remove('popup-active')
	 		}, 2500)

	 	}
	 	//si todo esta OK! se realiza la compra
	 	if(numeroAComprar >0 && numeroAComprar <= StockMomentaneoProducto){
			Swal.fire({
			    position: 'top',
			    icon: 'success',
			    title: `AGREGANDO...... ${items[numerito].nombre}`,
			    showConfirmButton: false,
			    timer: 2000,

			})					
			const saldo = items[numerito].precio*numeroAComprar
			miCarrito.push(new Producto(items[numerito].nombre,saldo,items[numerito].nroItem, numeroAComprar))
			items[numerito].cantidad = items[numerito].cantidad - numeroAComprar
			totaldelcarro = totaldelcarro + saldo
			totalCarritoArriba.innerHTML = ` VER CARRITO  ${totaldelcarro} $`			
			i++
		} else{}
		document.getElementById("cantidadAcomprar").value = ""
		guardarLocal("Stock", JSON.stringify(items)) 	 
		productosEnStock = JSON.parse(localStorage.getItem("TodosLosProductos1"))
		productosEnStock[numerito].cantidad = items[numerito].cantidad

	}



	//----------------------------------------------------------------
		function chekearYcomprar (numerito, boton){		
			// si existe ya un carro comprando
			miCarritoEnLS = JSON.parse(localStorage.getItem("miCarro"))
			if(miCarritoEnLS == null){
				comprando(numerito, boton)
				guardarLocal("totaldelcarro", totaldelcarro)
				miCarritoEnLS = miCarrito
				guardarLocal("miCarro", JSON.stringify(miCarritoEnLS))
				
			} else{
				miCarrito = miCarritoEnLS
				comprando(numerito, boton)
				guardarLocal("totaldelcarro", totaldelcarro)
				miCarrito = miCarritoEnLS 
				// guardarLocal("miCarro", JSON.stringify(miCarritoEnLS) )
				guardarLocal("miCarro", JSON.stringify(miCarrito) )
			}	
		}
		//----------------------------------------------------------------
		function arrancoLaPagina(){
			
			let lista = document.querySelector('#cuerpo')
			items2 = JSON.parse(localStorage.getItem("TodosLosProductos1"))

			for (var i=0;i< items2.length;i++){
				lista = document.querySelector('#cuerpo')
				let div1 = document.getElementById('div1')
				let div0 = document.getElementById('div0')
				let clave = i+1
				div0.innerHTML = `UNIDADES A COMPRAR : <input type="number" id="cantidadAcomprar">  </input>`
				div1.innerHTML += `
				
				<div class="right">
	            <img src="img/${items2[i].nombre}.jpg"">
	            <h3>${items2[i].nombre}</h3>
	            <p>${items2[i].precio} $</p>
	            <button class="btn btn-primary btn-custom m-1 productito" id="clave${clave}">AGREGARLO AL CARRO</button>
	            </div>
	       		`
	       		lista.append(div1)	
	       		let abajoCuerpo = document.getElementById('abajoCuerpo')
	       		lista.append(abajoCuerpo)	
			}
					document.getElementById("clave1").addEventListener('click', () => {chekearYcomprar(0,document.getElementById("clave1"))})
					document.getElementById("clave2").addEventListener('click', () => { chekearYcomprar(1,document.getElementById("clave2"))})  
					document.getElementById("clave3").addEventListener('click', () => {chekearYcomprar(2,document.getElementById("clave3"))})
					document.getElementById("clave4").addEventListener('click', () => {chekearYcomprar(3,document.getElementById("clave4"))	})  
					document.getElementById("clave5").addEventListener('click', () => {chekearYcomprar(4,document.getElementById("clave5"))})	
					document.getElementById("clave6").addEventListener('click', () => {chekearYcomprar(5,document.getElementById("clave6"))})  
					document.getElementById("clave7").addEventListener('click', () => {chekearYcomprar(6,document.getElementById("clave7"))})  
					document.getElementById("clave8").addEventListener('click', () => {chekearYcomprar(7,document.getElementById("clave8"))})
					document.getElementById("clave9").addEventListener('click', () => {	chekearYcomprar(8,document.getElementById("clave9"))})  

			// })

		}
		//----------------------------------------------------------------
		function arrayPorJsonProductos(){

			fetch('todoslosproductos1.JSON')
			.then((response) => response.json())
				.then((json) =>  {
					json.forEach((cadaUno) => {
						productos.push(new Producto(cadaUno.nombre,cadaUno.precio,cadaUno.nroItem, cadaUno.cantidad))	
					})
					productosEnStock = productos
					guardarLocal("TodosLosProductos1", JSON.stringify(productos))	
					guardarLocal("Stock", JSON.stringify(productos))	

														
				})
			items = JSON.parse(localStorage.getItem("TodosLosProductos1"))
			productosEnStock = JSON.parse(localStorage.getItem("TodosLosProductos1"))

		}
		//----------------------------------------------------------------
		function barraArribaCarrito(){
			if(totaldelcarro == null){
			totalCarritoArriba.innerHTML = ` VER CARRITO  0 $`
			} else {totalCarritoArriba.innerHTML = ` VER CARRITO  ${totaldelcarro} $`}
			drop2 = document.getElementById("drop2")
			drop2.addEventListener('click', () => { verMas() })
		}

//}
//////////////////////////// EJECUTA JS ////////////////////////////{
	let dropsito = document.getElementById("dropsito")
	barraArribaCarrito()
	arrayPorJsonProductos()
	arrancoLaPagina()
//}

////////////////////////// PROBANDO ///////////////////////////// {




//}
