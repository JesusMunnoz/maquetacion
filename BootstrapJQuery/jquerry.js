
let p1 = {
    name : "pantalon gris",
    price : 20
};
let p2 = {
    name : "vestido tunico",
    price : 18
};
let p3 = {
    name : "falda print",
    price : 12
};
let p4 = {
    name : "cardigan",
    price : 22
};
let p5 = {
    name : "minifalda print",
    price : 10
};
let p6 = {
    name : "mono",
    price : 25
};
let p7 = {
    name : "vestido",
    price : 15
};
let p8 = {
    name : "pantalon negro",
    price : 15
};

let carrito = []; //acumulador de objetos
let nombreProductos = []; //acumulador de nombres
let precioProductos = []; //acumulador de precios

jQuery(() => {
    $("#b1").on("click",()=>{
        nombreProductos.push(p1.name);  
        precioProductos.push(p1.price);

        //let nomProduct = p1.name;
        //let priProduct = p1.price;
        //let product = {nomProduct, priProduct};
        //carrito.push(product);
        //nombreProductos.push(nomProduct);  
        //precioProductos.push(priProduct);
    
        //$("#parafo").prepend(priProduct)
        //$("#parafo").prepend(typeof carrito[0])
        //$("#p1").prepend(priProduct)
    });

    $("#b2").on("click",()=>{
        nombreProductos.push(p2.name);  
        precioProductos.push(p2.price);
    });
    
    $("#b3").on("click",()=>{
        nombreProductos.push(p3.name);  
        precioProductos.push(p3.price);
    });

    $("#b4").on("click",()=>{
        nombreProductos.push(p4.name);  
        precioProductos.push(p4.price);
    });

    $("#b5").on("click",()=>{
        nombreProductos.push(p5.name);  
        precioProductos.push(p5.price);
    });

    $("#b6").on("click",()=>{
        nombreProductos.push(p6.name);  
        precioProductos.push(p6.price);
    });

    $("#b7").on("click",()=>{
        nombreProductos.push(p7.name);  
        precioProductos.push(p7.price);
    });

    $("#b8").on("click",()=>{
        nombreProductos.push(p8.name);  
        precioProductos.push(p8.price);
    });

    $("#carro").on("click", ()=>{
        mostrarCarro();
    });

})

function mostrarCarro(){
    
    $("#lista").empty();

    //indica 'producto' - 'precio'

    for (i=0; i<nombreProductos.length; i++){
        $("#lista").append('<li>' +  nombreProductos[i] + ' - ' + precioProductos[i] + '€</li>');
    }

    //suma precios del array 'precioProductos'

    let sumaPrecios = 0;
    for (i=0; i<precioProductos.length; i++){
        let valor = precioProductos[i];
        sumaPrecios += valor;
    }

    $("#total").text('Precio total: '+ sumaPrecios + '€');    
}

/*let str = "20€";
console.log(str);
let newStr = str.substring(0, str.length - 1);
console.log(newStr);*/