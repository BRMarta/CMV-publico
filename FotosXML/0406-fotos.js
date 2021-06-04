
let usuarios = [];

function leerXML0() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this, "XML propio");
        }
    };
    xhr.open("GET", "https://brmarta.github.io/CMV-publico/XML/datos.xml", true);
    xhr.send();
}

function miFuncion(xml, fuente) {
    
    let i;
    let nombre;
    let foto;
    let pie;
    let aviones = [];
    let bloque="";
    let xmlDoc = xml.responseXML;

    let x = xmlDoc.getElementsByTagName("avion");

    for (i = 0; i < x.length; i++) {
        nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        //detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;
        //avion = [nombre, foto, pie, detalle];
        avion = [nombre, foto, pie];
        aviones.push(avion);
    }

        for (i = 0; i < aviones.length; i++) {
        
            let titulo = aviones[i][0];
            let imagen = aviones[i][1];
            pie = aviones[i][2];

            
            //bloque += "<figure><img src='"+imagen+"'/></figure>";
           
            bloque += "<figure><h3>"+titulo+"</h3><img src='"+imagen+"'/><figcaption><p>"+pie+"</p></figcaption></figure>";
           //class=\"divPruebaSegundo\"> 
        }
    document.getElementById("fotos").innerHTML = bloque;
}
