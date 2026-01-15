function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var operador = document.getElementById('operador').value
    var resultado 

    switch (operador){
        case '+':
            resultado = n1 + n2
        break;
        case '-':
            resultado = n1 - n2
        break;
        case '*':
            resultado = n1 * n2
        break;
        case '/':
            if(n2 !== 0){
                resultado = n1 / n2
            }
            else{
                resultado = "não da para dividir por 0"
            }
        default: "operador invalido"
        break;
    }
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado
}
