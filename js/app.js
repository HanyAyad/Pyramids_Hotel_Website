// Theme-Mode

window.onload = function() {
      let currentTheme = localStorage.getItem("mytheme") || "default";

      setTheme("default", currentTheme);

      const themeSelector = document.getElementById("theme-selector");
      themeSelector.value = currentTheme;

      themeSelector.addEventListener("change", function(e) {
        const newTheme = e.currentTarget.value;
        setTheme(currentTheme, newTheme);
      });

      function setTheme(oldTheme, newTheme) {
        const body = document.getElementsByTagName("body")[0];

        body.classList.remove(oldTheme);
        body.classList.add(newTheme);

        currentTheme = newTheme;

        // Store the new theme in local storage
        localStorage.setItem("mytheme", newTheme);
      }
    };


// Rooms Layout


function vertical() {
  // Get a NodeList of all .demo elements
const rowClasses = document.querySelectorAll('.row');
rowClasses.forEach(element => {
  element.style.display = 'inline';
})
}

function grid() {
  // Get a NodeList of all .demo elements
const rowClasses = document.querySelectorAll('.row');
rowClasses.forEach(element => {
  element.style.display = 'flex';
})
}

// Validation
function ValidateEmailLogin(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Welcome to Pyramids!");
}
else
{
alert("You have entered an invalid email address!");
document.login.email.focus()
return false;
}
}

function ValidateEmailSignUp(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
}
else
{
alert("You have entered an invalid email address!");
document.register.user_email.focus()
return false;
}
}


// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED MOBILE ONLY
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navList.style.left = '-100%';
    })
});


// TESTIMONIAL SLIDER
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
});

