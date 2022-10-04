const age = document.getElementById('age');
const ageAvg = document.getElementById('ageAvg');
const total = document.getElementById('total');
const totalDiscount = document.getElementById('totalDiscount');
const clearBtnn = document.getElementById('clear');
const ticketPrice = 30.00;

var ticketDiscount = 0
var rowChanger = 1;
var ageSum = 0;
var discountSum = 0;
var people = 1;


function add() {
    // verification
    if (age.value == '') {
        return alert('Preencha o campo "idade"');
    }
    clearBtnn.hidden = people >= 5 ? false : true;
    if (people > 5) {
        return alert('Limite atingido');
    }


    let ageField = document.getElementById(String(rowChanger));
    rowChanger++;
    let valueField = document.getElementById(String(rowChanger));
    rowChanger++;
    let discountField = document.getElementById(String(rowChanger));
    rowChanger++;

    ageField.textContent = age.value;
    valueField.textContent = 'R$' + ticketPrice.toFixed(2);
    if (age.value < 18) {
        ticketDiscount = ticketPrice * 0.5;
    } else {
        ticketDiscount = ticketPrice * 0.1;
    }
    discountField.textContent = 'R$' + (ticketPrice - ticketDiscount).toFixed(2);

    ageSum += Number(age.value);
    ageAvg.textContent = ageSum / people;
    total.textContent = 'R$' + (ticketPrice * people).toFixed(2);
    discountSum += ticketPrice - ticketDiscount;
    totalDiscount.textContent = 'R$' + discountSum.toFixed(2);

    people += 1;
    age.value = '';
}

function clearPage() {
    window.location.reload();
}