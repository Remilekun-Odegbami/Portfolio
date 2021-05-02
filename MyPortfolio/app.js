// nav bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle( 'sticky', window.scrollY > 0);
});

//responsive sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const menuBtn2 = document.querySelector(".menu-btn2");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
    menuBtn2.classList.toggle('active');
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});

//scroll to top btn

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
});

// back to top on click
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// validate email address
function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else 
{
alert("You have entered an invalid email address!")
alert("Enter a valid email address!");
document.form1.text1.focus();
return false;
}
}

// $("form").submit(function (e) {
//    var validationFailed = false;
//    // do your validation here ...
//    if (validationFailed) {
//       e.preventDefault();
//       return false;
//    }
// });