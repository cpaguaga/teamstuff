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

function openLBox() {
  document.getElementById('.lighbox').style.display = "block";
}

function closeLBox() {
  document.getElementById('.lightbox').style.display = "none";
}

var navT = document.querySelector(".topnav");
var buttonX = document.querySelector("#menuButton")

	function (toggleNav){
		console.log();
	  navT.style.display = "block";
	}

	buttonX.addEventListener("click", toggleNav, false);

}());
