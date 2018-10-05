(function() {
	"use strict";
	console.log("SEAF fired");


var lp = document.querySelector('lightboxPics');
var body = document.querySelector('body')
function block_display()
{
	console.log()
  lp.onclick = function(block_display) {
  lp.style.height = "100%";
	body.style.opacity = "25%";
}
}

lp.addEventListener("click", block_display, false);
