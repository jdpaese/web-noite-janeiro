function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    //console.log(typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2
}
function menos(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp1 = document.getElementById("resposta1")
    //console.log(typeof numero1, typeof numero2)
    resp1.textContent = numero3 - numero4
}
function vezes(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp2 = document.getElementById("resposta2")
    //console.log(typeof numero1, typeof numero2)
    resp2.textContent = numero5 * numero6
}
function divi(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resp3 = document.getElementById("resposta3")
    //console.log(typeof numero1, typeof numero2)
    if( numero8 === 0){
        resp3.textContent = "não dá pra faze"
    }
    else{
    resp3.textContent = numero7 / numero8
    }
}