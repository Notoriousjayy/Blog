"use strict";

/* Property Directive
 floor, getElementById, innerHTML, textContent, toLocaleDateString,
 toLocaleTimeString
 */

/*Countdown clock*/

var document;
var setInterval;

/*Execute the function to run and */
setInterval("runClock()", 1000);

/*Function to create and run the countdown clock*/
function runClock() {

	/*Store the current date and time*/
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	/*Display the time until my birthday*/
	document.getElementById("days").textContent = "dd";
	document.getElementById("hrs").textContent = "hh";
	document.getElementById("mins").textContent = "mm";
	document.getElementById("secs").textContent = "ss";

	/*Display the current date and time*/
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

	/*Calculate the days until my birthday*/
	var today = new Date();
	var myBirthday = new Date("November 5, 2020");
	var daysLeft = (myBirthday - today) / (1000 * 60 * 60 * 24);

	/*Calculate the hours left in the current day*/
	var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

	/*Calculate the minutes and seconds left in the current day*/
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

	/*Display the time left until my birthday*/
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);

}

/*Execute the function to run and display the countdown clock*/
runClock();