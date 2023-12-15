var cookies = document.getElementById('cookies');
var dps = document.getElementById('dps');
var qntdCookies = 0;
var erroVovo = document.getElementById('errorVovo');
var x = 10;
var vovos = document.getElementById('vovos')
var qntdVovos = 0;

function clicar() {
    qntdCookies += 1;
    cookies.innerHTML = 'Cookies: ' + qntdCookies;
}

function vovo() {
    if (qntdCookies >= x) {
        setInterval(() => {
            qntdCookies += 1;
            cookies.innerHTML = 'Cookies: ' + qntdCookies;
        }, 1000);
        qntdCookies -= x
        x *= 1.5
        qntdVovos += 1;
        dps.innerHTML = 'Comprar vovó <br> (' + x + ' cookies)';
        erroVovo.innerHTML = "" 
        vovos.innerHTML = "Você possui " + qntdVovos + " vovós que produzem " + qntdVovos + " cookies por segundo"; 
    }
    else {
        erroVovo.innerHTML = "Você não possui " + x + " cookies."
    }
}

