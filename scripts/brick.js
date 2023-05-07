const table = document.querySelector('table');

const dimensions = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000,
    stud: 7.8,
    plate: 3.2,
    brick: 9.6,
    minifigure: 40
}


function addToTable(amount,unit) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.classList = 'amount';
    td1.innerText = amount;
    let td2 = document.createElement('td');
    td2.classList = 'unit';
    td2.innerText = unit;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}


function calc() {
    table.innerHTML = "";
    let amount = document.getElementById('amount').value || 1;
    let unit = document.getElementById('unit').value;

    for(let key in dimensions) {
        let val = (amount * (dimensions[unit] * 100) / (dimensions[key] * 100));
        if(val>.1 && val%1>0) val = val.toFixed(2)
        addToTable(val, key)
    }
}