current = "O";
function old(element) {
    if (element.innerHTML != "") {
        alert("Já Preenchido");
    } 
    else {
        element.innerHTML = current;
        if (current == "O") {
            current = "X";
        } else {
            current = "O";
        }
        winner();
    }
}
function winner() {
    var c_1 = document.getElementById("c_1").innerHTML;
    var c_2 = document.getElementById("c_2").innerHTML;
    var c_3 = document.getElementById("c_3").innerHTML;
    var c_4 = document.getElementById("c_4").innerHTML;
    var c_5 = document.getElementById("c_5").innerHTML;
    var c_6 = document.getElementById("c_6").innerHTML;
    var c_7 = document.getElementById("c_7").innerHTML;
    var c_8 = document.getElementById("c_8").innerHTML;
    var c_9 = document.getElementById("c_9").innerHTML;

    if (c_1 != "" && c_2 != "" && c_3 != "" && c_1 == c_2 && c_1 == c_3 ||
        c_4 != "" && c_5 != "" && c_6 != "" && c_4 == c_5 && c_4 == c_6 ||
        c_7 != "" && c_8 != "" && c_9 != "" && c_7 == c_8 && c_7 == c_9 ||
        c_1 != "" && c_4 != "" && c_7 != "" && c_1 == c_4 && c_1 == c_7 ||
        c_2 != "" && c_5 != "" && c_8 != "" && c_2 == c_5 && c_2 == c_8 ||
        c_3 != "" && c_6 != "" && c_9 != "" && c_3 == c_6 && c_3 == c_9 ||
        c_1 != "" && c_5 != "" && c_9 != "" && c_1 == c_5 && c_1 == c_9 ||
        c_3 != "" && c_5 != "" && c_7 != "" && c_3 == c_5 && c_3 == c_7
        ) {
        alert("FIM");
    }

    //Verificação Horizontal
    /*var tics = document.getElementsByClassName("tic");
    for (let i = 0; i < tics.length; i++) {
        
    }*/
}
function reset() {
    var tacs = document.getElementsByClassName("tac");
    for (let i = 0; i < tacs.length; i++) {
        tacs[i].innerHTML = "";
    }
    current = "O";
    alert("Jogo Reiniciado");
}


//Teste Antigo
/*current = 1;
function old(element) {

    if (element.getAttribute("data-value") != null) {
        alert("Esse bloco já está preenchido");
    } else {
        element.setAttribute("data-value", current)
        if (current) {
            element.innerHTML = 'X';
            current = 0;
        } else {
            element.innerHTML = 'O';
            current = 1;
        }
    }
    
}
function reset() {
    var tacs = document.getElementsByClassName("tac");
    for (let i = 0; i < tacs.length; i++) {
        tacs[i].removeAttribute("data-value");
        tacs[i].innerHTML = "";
    }
    current = 1;
    alert("Jogo Reiniciado");
}*/
