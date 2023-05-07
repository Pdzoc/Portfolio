let ctx = document.querySelector("canvas").getContext("2d");
let angleSection = document.querySelector('#angle-section');
let angle = 0;

function drawCircle() {
    if (angle < 1 || angle > 360) return;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 100);
    ctx.arc(100, 100, 80, 0, Math.PI * ((360 - angle) || 360) / 180, true);
    ctx.lineWidth = 3;
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.stroke();
}

function clear() {
    angleSection.innerHTML = "";
    ctx.clearRect(0, 0, 200, 200);
}

function compute() {
    clear();
    angle = +document.querySelector('#angle').value;
    let circleData = {
        'angle': angle,
        'rest': 360 - angle,
    }
    drawCircle();
    angleSection.innerHTML = "";
    drawTable(circleData)
}

document.querySelector('#comp').addEventListener('click', compute)

function drawTable(obj) {
    if (obj.angle < 1 || obj.angle > 360) {
        angleSection.innerText = "Invalid value";
        return;
    }
    let table = document.createElement('table');
    for (let i in obj) {
        table.innerHTML += `<tr><td>${i}</td><td>${obj[i]}</td></tr>`
    }
    angleSection.appendChild(table)
}
