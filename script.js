/* global document, alert, window */
var buttons = document.getElementsByClassName("button"),
    refresh = document.getElementById("refresh"),
    i = 0,
    c = 0,
    empty = [];
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        "use strict";
        writex(this);
        // ----------- Writing inside the button ------------
        if (win() !== undefined) {
           alert("Player " + win() + " wins!!");
        }
        // ----------- Calculating the winner -------------
        empty = [];
        for (i = 0; i < buttons.length; i++) {
            if (buttons[i].innerHTML === "") {
                empty.push(buttons[i]);
            }
        }
        // --------- Filling empty-buttons array
        play();
        // ----------- Computer Turn ---------------
        if (win() !== undefined) {
            alert("Player " + win() + " wins!!");
        }
        // ----------- Calculating the winner -------------
    };
}
// -------- DETERMINING THE WINNER
function win() {
    "use strict";
    for (i = 0; i <= 2; i++) {
        if (equal(buttons[i].innerHTML, buttons[i + 3].innerHTML, buttons[i + 6].innerHTML)) {
            return buttons[i].innerHTML;
        }
    }
    for (i = 0; i <= 6; i += 3) {
        if (equal(buttons[i].innerHTML, buttons[i + 1].innerHTML, buttons[i + 2].innerHTML)) {
            return buttons[i].innerHTML;
        }
    }
    if (equal(buttons[0].innerHTML, buttons[4].innerHTML, buttons[8].innerHTML)) {
        return buttons[0].innerHTML;
    } else if (equal(buttons[2].innerHTML, buttons[4].innerHTML,
                     buttons[6].innerHTML)) {
        return buttons[2].innerHTML;
    }
}
// -------- EQUALITY FUNCTION
function equal(a, b, c) {
    "use strict";
    if (a === b && b === c && a != "" && b != "" && c != "") {
        return true;
    }
}
// -------- WRITING-X FUNCTION
function writex(a) {
    "use strict";
    a.innerHTML = "X";
    a.disabled = true;
    a.className = "button red";
}
// ---------- WRITING-O FUNCTION
function writeo(a) {
    a.innerHTML = "O";
    a.disabled = true;
}
// ---------- COMPUTER PLAY FUNCTION
function play() {
    "use strict";
    var x = [],
        o = [],
        e = [];
    // ------------- DEATH ALGORITHM
    for (var i = 0; i <= 2; i++) {
        for (var c = i; c <= i + 6; c += 3) {
            if (buttons[c].innerHTML === "O") {
                o.push(c);
            } else if (buttons[c].innerHTML === "X") {
                x.push(c);
            } else {
                e.push(c);
            }
        }
        if (e.length === 1 && o.length === 2) {
             writeo(buttons[e[0]]);
            return e[0];
        }
        x = [];
        o = [];
        e = [];
    }
    for (i = 0; i <= 6; i += 3) {
        for (c = i; c <= i + 2; c++) {
            if (buttons[c].innerHTML === "O") {
                o.push(c);
            } else if (buttons[c].innerHTML === "X") {
                x.push(c);
            } else {
                e.push(c);
            }
        }
        if (e.length === 1 && o.length === 2) {
            writeo(buttons[e[0]]);
            return e[0];
        }
        x = [];
        o = [];
        e = [];
    }
    for (c = 0; c <= 8; c += 4) {
        if (buttons[c].innerHTML === "O") {
            o.push(c);
        } else if (buttons[c].innerHTML === "X") {
            x.push(c);
        } else {
            e.push(c);
        }
    }
    if (e.length === 1 && o.length === 2) {
        writeo(buttons[e[0]]);
        return e[0];
    }
    x = [];
    o = [];
    e = [];
    for (c = 2; c <= 6; c += 2) {
        if (buttons[c].innerHTML === "O") {
            o.push(c);
        } else if (buttons[c].innerHTML === "X") {
            x.push(c);
        } else {
            e.push(c);
        }
    }
    if (e.length === 1 && o.length === 2) {
        writeo(buttons[e[0]]);
        return e[0];
    }
    
    x = [];
    o = [];
    e = [];
    // SURVIVAL ALGORITHM
    for (var i = 0; i <= 2; i++) {
        for (var c = i; c <= i + 6; c += 3) {
            if (buttons[c].innerHTML === "O") {
                o.push(c);
            } else if (buttons[c].innerHTML === "X") {
                x.push(c);
            } else {
                e.push(c);
            }
        }
        if (e.length === 1 && x.length === 2) {
            writeo(buttons[e[0]]);
            return e[0];
        }
        x = [];
        o = [];
        e = [];
    }
    for (i = 0; i <= 6; i += 3) {
        for (c = i; c <= i + 2; c++) {
            if (buttons[c].innerHTML === "O") {
                o.push(c);
            } else if (buttons[c].innerHTML === "X") {
                x.push(c);
            } else {
                e.push(c);
            }
        }
        if (e.length === 1 && x.length === 2) {
        writeo(buttons[e[0]]);
        return e[0];
            }
        x = [];
        o = [];
        e = [];
    }
    for (c = 0; c <= 8; c += 4) {
        if (buttons[c].innerHTML === "O") {
            o.push(c);
        } else if (buttons[c].innerHTML === "X") {
            x.push(c);
        } else {
            e.push(c);
        }
    }
    if (e.length === 1 && x.length === 2) {
        writeo(buttons[e[0]]);
        return e[0];
    }
    x = [];
    o = [];
    e = [];
    for (c = 2; c <= 6; c += 2) {
        if (buttons[c].innerHTML === "O") {
            o.push(c);
        } else if (buttons[c].innerHTML === "X") {
            x.push(c);
        } else {
            e.push(c);
        }
    }
    if (e.length === 1 && x.length === 2) {
        writeo(buttons[e[0]]);
        return e[0];
    }
    
    
    // FILLING-THE-FIFTH-BUTTON ALGORITHM
    if (buttons[4].innerHTML === "") {
        writeo(buttons[4]);
        return 5;
    } else {
        
    }
    // RANDOM ALGORITHM
    writeo(random(empty));
}
// ------- CHOOSING RANDOMLY FUNCTION
function random(a) {
    "use strict";
    var r = Math.random(),
        d = 1 / a.length;
    
    for (var i = 1; i <= a.length; i++) {
        if (r < i * d) {
            return a[i - 1];
        }
    }
}
// --------- RELOAD FUNCTION
refresh.onclick = function reload() {
    "use strict";
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
        buttons[i].className = "button";
        buttons[i].disabled = false;
        empty = [];
    }
}