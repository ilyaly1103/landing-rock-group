const links = document.querySelectorAll(".nav-link");

links.forEach((element) => {
    element.addEventListener("click", function (event) {
        event.preventDefault();

        const linkId = element.getAttribute("data-target");
        const sectionId = document.getElementById(linkId);

        sectionId.scrollIntoView({ behavior: "smooth" });

        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        navBurger.classList.remove('active');

        document.body.classList.remove("no-scroll");
    });
});




const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.for-burger-menu');
const navBurger = document.querySelector(".nav-burger");

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    navBurger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});


const table = document.getElementById("section-table");
const buttonToBuyTicket = document.getElementById("btn-section-table");
const closeButton = document.getElementById("close-btn");
const ticketButtons = document.querySelectorAll(".btn-buy-ticket");

buttonToBuyTicket.addEventListener("click", () => {
    table.scrollIntoView({ behavior: "smooth" });
});

ticketButtons.forEach((element) => {
    element.addEventListener("click", () => {
        document.getElementById("shadow").style.display = "flex";
    });
});


closeButton.addEventListener("click", () => {
    document.getElementById("shadow").style.display = "none";
    document.body.classList.remove("no-scroll");
    ticketForm.reset();
});





const form = document.getElementById("container-form");
const ticketForm = document.getElementById("ticket-form");

ticketForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const data = new FormData(ticketForm);
    const params = new URLSearchParams(data).toString();
    const url = `https://dummyjson.com/posts?${params}`;

    fetch(url, {
        method: "GET"
    })
        .then(response => {
            if (response.ok) {
                console.log(url);
                document.getElementById("shadow").style.display = "none";
                ticketForm.reset();
            }
            else {
                alert("Щось пішло не так");
            }
        })
        .catch(error => {
            console.error("Помилка запиту:", error);
            alert("Помилка з'єднання з сервером.");
        });
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const data = new FormData(form);
    const params = new URLSearchParams(data).toString();
    const url = `https://dummyjson.com/posts?${params}`;

    fetch(url, {
        method: "GET"
    })
        .then(response => {
            if (response.ok) {
                console.log(url);
                form.reset();
            }
            else {
                alert("Щось пішло не так");
            }
        })
        .catch(error => {
            console.error("Помилка запиту:", error);
            alert("Помилка з'єднання з сервером.");
        });
});