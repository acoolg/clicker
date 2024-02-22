var click_count = document.getElementById("count")
var pret = document.getElementById("press")

if (getCookie("click") != "") {
    var count = parseFloat(getCookie("click"))
} else {
    var count = 0
    document.cookie = `click=${count}`;
}

if (getCookie("spc") != "") {
    var spc = parseFloat(getCookie("spc"))
} else {
    var spc = 1
    document.cookie = `spc=${spc}`;
}

if (getCookie("sps") != "") {
    var sps = parseFloat(getCookie("sps"))
} else {
    var sps= 0
    document.cookie = `sps=${sps}`;
}

if (getCookie("color") != "") {
    var color = getCookie("color")
} else {
    var color = "white"
    document.cookie = `color=${color}`;
}

click_count.innerHTML = `點了${count}次`
//spc = score per click 

function add(num,cost) {
    if (count >= cost) {
        spc = spc + num
        count = count - cost
    }
}

function addsps(num,cost) {
    if (count >= cost) {
        sps = sps + num
        count = count - cost
    }
}

function clicck() {
    count = count + spc
    click_count.innerHTML = `點了${count}次`
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function runcoin() {
    color = getCookie("color")
    click_count.innerHTML = `點了${count}次`
    document.cookie = `click=${count}`;
    pret.style.backgroundColor = color;
    pret.style.boxShadow = `0 0 2000px 70px ${color}`;
    console.log(sps)
}

setInterval(runcoin, 20); // Call runcoin every 20 milliseconds

function runspc() {
    count = count + sps
}

setInterval(runspc, 1000);
