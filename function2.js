function calcularMeuLanche(idade, quantidadesLanche ){
    const idadeMaxima=90;

    var idadeRestante=idadeMaxima-idade;
    var lanchesTotal= idadeRestante*365*quantidadesLanche;

    alert("Você precisará de "+lanchesTotal+" para durar até a idade "+idadeMaxima);
}

calcularMeuLanche(40, 20);
calcularMeuLanche(20, 2);
calcularMeuLanche(80, 1);
