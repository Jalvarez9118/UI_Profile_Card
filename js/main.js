var settings_btn = document.querySelector(".settings_btn");

var profile_slider = document.querySelector(".profile_slider");

settings_btn.addEventListener("click", function () {
    profile_slider.classList.toggle("active");
    this.classList.toggle("active");
})