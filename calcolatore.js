function calcola() {
    a = 0.7;
    u = number(document.getElementById("u").value);
    c = number(document.getElementById("c").value);
    i = number(document.getElementById("i").value);
    s = number(document.getElementById("s").value);
    f = number(document.getElementById("f").value);

    result = (a*(10-s)*(c+i+u))/(2*(1-Math.sin(f/10)));

    resultstr = toString(result);

    document.getElementById("result").innerHTML = resultstr;
}