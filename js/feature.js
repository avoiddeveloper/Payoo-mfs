function hideOtherContent() {
    document.getElementById("addSection").classList.add("hidden")
    document.getElementById("outSection").classList.add("hidden")
    document.getElementById("moneyTransfer").classList.add("hidden")
    document.getElementById("bonus").classList.add("hidden")
    document.getElementById("payBill").classList.add("hidden")
    document.getElementById("transaction").classList.add("hidden")
}

function deActive() {
    document.getElementById('menuOne').classList.remove('active')
    document.getElementById('menuTwo').classList.remove('active')
    document.getElementById('menuThree').classList.remove('active')
    document.getElementById('menuFour').classList.remove('active')
    document.getElementById('menuFive').classList.remove('active')
    document.getElementById('menuSix').classList.remove('active')
}

function hideHeader() {
    document.getElementById('heading').classList.add('hidden');
}

// Menu - 1
document.getElementById('menuOne').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('addSection').classList.remove('hidden');
});

// Menu - 2
document.getElementById('menuTwo').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('outSection').classList.remove('hidden');
});

// Menu - 3
document.getElementById('menuThree').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('moneyTransfer').classList.remove('hidden');
});

// Menu - 4
document.getElementById('menuFour').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('bonus').classList.remove('hidden');
});

// Menu - 5
document.getElementById('menuFive').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('payBill').classList.remove('hidden');
});

// Menu - 6
document.getElementById('menuSix').addEventListener('click', function (event) {
    deActive();
    event.target.classList.add('active');
    hideHeader();
    hideOtherContent();
    document.getElementById('transaction').classList.remove('hidden');
});