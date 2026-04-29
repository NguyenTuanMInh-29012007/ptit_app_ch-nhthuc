


const user = JSON.parse(localStorage.getItem("currentUser"));

// CHECK NULL (RẤT QUAN TRỌNG)
if (user) {
    document.querySelector(".studentName").innerText = user.name;
    document.querySelector(".studentCode").innerText = user.msv;

    document.querySelector(".studentNameDropdown").innerText = user.name;
    document.querySelector(".studentCodeDropdown").innerText = user.msv;
}

// LẤY ELEMENT
const nick = document.querySelector(".nick");
const menu = document.getElementById("userDropdown");

// CLICK AVATAR → TOGGLE MENU
nick.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
});

// CLICK NGOÀI → ĐÓNG
document.addEventListener("click", function (e) {
    if (!nick.contains(e.target)) {
        menu.classList.remove("active");
    }
});

