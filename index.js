const navBar = document.querySelector(".nav-bar");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");
const slides = document.querySelectorAll(".slide");

open.addEventListener("click", () => {
    navBar.classList.remove("hide");
    navBar.classList.add("show");
});

close.addEventListener("click", () => {
    navBar.classList.remove("show");
    navBar.classList.add("hide");
});

let i = 1;

function changeSlide(i) {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-100*i}%)`;
    });
}


nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (i === 3) {
            i = 0;
            changeSlide(i);
        } else {
            changeSlide(i);
            i++;
        }
    });
});


prevButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (i === 1 || i === 0) {
            changeSlide(2);
            i = 3;
        } else {
            i--;
            changeSlide(i - 1);
            console.log(i);
        }

    });
});