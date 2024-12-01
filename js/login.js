const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {

    // Get Value Of Input  Field
    const number = document.getElementById("number").value;
    const pass = document.getElementById("pass").value;

    // Stop Default Behavior
    event.preventDefault();

    if(number === "01870038309" && pass === "46790"){
        window.location.href = "./home.html"
    }else {
        alert("Wrong Number Or Password");
    }
});