
var btn = document.getElementById("hamburger");
btn.addEventListener("click", function () {
  "use strict";
  var menu = document.getElementById("navi");
  menu.classList.toggle("show");
}, false);

var link = document.querySelector("#navi");
link.addEventListener("click", function () {
  "use strict";
  var menu = document.getElementById("navi");
  menu.classList.remove("show");
}, false);

//navbar background after scrolling
window.onscroll = function () {
  "use strict";
  var myNav = document.querySelector('.navBar');
  if (document.body.scrollTop >= 200) {
    myNav.classList.add("navbar_background");
  } else {
    myNav.classList.remove("navbar_background");
  }
};