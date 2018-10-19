
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

/*1*/ var cont=0;

/*2*/ var bitacoras = [];

/*3*/ var formulario = document.getElementById("bitacora");

/* 

¿Qué contienen la variable formulario ?

FORMULARIO CONTIENE TODA LA ESTRUCTURA DE BITACORA*/

/*4*/ 


 /*
 ¿Qué hace el método evt.preventDefault() ?

 DETIENE LAS ACCIONES POR DEFECTO*/ 




 /*
 ¿Qué es lo que contiene formulario[x]?

 MUESTRA LAS SECCIONES QUE CONFORMAN EL ELEMENTO FORMULARIO*/
 



 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 


 
 /*5*/

 const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
   tbody.appendChild(tr); 
  }





  
   /*¿Qué contienen las variables tr y td ?

   tr contiene la descripcion de los elementos que se van a insertar, "class" y "click",
   td contiene dichos elementos.

¿Qué contienen la variable content ?

content es un nodo texto que contiene los elementos de bitacora

¿Qué valor tendra tbody al finalizar la iteración?

todos los tr y sus respectivos td

Describa en pocas palabras lo que realizara esta función

Nos crea una tabla con los elementos de bitacora  y los guarda como una clase llamada "click"


*/



  /*6*/

  const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }

   /*¿Qué es lo que hace .firstChild?

   Retorna el primer hijo del nodo como un objeto nodo.

Después de realizar el while ¿Comó quedara el elemento tbody ?

Mientras el primer hijo este seleccionado, lo va a eliminar.

*/

/*7*/

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
   } 

   /*
   ¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;
   
   Nos guarda una coleccion de todos los nodos hijo como un objeto de nodos lista*/

/*8*/

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 


   /*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?

   Retorna el primer elemento que contenga la clase .tabla-btc tbody

 ¿Qué hace el método childElementCount?

 Retorna el numero de elementos hijo que contiene algun elemento

¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?

Agrega todos los elementos de bitacora


 ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?

 
Nos muestra todos los elementos de bitacora agregados*/ 

