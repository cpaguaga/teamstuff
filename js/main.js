(function() {
	"use strict";
	console.log("SEAF fired");


var lp1 = document.getElementById('LB1');
function openLBox1() {
	console.log()
  document.querySelector('#LB1').style.height = "100%";
}
lp1.addEventListener("click", openLBox1, false);


var lp2 = document.getElementById('LB2');
function openLBox2() {
	console.log()
  document.querySelector('#LB2').style.height = "100%";
}
lp2.addEventListener("click", openLBox2, false);


var lp3 = document.getElementById('LB3');
function openLBox3() {
	console.log()
  document.querySelector('#LB3').style.height = "100%";
}
lp3.addEventListener("click", openLBox3, false);


var lp4 = document.getElementById('LB4');
function openLBox4() {
	console.log()
  document.querySelector('#LB4').style.height = "100%";
}
lp4.addEventListener("click", openLBox4, false);


var lp5 = document.getElementById('LB5');
function openLBox5() {
	console.log()
  document.querySelector('#LB5').style.height = "100%";
}
lp5.addEventListener("click", openLBox5, false);


var lp6 = document.getElementById('LB6');
function openLBox6() {
	console.log()
  document.querySelector('#LB6').style.height = "100%";
}
lp6.addEventListener("click", openLBox6, false);





var navT = document.querySelector(".topnav");
var buttonX = document.querySelector("#menuButton")

	function toggleNav (){
		console.log();
	  navT.style.display = "block";
	}

	buttonX.addEventListener("click", toggleNav, false);

}());
