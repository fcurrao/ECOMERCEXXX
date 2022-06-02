


/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////


// carrito.js


// totaldelcarro = 100
// totalCarritoArriba = document.getElementById("totalCarritoArriba")
// console.log(totalCarritoArriba)
// totalCarritoArriba.innerHTML += `${totaldelcarro} $`


// append(totalc)   

// totCarrito = document.getElementById("totCarrito");

// totCarrito.innerHTML = tot;


// for(item in carrito){


//     let ulCarrito = document.getElementById("ulCarrito");
//     let nLi = document.createElement("li");
//     nLi.id = item;
//     nLi.className = "list-group-item";
//     nLi.innerHTML = `<img class="ulPic" src="${carrito[item].img}"> ${carrito[item].nombre} -------- PRECIO: ${carrito[item].precio}`
//     ulCarrito.appendChild(nLi);

// }




/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////




var carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Importamos el total del carrito de la barra de navegacion
totNavBar = document.getElementById("totNavBar"); 

//Importamos donde imprimiremos los precios en el html
price1a = document.getElementById("price1"); 
price2a = document.getElementById("price2");
price3a = document.getElementById("price3");
price4a = document.getElementById("price4");
name1 = document.getElementById("name-1");
name2 = document.getElementById("name-2");
name3 = document.getElementById("name-3");
name4 = document.getElementById("name-4");
desc1 = document.getElementById("desc-1");
desc2 = document.getElementById("desc-2");
desc3 = document.getElementById("desc-3");
desc4 = document.getElementById("desc-4");



/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////		XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX			////////////////////////////////////////////////////////////////////////




class Productos{
    constructor(nombre,precio,descripcion,img){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }    
    addItem(){
        carrito.push(this);
        let aLocalStorage = JSON.stringify(carrito);
        localStorage.setItem("carrito",aLocalStorage);
        refreshTotNavBar();
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: `${this.nombre} <br>Agregado al carrito`,
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        Toastify({
          text: `  ${this.nombre} Agregado al carrito`,
          duration: 4000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
    }    

    verMas(){
      Swal.fire({
        title: `${this.nombre}`,
        text: `${this.descripcion}, PRECIO: $${this.precio}`,
        imageUrl: `${this.img}`,
        imageHeight: 300,
        imageAlt: 'Imagen del producto'        
      })
    }


}    


//Importamos los botones de agregar al carrito de cada producto
add1 = document.getElementById("add1"); 
add2 = document.getElementById("add2");
add3 = document.getElementById("add3");
ver1 = document.getElementById("ver1");
ver2 = document.getElementById("ver2");
ver3 = document.getElementById("ver3");
ver4 = document.getElementById("ver4");

empty = document.getElementById("empty");



//OBJETOS
deWalt20vMax = new Productos("Taladro Percutor Inalambrico Dewalt 20v Max",82000,"Rangos de 2 velocidades van de 0-550 / 0-2000 rpm ofrece aplicaciones hasta un 30% más rápidas.","./img/DCD980L2_1L.jpeg");
stanleyRoto1250 = new Productos("Rotomartillo Taladro Percutor Stanley 1250w",51499,"Poderoso motor de 1250W para un amplio rango de aplicaciones de taladrado y cincelado Diseño con piston en L para mayor poder","img/rotop.png");
carroStanley = new Productos("Carro Aluminio Plegable Stanley",11900,"Carro de mano plegable hasta 50Kg Se dobla y abre en segundos","img/zorr.jpeg");
bdwd10 = new Productos("Aspiradora Black&Decker 10L Polvo y Agua",23624,"Potente aspiradora ideal para todas las tareas de limpieza del hogar. Aspira polvo y agua sin dificultad.","img/bdwd10.jpeg");

var tot = 0;

function refreshTotNavBar(){
    largoCarrito = carrito.length;
    for(x in carrito){
    tot = tot + carrito[x].precio
}
// totNavBar.innerHTML = `tot`;
}
refreshTotNavBar(); //print inicial del total en barra de navegación

function vaciarCarrito(){
Swal.fire({
    title: 'Está seguro?',
    text: "Está a punto de vaciar el carrito de compras!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, vaciar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Vaciado!',
        'Su carrito ha sido vaciado.',
        'success'
      )
      carrito.splice(0,carrito.length);
      refreshTotNavBar();
      localStorage.clear();
    }
  })
}



// empty.onclick = () =>{vaciarCarrito()};

// //////////////////////////////

// add1.addEventListener("click",deWalt20vMax.addItem());
// add1.onclick = () =>{deWalt20vMax.addItem()};
// ver1.onclick  = () =>{deWalt20vMax.verMas()};
// ver2.onclick  = () =>{stanleyRoto1250.verMas()};
// ver3.onclick  = () =>{carroStanley.verMas()};
// ver4.onclick  = () =>{bdwd10.verMas()};
// add2.onclick = () =>{stanleyRoto1250.addItem()};
// add3.onclick = () =>{carroStanley.addItem()};
// add4.onclick = () =>{bdwd10.addItem()};



// name1.innerHTML = deWalt20vMax.nombre;
// name2.innerHTML = stanleyRoto1250.nombre;
// name3.innerHTML = carroStanley.nombre;
// name4.innerHTML = bdwd10.nombre;

// //ASIGNAMOS LOS PRECIOS DE CADA OBJETO A LA VARIABLE QUE IMPRIME EN EL HTML
// price1a.innerHTML = deWalt20vMax.precio;
// price2a.innerHTML = stanleyRoto1250.precio;
// price3a.innerHTML = carroStanley.precio;
// price4a.innerHTML = bdwd10.precio;

// img1.setAttribute("src", deWalt20vMax.img);
// img2.setAttribute("src", stanleyRoto1250.img);
// img3.setAttribute("src", carroStanley.img);
// img4.setAttribute("src", bdwd10.img);