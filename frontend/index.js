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
    ticketForm.reset();
});





const form = document.getElementById("container-form");
const ticketForm = document.getElementById("ticket-form");


ticketForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const popupObject = {
    name: document.getElementById("popup-name").value,
    email: document.getElementById("popup-email").value,
    count: document.getElementById("popup-count").value,
    city: document.getElementById("popup-city").value
};

    const url = "http://127.0.0.1:5000/buy-ticket";

    fetch(url, {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(popupObject)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById("shadow").style.display = "none";
                ticketForm.reset();
            }
        })
        .catch(error => {
            console.error("Помилка запиту:", error);
            alert("Помилка з'єднання з сервером.");
        });
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const containerForm = {
        name: document.getElementById("name").value,
        email: document.getElementById("emailadress").value,
        textArea: document.getElementById("message").value
    }

    const url = "http://127.0.0.1:5000/contact";

    fetch(url, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(containerForm)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                document.getElementById("shadow").style.display = "none";
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