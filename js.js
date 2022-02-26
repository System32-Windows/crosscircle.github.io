let krzyzyk, kolko, gracz, pola, punkty1, punkty2, kliki = [];

function odlicz() {
    let _button = document.getElementById("przycisk1")
    let dzisiaj = new Date()
    let day = dzisiaj.getDay()
    _button.innerHTML = "Za: " + day + "dni"
    if (day < 5) {
        day--
    }
}



function start() {
    krzyzyk = "<img src='g1.png'>";
    kolko = "<img src='g2.png'>";
    odlicz()
    gracz = 1;
    punkty1 = 0;
    punkty2 = 0;
    for (let i = 1; i <= 9; i++) {;
        kliki[i] = true;
    };
};


function klik(el_klikniety, ktory) {;
    if (kliki[ktory]) {;
        if (gracz == 1) {;
            document.getElementById(el_klikniety).innerHTML = krzyzyk;
            gracz = 2;
        } else {;;
            if (gracz == 2) {;
                document.getElementById(el_klikniety).innerHTML = kolko;
                gracz = 1;
            };
        };
        kliki[ktory] = false;
    };
};

function add(num) {;
    let gr1 = document.getElementById("gracz1");
    let gr2 = document.getElementById("gracz2");
    if (num == 1) {;
        punkty1++;
        gr1.innerHTML = punkty1.toString();
    } else {;
        punkty2++;
        gr2.innerHTML = punkty2.toString();
    };
};

function nowaGra() {;
    for (let i = 1; i <= 9; i++) {;
        kliki[i] = true;
    };
};