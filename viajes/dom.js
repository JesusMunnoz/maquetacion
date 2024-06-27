
var arrViajes = [];

function fInfo(){
    let nombre = document.getElementById("name").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let nPersonas = document.getElementById("personas").value;
    let fecha = document.getElementById("fecha").value;

    let obj = {
        nombreObj: nombre,
        origenObj: origen,
        destinoObj: destino,
        personasObj: nPersonas,
        fechaObj: fecha
    }
    arrViajes.push(obj);
    console.log(arrViajes);
}

let nombres =[];
function filtro(){
    
    for (i=0; i<arrViajes.length; i++){
        if(arrViajes[i].destinoObj.toLowerCase() == "galicia" || arrViajes[i].destinoObj.toLowerCase() == "canarias" || arrViajes[i].destinoObj.toLowerCase() == "mallorca"){
            nombres.push(arrViajes[i].nombreObj);
        }
    }
    console.log(nombres);
    //document.getElementById("resultado").innerHTML = nombres;
    console.log(document.getElementById("resultados").innerHTML = nombres);
}


