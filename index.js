function start() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/start.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function stop() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/stop.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function listPod() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/listpod.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function listDeploy() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/listdeploy.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function listService() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/listsvc.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function delAll() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/delall.py", true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function launchPod() {

    var i = document.getElementById("podname").value;
    var j = document.getElementById("imagename").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://192.168.0.147/cgi-bin/launchpod.py?podname= ${i}&pimage=${j}`, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function launchDeploy() {

    var k = document.getElementById("depname").value;
    var l = document.getElementById("depimage").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://192.168.0.147/cgi-bin/launchdeploy.py?deployname= ${k}&dimage=${l}`, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function delPod() {

    var m = document.getElementById("delpod").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/delpod.py?del_podname=" + m, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.response;
    }
}

function delDeploy() {

    var n = document.getElementById("expdep").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/deldeploy.py?del_deployname=" + n, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.response;
    }
}

function scaleReplica() {

    var o = document.getElementById("repdep").value;
    var p = document.getElementById("rep_no").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://192.168.0.147/cgi-bin/scalereplica.py?deploy_name= ${o}&replicas=${p}`, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

function expose() {

    var q = document.getElementById("expdep").value

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.147/cgi-bin/expose.py?del_deployname=" + q, true);
    xhr.send();

    xhr.onload = async() => {
        document.getElementById("output").innerHTML = xhr.responseText;
    }
}

