let btn = document.getElementById("toggleBtn");
let body = document.body;

btn.addEventListener("click", function () {

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-warning");
    } else {
        btn.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-dark");
    }
});