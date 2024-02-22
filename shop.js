var click_count = document.getElementById("s");

if (getCookie("click") !== "") {
    var count = parseFloat(getCookie("click"));
} else {
    var count = 0;
    document.cookie = `click=${count}`;
}
if (getCookie("spc") != "") {
    var spc = parseFloat(getCookie("spc"));
} else {
    var spc = 1;
    document.cookie = `spc=${spc}`;
}
if (getCookie("sps") != "") {
    var sps = parseFloat(getCookie("sps"))
} else {
    var sps = 0
    document.cookie = `sps=${sps}`;
}
if (getCookie("color") != "") {
    var color = getCookie("color")
} else {
    var color = "white"
    document.cookie = `color=${color}`;
}

function addsps(num,cost) {
    if (count >= cost) {
        sps += num
        count = count - cost
    }
}

function collor(se) {
    if (count >= 70) {
        color = se
        count -= 70
    }
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

function add(num, cost) {
    if (count >= cost) {
        spc += num;
        count -= cost;
    }
}

function runcoin() {
    click_count.innerHTML = `有${count}元`;
    document.cookie = `click=${count}`;
    document.cookie = `spc=${parseFloat(spc)}`;
    document.cookie = `sps=${parseFloat(sps)}`;
    document.cookie = `color=${color}`;
    console.log()
}

setInterval(runcoin, 20); // Call runcoin every 20 milliseconds