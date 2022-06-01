function calcola() {
    
    // get the data
    var a = 0.7;
    var u = document.getElementById("u").value;
    var c = document.getElementById("c").value;
    var i = document.getElementById("i").value;
    var s = document.getElementById("s").value;
    var f = document.getElementById("f").value;

    var result = (a*(10-s)*(c+i+u))/(2*(1-Math.sin(f/10)));

    var resultstr = toString(result);

    document.getElementById("result").innerHTML = resultstr;
}