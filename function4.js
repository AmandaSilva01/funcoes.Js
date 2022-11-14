function converterFahrenheitCelsius(){
    let f=parseFloat(prompt("Qual a temperatura em Fahrenheit?"));
    let c=(f-32)/1.8;
    alert(f+"°F é igual a "+c+"°C");
}

function converterCelsiusFahrenheit(){
    let c=parseFloat(prompt("Qual a temperatura em Celsius?"));
    let f=c*1.8+32;
    alert(c+"°C é igual a "+f+"°F");
}

converterFahrenheitCelsius();
converterCelsiusFahrenheit();