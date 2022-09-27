var diccionario;
diccionario = ['hola', 'panque', 'jicama', 'alura', 'mundo'];
var ahCon = 0;
var arregloPalabra;
var contArregloPalabra=0;
var nombreJugador;
function cHead(){
    var meta1 = document.createElement('meta');
    meta1.charset = 'UTF-8';
    document.head.appendChild(meta1);
    var meta2 = document.createElement('meta');
    meta2.name = 'viewport';
    meta2.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(meta2);
    var estiloR = document.createElement('link');
    estiloR.rel = 'stylesheet'
    estiloR.href = 'reset.css'
    document.head.appendChild(estiloR);
    var estilo = document.createElement('link');
    estilo.rel = 'stylesheet'
    estilo.href = 'stylePalabra.css'
    document.head.appendChild(estilo);
}

function scripte(){
    var scriptP = document.createElement('script');
    scriptP.src = 'script.js';
    document.body.appendChild(scriptP);
}

function presionaLetra(event){

    var teclaNumero= parseInt(event.key);
    if (teclaNumero >= 0) {     
    }
    else{
        var codigo = (event.key).toUpperCase();
        var clase = document.getElementsByClassName(codigo);  


        if (clase.length <= 0 && codigo.length<=1) {
            var descarteArreglo = document.getElementById('descarte').value;
            
            descarteArreglo = descarteArreglo + "     " + codigo;
            document.getElementById('descarte').value = descarteArreglo;

            /*aparece ahorcado*/
            if (ahCon >= 0) {
                    document.getElementById('ah1').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                    if (ahCon >= 1) {
                        document.getElementById('ah2').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                        if (ahCon >= 2) {
                            document.getElementById('ah3').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                            if (ahCon >= 3) {
                                document.getElementById('ah4').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                if (ahCon >= 4) {
                                    document.getElementById('ah5').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                    if (ahCon >= 5) {
                                        document.getElementById('ah6').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                        if (ahCon >= 6) {
                                            document.getElementById('ah7').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                            if (ahCon >= 7) {
                                                document.getElementById('ah8').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                                if (ahCon >= 8) {
                                                    document.getElementById('ah9').setAttribute('style','animation:3s ease 0s normal forwards 1 fadein; -webkit-animation:3s ease 0s normal forwards 1 fadein;');
                                                    if (ahCon >= 9) {
                                                        document.getElementById('ah10').setAttribute('style','animation:0s ease 0s normal forwards 1 fadein; -webkit-animation:0s ease 0s normal forwards 1 fadein;');
                                                        /*determina perdedor*/
                                                        perdiste();
                                                    }  
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
            }
            ahCon++;
        }
        /*determina ganador*/
        for (contador = 0; contador < clase.length; contador++){
            
            

            clase[contador].value = codigo;
            
            contArregloPalabra++;
            if (contArregloPalabra == (arregloPalabra.length)-1 && nombreJugador.includes('caro')){

                var winc = document.createElement('img');
                winc.id = 'winc';
                winc.src = 'ahorcado/ganador_c.jpg';
                document.getElementById('divDescarte').remove();
                document.getElementById('divPalabra').remove();
                setTimeout(function() { document.body.appendChild(winc); }, 2000);                 
            }
            if(contArregloPalabra == (arregloPalabra.length)){
                var win = document.createElement('img');
                win.id = 'win';
                win.src = 'ahorcado/ganador.jpg';
                document.getElementById('divDescarte').remove();
                document.getElementById('divPalabra').remove();
                setTimeout(function() { document.body.appendChild(win); }, 2000);
            }



        }
        return codigo;
    }
    
}

function nuevo(){
    if (document.getElementById('win')) {

        document.getElementById('win').remove();
        
        
        if (document.getElementById('winc')) {
            document.getElementById('winc').remove();
        }
        
        
    }
    if (document.getElementById('divPalabra')) {

        document.getElementById('divPalabra').remove();
        if (document.getElementById('divDescarte')) {
           document.getElementById('divDescarte').remove(); 
        }
        

    }

    document.getElementById('acciones').remove();
    if (document.getElementById('ahorcado')) {
        document.getElementById('ahorcado').remove();
    }
    if (document.getElementById('prueba')) {
        document.getElementById('prueba').remove();
    }
    ahCon = 0;
    contArregloPalabra=0;
    juego();
}

function cuadroTxt(palabra) {
    document.write('<img id="logo" src="ahorcado/logo.svg">');
        
    
    palabra = palabra.toUpperCase();
    arregloPalabra = palabra.split("");
    document.write('<texarea id="escribe"></textarea><div id=divPalabra>');
    for (var contador = 0; contador < arregloPalabra.length; contador++){

        document.write('<textarea class= ' + arregloPalabra [contador] + ' readonly></textarea>');

    }
    document.write('</div><div id="divDescarte"><textarea id="descarte" maxlenght="10" readonly></textarea></div>');
    document.write('<div id=acciones><button id="nuevo" onclick="nuevo();">Nuevo Juego</button><button id="Rendirse" onclick="perdiste();">Rendirse</button></div>');
    window.addEventListener('click',document.getElementById('escribe'.focus));
    window.addEventListener('load',document.getElementById('escribe'.focus));
    return arregloPalabra;
    
}


function numeroAleatorio(max) {

    
    var aleatorio = Math.floor(Math.random() * max);

    return aleatorio;
    
}

function guadarEmpezar() {
    
    diccionario.push(document.getElementById('agregaP').value);
    console.log(diccionario);    
    document.getElementById('cABotones').remove();
    document.getElementById('agregaP').remove();
    juego();
}

function cancelar() {
    document.getElementById('cABotones').remove();
    document.getElementById('agregaP').remove();
    inicio();
}

function juego(){
    cHead();
    if (nombreJugador.includes('caro')) {
        var confirmacion = confirm('Quieres jugar el especial para ti?');
        if (confirmacion == true){
            diccionario = ['Me Gustas', 'Me encantas', 'Te quiero', 'Me prendes'];
            
        }
        else{
            
        }
        cuadroTxt(diccionario[numeroAleatorio(diccionario.length)]);
        window.addEventListener('keydown', presionaLetra);
    }

    else{
        
        cuadroTxt(diccionario[numeroAleatorio(diccionario.length)]);
        window.addEventListener('keydown', presionaLetra);
    }
    cHead();
    var dAhorcado = document.createElement('div');
    dAhorcado.id = 'ahorcado';
    document.body.appendChild(dAhorcado);
    
    for (contImg = 1; contImg <= 10;){
        var imgAhorcado = document.createElement('img');
        imgAhorcado.id = 'ah' + contImg;
        imgAhorcado.src = 'ahorcado/' + contImg + '.svg';
        document.getElementById('ahorcado').appendChild(imgAhorcado);
        contImg++
    }

}

function inicio(){
    cHead();
    document.write('<img id="logo" src="ahorcado/logo.svg">');
    document.write('<button id="inicio" onclick="juego()">Inicio</button><button id="agrega" onclick="agregaP()">Agregar Palabra</button>');
}

function agregaP() {       
   
    document.getElementById('inicio').remove();
    document.getElementById('agrega').remove();
    document.write('<input type="text" id="agregaP" autofocus placeholder="Ingrese Una Palabra" maxlength="8"><div id=cABotones><button id="guardar" onclick="guadarEmpezar();">Guardar y empezar</button><button id="cancelar" onclick="cancelar();">Cancelar</button></div>');
    cHead();
    document.write('<img id="logo" src="ahorcado/logo.svg">'); 
    
}

function canvas(texto) {

    function cCanvas(){
    document.write('<canvas width="600" id="prueba" height="400"></canvas>');

    var cxt1 = document.getElementById('prueba');
    var contexto = cxt1.getContext('2d');
    return contexto;
    }
    var cxt1 = cCanvas();

    if (nombreJugador.includes('caro')) {
        texto='Perdiste :(, pero aun'
        cxt1.beginPath(); //iniciar ruta
        cxt1.strokeStyle="red"; //color externo
        cxt1.fillStyle="#62a0eb"; //color de relleno
        cxt1.font="bold 60px arial"; //estilo de texto
        cxt1.strokeText(texto,0,140); 
        cxt1.fillText(texto,0,140);
        texto='Me gustas Mucho!<3'
        texto=texto; //texto
        cxt1.beginPath(); //iniciar ruta
        cxt1.strokeStyle="red"; //color externo
        cxt1.fillStyle="#62a0eb"; //color de relleno
        cxt1.font="bold 60px arial"; //estilo de texto
        cxt1.strokeText(texto,0,200); 
        cxt1.fillText(texto,0,200);
    } 
    else{
        cxt1.beginPath(); //iniciar ruta
        cxt1.strokeStyle="blue"; //color externo
        cxt1.fillStyle="#black"; //color de relleno
        cxt1.font="bold 60px arial"; //estilo de texto
        cxt1.strokeText(texto,0,140); 
        cxt1.fillText(texto,0,140);
    } 
}

function perdiste(){

    if (nombreJugador.includes('caro')) {
        document.getElementById('ahorcado').remove();
        document.getElementById('divPalabra').remove();
        document.getElementById('divDescarte').remove();
        canvas();
    }
    
    else{

        document.getElementById('ahorcado').remove();
        document.getElementById('divPalabra').remove();        
        document.getElementById('divDescarte').remove();
        canvas('GAME OVER');
    }

}

nombreJugador  = prompt("ingresa tu nombre");
nombreJugador = nombreJugador.toLocaleLowerCase();
inicio();
window.addEventListener('click',document.getElementById('descarte'.focus));
