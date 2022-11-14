const pi=3.14;
function calcularCircuferencia(raio){
    let circuferencia=2*pi*raio;
    alert("A circuferência é "+circuferencia);
}

function calcularAreaCirculo(raio){
    let areaCirculo = (raio*raio)*pi;
    alert("A área é "+areaCirculo);
}

calcularCircuferencia(27);
calcularCircuferencia(34);
calcularCircuferencia(9);

calcularAreaCirculo(3);
calcularAreaCirculo(5);
calcularAreaCirculo(10);