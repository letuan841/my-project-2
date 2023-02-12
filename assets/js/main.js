// Hide and show Header
var prevScrollpos = window.scrollY;
var header = document.getElementById("header");

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    header.style.visibility = "visible";
    header.style.opacity = "1";
  } else {
    header.style.visibility = "hidden";
    header.style.opacity = "0";
  }

  prevScrollpos = currentScrollPos;
};

// Set the date we're counting down to
var countDownDate = new Date("Feb 8, 2024 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % 86400000) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//
