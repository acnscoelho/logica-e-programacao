function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
    
}

function calculaMediaDeDoisNumeros(valor1, valor2) {
    const resultadoDaSomaDeDoisNumeros = valor1 + valor2;
    const resultadoDaMediaDeDoisNumeros = resultadoDaSomaDeDoisNumeros/2;
    return resultadoDaMediaDeDoisNumeros;
}

module.exports = {
    somarDoisNumeros
}