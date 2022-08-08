current = "O";
finish = 0;
function old(element) {
    if (element.getAttribute("data-value") != null) {
        alert("Já Preenchido");
    }
    else if (finish) {
        alert("Jogo Finalizado");
    }
    else {
        element.innerHTML = current;
        element.setAttribute("data-value", current)
        if (current == "O") {
            current = "X";
        } else {
            current = "O";
        }

        winner();
    }
}
function winner() {
    var c_1 = document.getElementById("c_1").getAttribute("data-value");
    var c_2 = document.getElementById("c_2").getAttribute("data-value");
    var c_3 = document.getElementById("c_3").getAttribute("data-value");
    var c_4 = document.getElementById("c_4").getAttribute("data-value");
    var c_5 = document.getElementById("c_5").getAttribute("data-value");
    var c_6 = document.getElementById("c_6").getAttribute("data-value");
    var c_7 = document.getElementById("c_7").getAttribute("data-value");
    var c_8 = document.getElementById("c_8").getAttribute("data-value");
    var c_9 = document.getElementById("c_9").getAttribute("data-value");

    if (c_1 != null && c_2 != null && c_3 != null && c_1 == c_2 && c_1 == c_3 ||
        c_4 != null && c_5 != null && c_6 != null && c_4 == c_5 && c_4 == c_6 ||
        c_7 != null && c_8 != null && c_9 != null && c_7 == c_8 && c_7 == c_9 ||
        c_1 != null && c_4 != null && c_7 != null && c_1 == c_4 && c_1 == c_7 ||
        c_2 != null && c_5 != null && c_8 != null && c_2 == c_5 && c_2 == c_8 ||
        c_3 != null && c_6 != null && c_9 != null && c_3 == c_6 && c_3 == c_9 ||
        c_1 != null && c_5 != null && c_9 != null && c_1 == c_5 && c_1 == c_9 ||
        c_3 != null && c_5 != null && c_7 != null && c_3 == c_5 && c_3 == c_7
        ) {
        alert("FIM");
        finish = 1;
    }

    /*if (c_1 != "" && c_2 != "" && c_3 != "" && c_1 == c_2 && c_1 == c_3 ||
        c_4 != "" && c_5 != "" && c_6 != "" && c_4 == c_5 && c_4 == c_6 ||
        c_7 != "" && c_8 != "" && c_9 != "" && c_7 == c_8 && c_7 == c_9 ||
        c_1 != "" && c_4 != "" && c_7 != "" && c_1 == c_4 && c_1 == c_7 ||
        c_2 != "" && c_5 != "" && c_8 != "" && c_2 == c_5 && c_2 == c_8 ||
        c_3 != "" && c_6 != "" && c_9 != "" && c_3 == c_6 && c_3 == c_9 ||
        c_1 != "" && c_5 != "" && c_9 != "" && c_1 == c_5 && c_1 == c_9 ||
        c_3 != "" && c_5 != "" && c_7 != "" && c_3 == c_5 && c_3 == c_7
        ) {
        alert("FIM");
        finish = 1;
    }*/

    /*//Verificação Horizontal
    var tics = document.getElementsByClassName("tic");
    for (let i = 0; i < tics.length; i++) {
        let tacs = tics[i].children;
        let val = tacs[0].getAttribute("data-value");
        for (let x = 0; x < tacs.length; x++) {
            if (tacs[x].getAttribute("data-value") != "" && tacs[x].getAttribute("data-value") == val && x == tacs.length - 1) {
                finish = 1;
                alert("Vencedor: " + val);
                break;
            }
            else{
                break;
            }
        }
    }

    //Verificação Vertical
    for (let i = 0; i < tics.length; i++) {
        let tacs = tics[0].children;
        let val = tacs[i].innerHTML;
        for (let x = 0; x < tacs.length; x++) {
            if (tacs[x].innerHTML != "" && tacs[x].innerHTML == val && x == tacs.length - 1) {
                finish = 1;
                alert("Vencedor: " + val);
            }
        }
    }*/
}
function reset() {
    var tacs = document.getElementsByClassName("tac");
    for (let i = 0; i < tacs.length; i++) {
        tacs[i].removeAttribute("data-value");
        tacs[i].innerHTML = "";
    }
    current = "O";
    finish = 0;
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
