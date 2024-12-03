// Get InputValue in Number Type
function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

// Get InputValue is String Type
function getInputStringValue(id) {
    return document.getElementById(id).value;
}

// Current Balance
function currentBalance() {
    return Number(document.getElementById('balance').innerText);
}

// Clear Input
function clearInput(i, e, o) {
    document.getElementById(i).value = '';
    document.getElementById(e).value = '';
    document.getElementById(o).value = '';
}


// Add Money
document.getElementById('addBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const bankAC = getInputStringValue('bankAC');
    const amount = getInputNumberValue('amount');
    const pin = getInputStringValue('pass');
    const balance = currentBalance();
    if (bankAC.length === 11 && pin === '46790') {
        document.getElementById('balance').innerText = balance + amount;
        document.getElementById('transactionDynamic').innerHTML += `
        <div class="rounded-lg shadow-xl p-4 flex items-center justify-between">
        <!-- Left -->
        <div class="flex items-center gap-2">
            <div>
                <img src="./images/icons/wallet 1.png" alt="money">
            </div>
            <div>
            <h4 class="font-semibold text-base text-[#080808B3]">Add Money</h4>
                <p class="font-normal text-[12px] text-[#080808B3]">${new Date()}</p>
            </div>
        </div>
        <!-- Right -->
        <div>
            <a href="#"><i class="fa-solid fa-ellipsis-vertical text-[#080808B3]"></i></a>
        </div>
        </div>
        `
        clearInput('bankAC', 'amount', 'pass');
    } else {
        alert('Please Check AC Number Or Pin');
        return
    }
})

// Cash Out
document.getElementById('outBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = getInputStringValue('agentNumber');
    const outAmount = getInputNumberValue('outAmount');
    const outPass = getInputStringValue('outPass');
    const balance = currentBalance();
    if (agentNumber.length === 11 && outPass === '46790') {
        if (balance < outAmount) {
            return alert('insufficient balance');
        } else {
            document.getElementById('balance').innerText = balance - outAmount;
            document.getElementById('transactionDynamic').innerHTML += `
            <div class="rounded-lg shadow-xl p-4 flex items-center justify-between">
            <!-- Left -->
            <div class="flex items-center gap-2">
                <div>
                    <img src="./images/icons/wallet 1.png" alt="money">
                </div>
                <div>
                <h4 class="font-semibold text-base text-[#080808B3]">Cash Out</h4>
                    <p class="font-normal text-[12px] text-[#080808B3]">${new Date()}</p>
                </div>
            </div>
            <!-- Right -->
            <div>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical text-[#080808B3]"></i></a>
            </div>
            </div>
            `
            clearInput('agentNumber', 'outAmount', 'outPass');
        }

    } else {
        alert('Please Check AC Number Or Pin');
        return
    }
})

// Transfer Money
document.getElementById('sendMoney').addEventListener('click', function (event) {
    event.preventDefault();
    const acNumber = getInputStringValue('acNumber');
    const tAmount = getInputNumberValue('tAmount');
    const tPass = getInputStringValue('tPass');
    const balance = currentBalance();
    if (acNumber.length === 11 && tPass === '46790') {
        if (balance < tAmount) {
            return alert('insufficient balance');
        } else {
            document.getElementById('balance').innerText = balance - tAmount;
            document.getElementById('transactionDynamic').innerHTML += `
            <div class="rounded-lg shadow-xl p-4 flex items-center justify-between">
            <!-- Left -->
            <div class="flex items-center gap-2">
                <div>
                    <img src="./images/icons/wallet 1.png" alt="money">
                </div>
                <div>
                <h4 class="font-semibold text-base text-[#080808B3]">Transfer Money</h4>
                    <p class="font-normal text-[12px] text-[#080808B3]">${new Date()}</p>
                </div>
            </div>
            <!-- Right -->
            <div>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical text-[#080808B3]"></i></a>
            </div>
            </div>
            `
            clearInput('acNumber', 'tAmount', 'tPass');
        }

    } else {
        alert('Please Check AC Number Or Pin');
        return
    }
})

// Bonus
document.getElementById('addBonus').addEventListener('click', function (event) {
    event.preventDefault();
    const coupon = getInputStringValue('coupon');
    const balance = currentBalance();
    if (coupon === 'IKR03') {
        document.getElementById('balance').innerText = balance + 150;
        document.getElementById('transactionDynamic').innerHTML += `
            <div class="rounded-lg shadow-xl p-4 flex items-center justify-between">
            <!-- Left -->
            <div class="flex items-center gap-2">
                <div>
                    <img src="./images/icons/wallet 1.png" alt="money">
                </div>
                <div>
                <h4 class="font-semibold text-base text-[#080808B3]">Get Bonus</h4>
                    <p class="font-normal text-[12px] text-[#080808B3]">${new Date()}</p>
                </div>
            </div>
            <!-- Right -->
            <div>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical text-[#080808B3]"></i></a>
            </div>
            </div>
            `
        document.getElementById('coupon').value = '';
    } else {
        alert('Invalid coupon');
        return
    }
})

// Pay Bill
document.getElementById('pay').addEventListener('click', function (event) {
    event.preventDefault();
    const billerAC = getInputStringValue('billerAC');
    const bAmount = getInputNumberValue('bAmount');
    const bPass = getInputStringValue('bPass');
    const balance = currentBalance();
    if (billerAC.length === 11 && bPass === '46790') {
        if (bAmount > balance) {
            return alert('insufficient balance');
        } else {
            document.getElementById('balance').innerText = balance - bAmount;
            document.getElementById('transactionDynamic').innerHTML += `
            <div class="rounded-lg shadow-xl p-4 flex items-center justify-between">
            <!-- Left -->
            <div class="flex items-center gap-2">
                <div>
                    <img src="./images/icons/wallet 1.png" alt="money">
                </div>
                <div>
                <h4 class="font-semibold text-base text-[#080808B3]">Transfer Money</h4>
                    <p class="font-normal text-[12px] text-[#080808B3]">${new Date()}</p>
                </div>
            </div>
            <!-- Right -->
            <div>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical text-[#080808B3]"></i></a>
            </div>
            </div>
            `
            clearInput('billerAC', 'bAmount', 'bPass');
        }
    } else {
        alert('Please Check AC Number Or Pin');
        return
    }

})






















// LogOut
function logOut() {
    window.location.href = './index.html';
}