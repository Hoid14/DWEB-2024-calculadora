const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

//Tú código va acá
//hint: Busca sobre la función eval
const resolver = (pantalla)=>{
    return eval(pantalla)
}
botones.forEach(boton => {
    boton.addEventListener("click", ()=> {
        let pressedBtn = boton.textContent;
        
        if(pressedBtn==="="){
            try{
                let result = resolver(pantalla.textContent);
                pantalla.textContent = result;
            }
            catch{
                pantalla.textContent = "Error!";
            }
            
        }
        else if (pressedBtn==="C"){
            pantalla.textContent="0";
        }
        else if (pressedBtn==="←"){
            pantalla.textContent = pantalla.textContent.substring(0,pantalla.textContent.length - 1);
            if(pantalla.textContent === "Infinity" || pantalla.textContent === "Error!" || pantalla.textContent===""){
                pantalla.textContent="0";
            }
        }
        else{
            if(pantalla.textContent==="0"){
                pantalla.textContent="";
            }
            pantalla.textContent+=pressedBtn;
        }
    })
})
