
const b_home = document.getElementById("home");
const b_encrypt = document.getElementById("encrypt");
const b_decrypt = document.getElementById("decrypt");
const btnval = document.getElementById("btnVal");
//pantallas
const p_home = document.getElementById("form1");
const p_pantalla = document.getElementById("form");
//frm_inp1 frm
const frm_inp1 = document.getElementById("i_keys");
const text_area = document.getElementById("ta_text");
//solo se ejecuta una vez al iniciar el navedor
p_pantalla.style.display = "none";
//Variables publicas
let frm = "";//esta varible es el nombre del formulario que se vera

//Funciones se ejecuntan cada ves que le demos click al boton
function showHome() {
    frm = "home";
    generar_frm()
}
function showEncrypt() {
    frm = "encrypt";
    generar_frm();
}
function showDecrypt() {
    frm = "decrypt";
    generar_frm();
}

//esta funcion sirve para enviar a encriptar
function eje_cipher() {
    //condicion si el tamño de caractes es mayor a 0 si es mayor que se envien a codificar
    if (frm_inp1.value.length > 0 && text_area.value.length > 0) {

        let result_code="";
        //este if sirve para saber si debemos encriptar o desemcriptar
        if (frm == "encrypt") {

            //encriptar mensaje usando cipher.js
            result_code = window.cipher.encode(text_area.value, parseInt(frm_inp1.value));
        } else if (frm == "decrypt") {

            //desdencriptar mensaje usando cipher.js
            result_code = window.cipher.decode(text_area.value, parseInt(frm_inp1.value));
        } else {
            console.log("Error en la funcion eje_cipher");
        }

        //esto quita los ccs err y deja el resto de css gracias al replace que rempla.
        frm_inp1.className = frm_inp1.className.replace(" err", "");
        text_area.className = text_area.className.replace(" err", "");

        //esto toma el valor de Texto que nos a sido retornado.
        text_area.value = result_code;
        text_area.className = " efec_console";

        //esto hace que se desaparesca despues de 5 segundos.
        setTimeout(function () {
            text.className = text_area.className.replace(" efec_console", "");
        }, 5000);
    }//caso contrario que canbie el color de los inputs
    else {
        frm_inp1.className = frm_inp1.className.replace(" err", "");
        text_area.className = text_area.className.replace(" err", "");

        frm_inp1.className += ((frm_inp1.value.length == 0) ? " err" : "");
        text_area.className += ((text_area.value.length == 0) ? " err" : "");
    }


    /*
        if (frm == "encrypt") {
            alert("ecriptar");
        } else if (frm == "decrypt") {
            alert("desencriptar");
        }*/
}


//esta funcion sirve para generar y retocar el formulario.
function generar_frm() {
    clear_frm();
    if (frm == "home") {
        p_home.style.display = "block";
        p_pantalla.style.display = "none";
    }
    else if (frm == "encrypt") {
        p_pantalla.style.display = "block";
        p_home.style.display = "none";
        document.getElementById("cambiar").innerHTML = '<i class="icon-lock"></i>' + 'Encriptar';
        document.getElementById("camb_la2").innerHTML = "Escriba su mensaje:";
        document.getElementById("ta_text").placeholder = "Escriba un mensaje aquí";
    }
    else if (frm == "decrypt") {
        p_pantalla.style.display = "block";
        p_home.style.display = "none";

        document.getElementById("cambiar").innerHTML = '<i class="icon-unlocked"></i>' + 'Desencriptar';
        document.getElementById("camb_la2").innerHTML = "Pegar mensaje cifrado:";
        document.getElementById("ta_text").placeholder = "Pegar el mensaje aquí";
    }
    else {
        console.log("error funcion validar");
    }
}

//Funcion limpiar los imput
function clear_frm() {
    frm_inp1.className = frm_inp1.className.replace(" err", "");
    text_area.className = text_area.className.replace(" err", "");

    frm_inp1.value = "";
    text_area.value = "";
}


//Escucha y ejecuta una funcion
b_home.addEventListener('click', showHome);
b_encrypt.addEventListener('click', showEncrypt);
b_decrypt.addEventListener('click', showDecrypt);
btnval.addEventListener('click', eje_cipher);



