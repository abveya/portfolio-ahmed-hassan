let themeToggleButton = document.getElementById('theme-toggle-button');
let html = document.querySelector('html');
let sections = document.querySelectorAll("body section");
let settingsToggle = document.getElementById('settings-toggle');
let links = document.querySelectorAll('.nav-links a');
let portfolioItems = document.querySelectorAll('.portfolio-item');
let portfolioItemsArr = Array.from(portfolioItems);
let portfolioFilter = document.querySelectorAll('.portfolio-filter');
let fonts = document.querySelectorAll(".font-option");
let carouselIndicator = document.querySelectorAll("button.carousel-indicator")
let sidebar = document.getElementById("settings-sidebar");
let closeSidebar = document.getElementById("close-settings")
let themeColors = document.getElementById("theme-colors-grid")
let scrollBtn = document.getElementById("scroll-to-top");
let testimonialsCarousel = document.getElementById("testimonials-carousel")
let prevBtn = document.getElementById("prev-testimonial")
let nextBtn = document.getElementById("next-testimonial");
let contactForm = document.querySelector("form");
let nameInput = document.getElementById("fullName");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let detailsInput = document.getElementById("projectDetails");
let resetBtn = document.getElementById("reset-settings")
carouselIndicator = Array.from(carouselIndicator);

fonts = Array.from(fonts);
links = Array.from(links);
sections = Array.from(sections);


let colorPlate = [
    {
        title: "Purple Blue",
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#a855f7"
    },
    {
        title: "Pink Orange",
        primary: "#ec4899",
        secondary: "#f97316",
        accent: "#fb923c"
    },
    {
        title: "Green Emerald",
        primary: "#10b981",
        secondary: "#059669",
        accent: "#34d399"
    },
    {
        title: "Blue Cyan",
        primary: "#3b82f6",
        secondary: "#06b6d4",
        accent: "#22d3ee"
    },
    {
        title: "Red Rose",
        primary: "#ef4444",
        secondary: "#f43f5e",
        accent: "#fb7185"
    },
    {
        title: "Amber Orange",
        primary: "#f59e0b",
        secondary: "#ea580c",
        accent: "#fbbf24"
    }
];

//nav active

window.addEventListener("scroll", function () {
    let index = -1;

    for (let i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 200) {
            for (let j = 0; j < links.length; j++) {
                if (links[j].getAttribute("href") == '#' + sections[i].id) {
                    index = j;
                    break;
                } else {
                    index = -1;
                }
            }
        }
    }
    for (let j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
    }
    if (index !== -1) {
        links[index].classList.add("active");
    }
});

//reset setting

resetBtn.addEventListener("click", function () {
    document.body.classList.add("font-tajawal");
    for (let j = 0; j < fonts.length; j++) {
        fonts[j].classList.remove("active");
    }
    fonts[1].classList.add("active")
    html.style.cssText = `--color-primary: ${colorPlate[0].primary}; --color-secondary: ${colorPlate[0].secondary}; --color-accent: ${colorPlate[0].accent};`
    sidebar.classList.add("translate-x-full");
    settingsToggle.style.right = "0px"
})


//change fonts

for (let i = 0; i < fonts.length; i++) {
    if (fonts[i].getAttribute("data-font") == "tajawal") {
        fonts[i].classList.add("active")
        document.body.classList.add("font-tajawal")
    } else {
        fonts[i].classList.remove("active")
    }
    fonts[i].addEventListener("click", function (e) {
        for (let j = 0; j < fonts.length; j++) {
            fonts[j].classList.remove("active");
        }
        e.target.classList.add("active");

        let mainFont = e.target.getAttribute("data-font");
        document.body.classList.remove(
            "font-tajawal",
            "font-cairo",
            "font-alexandria"
        );
        document.body.classList.add("font-" + mainFont)
    })
}

//change color
for (let i = 0; i < colorPlate.length; i++) {

    let Btn = document.createElement("button");

    Btn.setAttribute("class", "w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm")
    Btn.setAttribute("title", `${colorPlate[i].title}`)
    Btn.style.background = `linear-gradient(135deg, ${colorPlate[i].primary}, ${colorPlate[i].secondary})`

    themeColors.append(Btn)
}

let colorsBtn = document.querySelectorAll("#theme-colors-grid button");
colorsBtn = Array.from(colorsBtn);

for (let i = 0; i < colorsBtn.length; i++) {
    colorsBtn[i].addEventListener("click", function () {
        html.style.cssText = `--color-primary: ${colorPlate[i].primary}; --color-secondary: ${colorPlate[i].secondary}; --color-accent: ${colorPlate[i].accent};`
    })
}

//setting toggle
themeToggleButton.addEventListener("click", function () {
    html.classList.toggle("dark");
    sidebar.classList.add("translate-x-full");
    settingsToggle.style.right = "0px"

});

settingsToggle.addEventListener("click", function () {
    sidebar.classList.remove("translate-x-full");
    settingsToggle.style.right = "320px"
})

closeSidebar.addEventListener("click", function () {
    sidebar.classList.add("translate-x-full");
    settingsToggle.style.right = "0px"
});

//scroll to top

window.addEventListener("scroll", function (e) {
    if (window.scrollY > 390) {
        scrollBtn.classList.remove("invisible")
        scrollBtn.classList.remove("opacity-0")
        scrollBtn.classList.add("visible")
    } if (window.scrollY < 390) {
        scrollBtn.classList.remove("visible")
        scrollBtn.classList.add("invisible")
        scrollBtn.classList.add("opacity-0")
    }
})

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


//nav and taps logic

for (let i = 0; i < portfolioItemsArr.length; i++) {
    portfolioItemsArr[i].style.transition = "opacity 0.3s ease, transform 0.3s ease";
}
for (let i = 0; i < portfolioFilter.length; i++) {
    portfolioFilter[i].addEventListener("click", function (e) {

        for (let j = 0; j < portfolioFilter.length; j++) {
            portfolioFilter[j].classList.remove("active");
        }

        e.target.classList.add("active");

        for (let j = 0; j < portfolioItemsArr.length; j++) {

            if (
                e.target.getAttribute("data-filter") == portfolioItemsArr[j].getAttribute("data-category") ||
                e.target.getAttribute("data-filter") == "all"
            ) {
                setTimeout(function () {

                    portfolioItemsArr[j].style.display = "block";

                    setTimeout(function () {
                        portfolioItemsArr[j].style.opacity = "1";
                        portfolioItemsArr[j].style.transform = "scale(1)";
                    }, 10);
                }, 310)
            }
            portfolioItemsArr[j].style.opacity = "0";
            portfolioItemsArr[j].style.transform = "scale(0.8)";

            setTimeout(function () {
                portfolioItemsArr[j].style.display = "none";
            }, 300);
        }
    });
}


//slider logic
let x = 0;
testimonialsCarousel.style.translate = `${x}%`

nextBtn.addEventListener("click", function () {
    if (x == 3) {
        x = 0;
    } else {
        x++;
    }
    update()
});

prevBtn.addEventListener("click", function () {
    if (x == 0) {
        x = 3
    }
    else {
        x--;
    }
    update()

});

carouselIndicator[0].classList.add("active");

function update() {
    for (let i = 0; i < carouselIndicator.length; i++) {
        carouselIndicator[i].classList.remove("active");
    }
    carouselIndicator[x].classList.add("active");
    testimonialsCarousel.style.translate = `${x * 33.333}%`
}


for (let i = 0; i < carouselIndicator.length; i++) {

    carouselIndicator[i].addEventListener("click", function (e) {
        x = i;
        update()
    })
}

//select logic
let customSelectType = document.querySelector(".custom-select[data-name='project-type']");
let customOptionsType = document.querySelector(".custom-options[aria-labelledby='project-type-label']")
let customOptionType = document.querySelectorAll(".custom-options[aria-labelledby='project-type-label'] .custom-option")
let customSelectIconType = document.querySelector(".custom-select[data-name='project-type'] i")
let selectedTextType = document.querySelector(".custom-select[data-name='project-type'] .selected-text")

let customSelectBudget = document.querySelector(".custom-select[data-name='budget']");
let customOptionsBudget = document.querySelector(".custom-options[aria-labelledby='budget-label']")
let customOptionBudget = document.querySelectorAll(".custom-options[aria-labelledby='budget-label'] .custom-option")
let customSelectIconBudget = document.querySelector(".custom-select[data-name='budget'] i")
let selectedTextBudget = document.querySelector(".custom-select[data-name='budget'] .selected-text")

customSelectIconType.style.transform = "rotate(0deg)"
function selectActionType() {
    customOptionsType.classList.toggle("hidden")

    if (customOptionsType.classList.contains("hidden")) {
        customSelectIconType.style.transform = "rotate(0deg)"
    } else {
        customSelectIconType.style.transform = "rotate(180deg)"
    }
}
customSelectType.addEventListener("click", function () {
    selectActionType();
})
for (let i = 0; i < customOptionType.length; i++) {
    customOptionType[i].addEventListener("click", function () {
        selectedTextType.innerHTML = customOptionType[i].getAttribute("data-value");
        selectedTextType.classList.replace("dark:text-slate-400", "dark:text-white")
        selectActionType();
    })
}

customSelectIconBudget.style.transform = "rotate(0deg)"
function selectActionBudget() {
    customOptionsBudget.classList.toggle("hidden")

    if (customOptionsBudget.classList.contains("hidden")) {
        customSelectIconBudget.style.transform = "rotate(0deg)"
    } else {
        customSelectIconBudget.style.transform = "rotate(180deg)"
    }
}
customSelectBudget.addEventListener("click", function () {
    selectActionBudget();
})
for (let i = 0; i < customOptionBudget.length; i++) {
    customOptionBudget[i].addEventListener("click", function () {
        selectedTextBudget.innerHTML = customOptionBudget[i].getAttribute("data-value");
        selectedTextBudget.classList.replace("dark:text-slate-400", "dark:text-white")
        selectActionBudget();
    })
}

function closeSelectType() {
    customOptionsType.classList.add("hidden");
    customSelectIconType.style.transform = "rotate(0deg)";
}

function closeSelectBudget() {
    customOptionsBudget.classList.add("hidden");
    customSelectIconBudget.style.transform = "rotate(0deg)";
}

window.addEventListener("click", function (e) {
    if (!customSelectType.contains(e.target)) {
        closeSelectType()
    }
    if (!customSelectBudget.contains(e.target)) {
        closeSelectBudget()
    }
})


//validation & form logic
function validation(input, msg) {
    let msgElement = document.getElementById(msg);

    let regex = {
        fullName: /^[A-Za-z\u0600-\u06FF\s]{2,50}$/,
        phone: /^(01(2|5|0|1)[0-9]{8}|\+201(2|5|0|1)[0-9]{8})$/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        projectDetails: /^(?=.*\S).{20,}$/,
    }

    if (input.id == "phone") {
        if (input.value.trim() == "") {
            msgElement.classList.add("hidden")
            return true;
        }

        if (!regex.phone.test(input.value)) {
            msgElement.classList.remove("hidden")
            return false;
        }

        msgElement.classList.add("hidden")
        return true;
    }

    if (input.value.trim() == "" || !regex[input.id].test(input.value)) {
        msgElement.classList.remove("hidden")
        return false;
    }

    msgElement.classList.add("hidden")
    return true;
}

nameInput.addEventListener("input", function () {
    document.getElementById("msgName").classList.add("hidden");
});

phoneInput.addEventListener("input", function () {
    document.getElementById("msgPhone").classList.add("hidden");
});

emailInput.addEventListener("input", function () {
    document.getElementById("msgEmail").classList.add("hidden");
});

detailsInput.addEventListener("input", function () {
    document.getElementById("msgDetails").classList.add("hidden");
});


contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if (validation(fullName, "msgName") && validation(email, "msgEmail") && validation(phone, "msgPhone") && validation(projectDetails, "msgDetails")) {
        Swal.fire({
            icon: "success",
            title: "تم ارسال رسالتك بنجاح!",
            text: "شكرا لتواصلك. سأرد عليك في اقرب وقت ممكن.",
            confirmButtonText: "حسنا",
            background: "#1e293b",
            timer: 3500,
            customClass: {
                popup: 'rounded-3xl shadow-2xl border border-slate-700/60 px-8 py-8 max-w-md w-25',
                confirmButton: 'from-indigo-500 to-purple-500 text-white font-medium px-10 py-3 rounded-2xl transition-all duration-300 border-0 outline-none text-lg shadow-md cursor-pointer mt-4',
            },
        });

        clear()
    } else {
        validation(fullName, "msgName");
        validation(email, "msgEmail");
        validation(phone, "msgPhone");
        validation(projectDetails, "msgDetails");
    }
})


function clear() {
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    detailsInput.value = "";
}