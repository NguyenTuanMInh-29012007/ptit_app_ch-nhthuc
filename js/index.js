let mocks = [
    {
        id: 1,
        msv: "B25DTCN188",
        name: "Nguyễn Tuấn Minh",
        email: "minhnguyen@gmail.com",
        password: "123456",
    },
    {
        id: 2,
        msv: "B25DTCN190",
        name: "Nguyễn Thành Đạt",
        email: "thanhdat@gmail.com",
        password:"1234567",
    },
    {
        id: 3,
        msv: "B25DTCN286",
        name: "Nguyễn Thành Đạt",
        email: "B25DTCN286",
        password:"11012007"
    }
];

localStorage.setItem("users", JSON.stringify(mocks));
let users = JSON.parse(localStorage.getItem("users"));



let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", () => {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    let userFound = users.find(u => u.email === email && u.password === password);

    if(userFound){
        localStorage.setItem("currentUser", JSON.stringify(userFound));

        window.location.href = "html/trangchu.html";
    }
    
})



