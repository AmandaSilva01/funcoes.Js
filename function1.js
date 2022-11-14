function calcularIdadePet(nome, idade, especie, taxaConvercao){
    let idadeConvertida=idade*taxaConvercao;
    alert(nome+" tem "+idadeConvertida+" anos humanos! Um(a) " + especie + " tem uma relação de " + taxaConvercao+" anos de "+especie+" para cada 1 ano humano.")
}

calcularIdadePet("eithor", 8, "cachorro", 7);
calcularIdadePet("Mel", 3, "gato", 15);
calcularIdadePet("Perry", 2, "hamster", 30);
