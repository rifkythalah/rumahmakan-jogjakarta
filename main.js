// navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

//membuat button alert
var myAlert = document.getElementById("myAlert");

myAlert.style.display = "none";

function myfunction() {
  myAlert.style.display = "block";
}

//membuat spinner loading
var btnKirim = document.getElementById("btnKirim");
var btnLoading = document.getElementById("btnLoading");

btnLoading.style.display = "none";

function startProsses() {
  btnKirim.style.display = "none";
  btnLoading.style.display = "block";
}

function endProsses() {
  btnKirim.style.display = "block";
  btnLoading.style.display = "none";
}

function simpanForm() {
  startProsses();

  setTimeout(function () {
    endProsses();
    myfunction();
  }, 3000);
}

