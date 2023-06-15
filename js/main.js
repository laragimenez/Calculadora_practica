const botones= document.querySelectorAll(".btn");
const resultado= document.querySelector(".resultado");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        if (boton.id === "c"){
            resultado.textContent= "";
            console.log(resultado.innerHTML)
            return;
        }
        if (boton.id === "borrar"){
            resultado.textContent= resultado.textContent.slice(0, -1);
            return;
        }
        if (boton.id === "igual"){
            resultado.textContent= eval(resultado.textContent);
            return;
        }else{
            resultado.innerHTML += boton.innerHTML;
        }
        
    })
})









