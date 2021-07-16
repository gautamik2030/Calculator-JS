function Operands(val) {
    document.getElementById("op").value += val
}

//function that evaluates the digit and return result
function Result() {
    let x = document.getElementById("op").value
    let y = eval(x)
    document.getElementById("op").value = y
}

//function that clear the display
function clr() {
    document.getElementById("op").value = ""
}