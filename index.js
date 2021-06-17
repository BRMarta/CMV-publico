
function leerXML0(formato) {
   
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let aviones = obtenerArray(this, "XML propio");
            if (formato == "todas") {
                obtenerTodos(aviones);
            }
            else if (formato == "bricks") {
                brickDisplay(aviones);
            }
            else if (formato == 'unAvion') {
                unAvion(aviones);
            }
        }
    };
    xhr.open("GET", "https://brmarta.github.io/CMV-publico/XML/datos.xml", true);
    xhr.send();
}

function obtenerArray(xml, fuente) {
    let listaAviones;
    let i;
    let nombre;
    let foto;
    let aviones = [];
    let bloque = "";
    let avion;
    let xmlDoc = xml.responseXML;

    let x = xmlDoc.getElementsByTagName("avion");

    for (i = 0; i < x.length; i++) {
        nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;
        avion = [nombre, foto, pie, detalle];

        aviones.push(avion);
    }

    return aviones;
}

function obtenerTodos(aviones, fuente) {
    let bloque = "";
    let pie = "";
    let detalle = "";

    for (i = 0; i < aviones.length; i++) {

        let titulo = aviones[i][0];
        let imagen = aviones[i][1];
        pie = aviones[i][2];
        detalle = aviones[i][3];

        bloque += "<div class='fade'><div class='rollover'><figure class='cube'><h3>" + titulo + "</h3><img src='" + imagen + "' class='front'/><p class='back'>" + detalle + "</p></figure></div></div>"

    }
    document.getElementById("fotos").innerHTML = bloque;
}

function unAvion(aviones) {

    let noAvion = true;
    let i;
    let titulo;
    let imagen;
    let pie;
    let detalle;
    let avion;
    let bloque="";

    avion = window.prompt("¿Qué avión quieres ver?");
    avion = avion.charAt(0).toUpperCase() + avion.slice(1);
   
    for (i = 0; i < aviones.length; i++) {

        if (aviones[i][0] == avion) {
            titulo = aviones[i][0];
            imagen = aviones[i][1];
            pie = aviones[i][2];
            detalle = aviones[i][3];
            bloque += "<div class='fade'><div class='rollover'><figure class='cube'><h3>" + titulo + "</h3><img src='" + imagen + "' class='front'/><p class='back'>" + detalle + "</p></figure></div></div>"
            noAvion=false;
        }
    }
    if (noAvion) {
        window.alert("No existe ningún modelo de avión con ese nombre!");
        
    }else{
        document.getElementById("fotos").innerHTML = bloque;
    }
}


function brickDisplay(aviones) {


    let i;
    let titulo;
    let imagen;
    let pie;
    let detalle;    
    let bloque = "<div class='divPadre'>";

    for (i = 0; i < aviones.length; i++) {

        titulo = aviones[i][0];
        imagen = aviones[i][1];
        pie = aviones[i][2];
        detalle = aviones[i][3];
        bloque += "<div class='todosDiv'><img src='" + imagen + "' class='imagenBrick'/><p class='tituloBrick'>" + titulo + "</p></div>"

    }
    bloque += "</div>";
    document.getElementById("fotos").innerHTML = bloque;
}