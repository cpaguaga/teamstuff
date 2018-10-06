(function() {
	"use strict";
	console.log("SEAF fired");


var navT = document.querySelector(".topnav");
var buttonX = document.querySelector("#menuButton")

	function toggleNav (){
		console.log();
	  navT.style.display = "block";
	}

	buttonX.addEventListener("click", toggleNav, false);

}());
