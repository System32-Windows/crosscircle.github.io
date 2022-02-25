let krzyzyk, kolko, gracz, pola, punkty1, punkty2, kliki = [];

function start() {
    krzyzyk = "<img src='g1.png'>"
    kolko = "<img src='g2.png'>"
    gracz = 1;
    punkty1 = 0;
    punkty2 = 0;
    for (let i = 1; i <= 9; i++) {
        kliki[i] = true
    }
};


function klik(el_klikniety, ktory) {;
    if (kliki[ktory]) {
        if (gracz == 1) {
            document.getElementById(el_klikniety).innerHTML = krzyzyk
            gracz = 2
        } else {
            if (gracz == 2) {
                document.getElementById(el_klikniety).innerHTML = kolko
                gracz = 1
            }
        }
        kliki[ktory] = false
    }
};