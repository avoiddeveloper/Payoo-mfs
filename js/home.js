// Menu
const menuOne = document.getElementById("menuOne");
const menuTwo = document.getElementById("menuTwo");
const menuThree = document.getElementById("menuThree");
const menuFour = document.getElementById("menuFour");
const menuFive = document.getElementById("menuFive");
const menuSix = document.getElementById("menuSix");
// Buttons
const loginBtn = document.getElementById("loginBtn");
const addBtn = document.getElementById("addBtn");
const outBtn = document.getElementById("outBtn");


// Cash In
menuOne.addEventListener('click', function () {
    // Menu Active
    menuOne.classList.add('active');
    menuTwo.classList.remove('active');
    // Hide previous data
    document.getElementById("heading").classList.add("hidden");
    document.getElementById("historyDetail").classList.add("hidden")
    // Show Add Money Section
    document.getElementById("outSection").classList.add("hidden");
    document.getElementById("addSection").classList.remove("hidden");
})

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const bankAC = document.getElementById("bankAC").value;
    const pass = document.getElementById("pass").value;
    const amount = Number(document.getElementById("amount").value);
    if (bankAC.length === 11 && pass === "46790") {
        let newBalance = Number(document.getElementById("balance").innerText);
        newBalance += amount;
        document.getElementById("balance").innerText = newBalance;

    } else {
        alert("Incorrect pin Or bank AC number");
    }
})


// Cash Out

menuTwo.addEventListener('click', function () {
    // Menu Active
    menuTwo.classList.add('active');
    menuOne.classList.remove('active');
    // Hide previous data
    document.getElementById("heading").classList.add("hidden");
    document.getElementById("historyDetail").classList.add("hidden")
    // Hide Add Money Section  
    document.getElementById("addSection").classList.add("hidden");
    // Show Cash Out Section
    document.getElementById("outSection").classList.remove("hidden");
})


outBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agentNumber").value;
    const outPass = document.getElementById("outPass").value;
    const outAmount = Number(document.getElementById("outAmount").value);
    if (agentNumber.length === 11 && outPass === "46790") {
        let newBalance = Number(document.getElementById("balance").innerText);
        newBalance -= outAmount;
        document.getElementById("balance").innerText = newBalance;

    } else {
        alert("Incorrect pin Or bank AC number");
    }
})


// Logout
function logOut() {
    window.location.href = "index.html";
}

