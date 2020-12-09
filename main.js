//Variables
let agregarNota;
let tipoNota;
let textNota;
let titleNota;
let notas = [];

window.addEventListener('load', inicializar, true);

function inicializar (){
    agregarNota = document.getElementById('agregar-nota');
    tipoNota = document.getElementById('tipoNota');
    textNota = document.getElementById('texto');
    titleNota = document.getElementById('titulo');
    contenedor = document.querySelector('.contenedor-notas')
    msj = document.querySelector('.msj');
    
    agregarNota.addEventListener('click',addNota, true);
}

function addNota(){
    if(titleNota.value != "" && textNota.value != ""){
        nuevaNota = {
            titulo: titleNota.value,
            texto : textNota.value,
            tema : tipoNota.value,
        };
        notas.push(nuevaNota);
    
        contenedor.innerHTML += "<div class='nota " + nuevaNota.tema + "'><div class='eliminar' id=" + (notas.length-1) + ">x</div><h2>" + nuevaNota.titulo + "</h2><p>"+ nuevaNota.texto + "</p></div>"
    
    }else{
        msj.classList.add('mostrar');
        setTimeout(function(){
            msj.classList.remove('mostrar')
        },3000)
    }



    eliminar = document.querySelectorAll('.eliminar');

    for(let i=0; i<notas.length; i++){
        eliminar[i].addEventListener('click',eliminarNota, true);
    }

}

function eliminarNota(){
    notas.splice(event.target.id,1);
    document.getElementById(event.target.id).parentElement.remove();
}