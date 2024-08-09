// ========================================== SERVICES BUTTON =======================================//

const servicesButtons = document.querySelectorAll(".service_item");
const serviceDetails = document.querySelector(".services_right");

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    console.log(details);
serviceDetails.innerHTML =  `
          <h3>${details.title}</h3>
          ${details.description.map(para => "<p>" + para + "</p>").join('')}
`
}
const removeActiveClass = () => {
    servicesButtons.forEach(button =>{
        button.classList.remove("active")
    })
}
 
servicesButtons.forEach(item =>{
    item.addEventListener("click", () =>{
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass);
        item.classList.add("active");
    })
})

getService("frontend");

// ========================================== MIXITUP (Project section)=======================================//
const containerEl = document.querySelector(".projects_container")
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');






// ========================================== SWIPER (testimonials section) =======================================//

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,

    spaceBetween: 30,

    breakpoints: {
        600: {
            slidesPerView: 2
        }, 
        1024: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
 
    },

   
  });


// ========================================== NAV TOGGLE (small screens)=======================================//

const navMenu = document.querySelector(".nav_menu")
const navOpenBtn = document.querySelector(".nav_toggle-open")
const navCloseBtn = document.querySelector(".nav_toggle-close")

const openNavHandler = () => {
    navMenu.style.display = "flex";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "inline-block";
}
const closeNavHandler = () => {
    navMenu.style.display = "none";
    navOpenBtn.style.display = "inline-block";
    navCloseBtn.style.display = "none"
}

navOpenBtn.addEventListener("click", openNavHandler)
navCloseBtn.addEventListener("click", closeNavHandler)


// close navbar when clicked on small screens

const navItems = navMenu.querySelectorAll("a");
if(window.innerWidth < 768) {
    navItems.forEach(item =>{
        item.addEventListener("click", closeNavHandler)
    })
}


// ========================================== THEME =======================================//


const themeBtn = document.querySelector(".nav_theme-btn")
themeBtn.addEventListener("click", () =>{
    let bodyClass = document.body.className;
    if (!bodyClass) {
        bodyClass = "dark";
        //change toggle icon
        themeBtn.innerHTML = "<i class='bi bi-sun-fill'></i>"
        document.body.className = bodyClass;
        // Save theme to local storage
        window.localStorage.setItem("theme", bodyClass);

    } else {
        bodyClass = "";
        // change toggle icon
        themeBtn.innerHTML = "<i class='bi bi-moon-fill'></i>"
        document.body.className = bodyClass;
        // Save theme to local storage
        window.localStorage.setItem("theme", bodyClass);

    }
})

// load theme on local storage

window.addEventListener("load", () =>{
    document.body.className = window.localStorage.getItem("theme");
})