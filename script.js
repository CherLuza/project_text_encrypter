// Definindo constantes //

const textArea = document.querySelector(".text-area");
const textAreaDecrypt = document.querySelector(".text-area-decrypt");

// definindo elementos para serem lidos pelo ResponsiveVoice //
var textElements = document.querySelectorAll('h1, h2, button, h3');


//Para Encriptar//

// Procedimento ao clicar o botão de encriptar //
function btnEncriptar() {
 const textoEncriptado = encriptar(textArea.value);
 textAreaDecrypt.value = textoEncriptado;
 textArea.value = "";
}

// Realiza a função de encriptar a mensagem //
function encriptar(stringEncriptada) {
 let matrizCodigo = [["e" , "he"] , ["i" , "sis"] , ["a" , "alis"] , ["o" , "ror"] , ["u" , "fua"]];
 stringEncriptada = stringEncriptada.toLowerCase(); //coloca em letra minúscula//
 for (let i = 0; i < matrizCodigo.length; i++) {
 if(stringEncriptada.includes(matrizCodigo[i][0])) {
 stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
 }
 }
 return stringEncriptada;
}

// Para Desencriptar //

// Invoca a função //
function btnDesencriptar() {
 const textoDesencriptado = desencriptar(textArea.value);
 textAreaDecrypt.value = textoDesencriptado;
 textArea.value = "";
}

// Realiza a função de desencriptar a mensagem //
function desencriptar(stringDesencriptada) {
let matrizCodigo = [["e" , "he"] , ["i" , "sis"] , ["a" , "alis"] , ["o" , "ror"] , ["u" , "fua"]];
 stringDesencriptada = stringDesencriptada.toLowerCase();

 for (let i = 0; i < matrizCodigo.length; i++) {
 if(stringDesencriptada.includes(matrizCodigo[i][1])) {
 stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
 }
 }
 return stringDesencriptada;
}

// Realiza a cópia do texto criptografado //
document.querySelector(".button-copy-text").addEventListener("click", function() {
    copyText();
});

function copyText() {
    const textToCopy = textAreaDecrypt.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}

// Limpar Campos //
function limparCampo() {
   textArea.value = '';
   textAreaDecrypt.value = '';
}

// Responsive Voice //

// Evento de mouseover a cada elemento de texto //
textElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        // Lê o texto contido no elemento de texto usando ResponsiveVoice //
        responsiveVoice.speak(element.innerText, "Brazilian Portuguese Female");
    });
});
