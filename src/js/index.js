//botones
const b_home = document.getElementById("home");
const b_encrypt = document.getElementById("encrypt");
const b_decrypt = document.getElementById("decrypt");
const b_click = document.getElementById("b_click");
const b_encode = document.getElementById("de_btn");
const b_decode = document.getElementById("dd_btn");
//pantallas
const p_home = document.getElementById("frm_home");
const frm_screen = document.getElementById("form");
//frm_inp1 frm
const frm_inp1 = document.getElementById("i_keys");
const frm_ta = document.getElementById("frm_ta");
//solo se ejecuta una vez al iniciar el navedor
frm_screen.style.display = "none";
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
    if (frm_inp1.value.length > 0 && frm_ta.value.length > 0) {

        let result_code="";
        //este if sirve para saber si debemos encriptar o desemcriptar
        if (frm == "encrypt") {

            //encriptar mensaje usando cipher.js
            result_code = window.cipher.encode(frm_ta.value, parseInt(frm_inp1.value));
        } else if (frm == "decrypt") {

            //desdencriptar mensaje usando cipher.js
            result_code = window.cipher.decode(frm_ta.value, parseInt(frm_inp1.value));
        } else {
           // console.log("Error en la funcion eje_cipher");
        }

        //esto quita los ccs err y deja el resto de css gracias al replace que rempla.
        frm_inp1.className = frm_inp1.className.replace(" err", "");
        frm_ta.className = frm_ta.className.replace(" err", "");

        //esto toma el valor de Texto que nos a sido retornado.
        frm_ta.value = result_code;
        frm_ta.className = " efec_console";

        //esto hace que se desaparesca despues de 5 segundos.
        setTimeout(function () {
            frm_ta.className = frm_ta.className.replace(" efec_console", "");
        }, 5000);
    }//caso contrario que canbie el color de los inputs
    else {
        frm_inp1.className = frm_inp1.className.replace(" err", "");
        frm_ta.className = frm_ta.className.replace(" err", "");

        frm_inp1.className += ((frm_inp1.value.length == 0) ? " err" : "");
        frm_ta.className += ((frm_ta.value.length == 0) ? " err" : "");
    }
}

//esta funcion sirve para generar y retocar el formulario.
function generar_frm() {
    clear_frm();
    if (frm == "home") {
        p_home.style.display = "block";
        frm_screen.style.display = "none";
    }
    else if (frm == "encrypt") {
        frm_screen.style.display = "block";
        p_home.style.display = "none";
        document.getElementById("rep_header").innerHTML = '<i class="icon-lock"></i>' + 'Encriptar';//reemplaza el icono y el titulo
        document.getElementById("rep_label").innerHTML = "Escriba su mensaje:";//reemplaza el contenido del label
        document.getElementById("frm_ta").placeholder = "Escribe un mensaje aquí";//reemplaza en contenido de placeholder
    }
    else if (frm == "decrypt") {
        frm_screen.style.display = "block";
        p_home.style.display = "none";

        document.getElementById("rep_header").innerHTML = '<i class="icon-unlocked"></i>' + 'Desencriptar';//remplza el icono y titulo
        document.getElementById("rep_label").innerHTML = "Pegar mensaje cifrado:";//reemplaza contenido del label
        document.getElementById("frm_ta").placeholder = "Pegar el mensaje aquí";//reemplaza el contenido de placeholder
    }
    else {
        //console.log("error funcion validar");
    }
}

//Funcion limpiar los input y text_area
function clear_frm() {
    frm_inp1.className = frm_inp1.className.replace(" err", "");
    frm_ta.className = frm_ta.className.replace(" err", "");

    frm_inp1.value = "";
    frm_ta.value = "";
}


//Escucha y ejecuta una funcion
b_home.addEventListener('click', showHome);
b_encrypt.addEventListener('click', showEncrypt);
b_decrypt.addEventListener('click', showDecrypt);
b_click.addEventListener('click', eje_cipher);
b_encode.addEventListener('click', showEncrypt);
b_decode.addEventListener('click',  showDecrypt);



