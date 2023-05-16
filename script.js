const textArea = document.querySelector(".text-area") ;
const mensaje =  document.querySelector(".mensaje");

function btnEncriptador() {
    const textoEncriptado = encriptar(textArea.value) ;
    mensaje.value = textoEncriptado ;
    textArea.value = "" ;
    mensaje.style.backgroundImage = "none";
    
}
function btnDesencriptador() {
    const textoEncriptado = desencriptar(textArea.value) ;
    mensaje.value = textoEncriptado ;
    textArea.value = "" ;
    mensaje.style.backgroundImage ="url(imagenes/muneco.png)";
}

function btnCopiar() {
    textArea.value = mensaje.value ;
    mensaje.value = "" ;
   }


function encriptar(stringEncriptada) {
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"] , ["o", "ober"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length ; i++){

    
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        } 
           
    } 
    return stringEncriptada ;
}
    
function desencriptar(stringdesEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"] , ["o", "ober"], ["u", "ufat"]];
    
    stringdesEncriptada = stringdesEncriptada.toLowerCase();
    
        for (let i = 0 ; i < matrizCodigo.length ; i++){
    
        
            if (stringdesEncriptada.includes(matrizCodigo[i][1])) {
                stringdesEncriptada = stringdesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            } 
               
        } 
        return stringdesEncriptada ;
    }
        