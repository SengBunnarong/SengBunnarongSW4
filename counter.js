var count = 0;
function inc() {
    count +=3;
    document.getElementById ("count").innerText= count;
}

function dec() {
    count -=2;
    document.getElementById ("count").innerText= count;
}

function reset() {
    count= 0;
    document.getElementById ("count").innerText= count;
}