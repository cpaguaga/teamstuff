(function() {
	"use strict";
	console.log("SEAF fired");

var modal = document.querySelector('lightbox');
var btn = document.querySelector("lightbox_click");
var span = document.querySelector("close")[0];

function block_display()
{
    console.log()
  btn.onclick = function(block_display) {
  modal.style.display = "block";
}
}

function closeone()
{
  console.log(closeone)
span.onclick = function() {
    modal.style.display = "none";
}
}

function display_back()
{
  console.log(display_back)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

modal.addEventListener("click", block_display, false);
span.addEventListener("click", closeone, false);
window.addEventListener("click", display_back, false);
})

