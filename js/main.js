(function() {
	"use strict";
	console.log("SEAF fired");

var lp = document.getElementsByClassName('lightboxPics');
var body = document.querySelector('body');
var blockdisplay = document.getElementsByClassName('lightbox');

function blockdisplay(){
	console.log()
  lp.style.height = "100%";
	body.style.opacity = "25%";
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


lp.addEventListener("click", block_display, false);
})
