function calcola() {
    a = 0.7;
    u = Number(document.getElementById("u").value);
    c = Number(document.getElementById("c").value);
    i = Number(document.getElementById("i").value);
    s = Number(document.getElementById("s").value);
    f = Number(document.getElementById("f").value);

    result = (a*(10-s)*(c+i+u))/(2*(1-Math.sin(f/10)));

    resultstr = toString(result);

    document.getElementById("result").innerHTML = resultstr;
}