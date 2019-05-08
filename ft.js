/*    JavaScript 6th Edition
 *    Chapter 2 - 09.09.2018
 *  

 *    big DREAM farm
 *    Variables and functions
 *    Author: Ryan Clark
 *    Date:  09.09.2018 

 *    Filename: ft.js
 */

// global variables

"use strict"; // interpret contents in JavaScript strict mode
var photographerCost = 0;
var eggCost = 0;
var dozenDuckCost = 5;
var dozenChickenCost = 3;
var estimateTotal = 0;
var washed = false;
var allLarge = false;

// Ryan added Calendar for Chapter 7 Content
var dateObject = new Date();
/*var countdown;
var ticket = {
   passengersOnTicket: 0,
   passengers: {},
   calcCost: updateTotalCost
};*/

function displayCalendar(whichMonth) {
   var date;
   var dateToday = new Date();
   var dayOfWeek;
   var daysInMonth;
   var dateCells;
   var captionValue;
   var month;
   var year;
   var monthArray = ["January","February","March","April","May",
      "June","July","August","September","October","November",
      "December"];
   if (whichMonth === -1) {
      dateObject.setMonth(dateObject.getMonth() - 1);
   } else if (whichMonth === 1) {
      dateObject.setMonth(dateObject.getMonth() + 1);
   }
   month = dateObject.getMonth();
   year = dateObject.getFullYear();
   dateObject.setDate(1);
   dayOfWeek = dateObject.getDay();
   captionValue = monthArray[month] + " " + year; 
   document.querySelector("#cal table caption").innerHTML = captionValue;
   if(month===0||month===2||month===4||
      month === 6 || month === 7 || month === 9 ||
      month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
      daysInMonth = 31;
   } else if (month === 1) { // Feb
      if (year % 4 === 0) { // leap year test
         if (year % 100 === 0) {
            // year ending in 00 not a leap year unless
            // divisible by 400
            if (year % 400 === 0) {
               daysInMonth = 29;
            } else {
               daysInMonth = 28;
            }
         } else {
           daysInMonth = 29;
         }
      } else {
         daysInMonth = 28;
      }
   } else { // Apr, Jun, Sep, Nov
      daysInMonth = 30;
   }
   dateCells = document.getElementsByTagName("td");
   for (var i = 0; i < dateCells.length; i++) {
      // clear existing table dates
      dateCells[i].innerHTML = "";
      dateCells[i].className = "";
   }
   for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
      // add dates to days cells
      dateCells[i].innerHTML = dateObject.getDate();
      dateCells[i].className = "date";
      if (dateToday < dateObject) {
         dateCells[i].className = "futuredate";
      }
      date = dateObject.getDate() + 1;
      dateObject.setDate(date);
   }
   dateObject.setMonth(dateObject.getMonth() - 1);
   // reset month to month shown
   document.getElementById("cal").style.display = "block";
   // display calendar if it's not already visible
}

function selectDate(event) {
   if (event === undefined) { // get caller element in IE8
      event = window.event;
   }
   var callerElement = event.target || event.srcElement;
   if (callerElement.innerHTML === "") {
      // cell contains no date, so don’t close the calendar
      document.getElementById("cal").style.display = "block";
      return false;
   }
   dateObject.setDate(callerElement.innerHTML);
   var fullDateToday = new Date();
   var dateToday = Date.UTC(fullDateToday.getFullYear(),
      fullDateToday.getMonth(), fullDateToday.getDate()); 
   var selectedDate = Date.UTC(dateObject.getFullYear(),
          dateObject.getMonth(), dateObject.getDate());
   if (selectedDate <= dateToday) {
      document.getElementById("cal").style.display = "block";
      return false;
   }
   document.getElementById("deliveryDate").value = dateObject.toLocaleDateString();
   hideCalendar();
}
function hideCalendar() {
     document.getElementById("cal").style.display = "none";
}
function prevMo() {
   displayCalendar(-1);
}
function nextMo() {
   displayCalendar(1);
}


// calculates all costs based on egg numbers entered by user and adds to total cost
function calcEggs() {
   var totalCost = 0;  //intializing to zero for recalc
   var eggCount = 0;	//intializing to zero for recalc
   var numChicken = document.getElementById("chickenCost");
console.log("numChicken: " + numChicken);
   var numDuck = document.getElementById("duckCost");
console.log("numDuck: " + numDuck);  
   var distance = document.getElementById("distance");
console.log("distance: " + distance); 
   eggCost = (numChicken.value * dozenChickenCost + distance.value * numChicken.value) + (numDuck.value * dozenDuckCost + distance.value * numDuck.value) ;
console.log("eggCost: " + eggCost);
   totalCost += eggCost;
console.log("totalCost: " + totalCost);
   document.getElementById("estimate").innerHTML = "$" + totalCost;
console.log("eggCount: " + eggCount);
	estimateTotal = totalCost;
}

// adds/subtracts cost of washed from total cost
function toggleWashed() {
   (document.getElementById("washed").checked === false) ? estimateTotal -= 1 : estimateTotal += 1;
   document.getElementById("estimate").innerHTML = "$" + estimateTotal;
}

// adds/subtracts cost of all Large eggs from total cost
function toggleLarge() {
   (document.getElementById("allLarge").checked === false) ? estimateTotal -= 2 : estimateTotal += 2;
   document.getElementById("estimate").innerHTML = "$" + estimateTotal;
}

// sets all form field values to defaults
function resetForm() {
   document.getElementById("chickenCost").value = 0;
   document.getElementById("duckCost").value = 0;
   document.getElementById("washed").checked = washed;
   document.getElementById("allLarge").checked = allLarge;
   document.getElementById("distance").value = 0;
   calcEggs();
   createEventListeners();
}

// creates event listeners
function createEventListeners() 
{
   document.getElementById("chickenCost").addEventListener("change", calcEggs, false);
   document.getElementById("duckCost").addEventListener("change", calcEggs, false);
   document.getElementById("washed").addEventListener("change", toggleWashed, false);
   document.getElementById("allLarge").addEventListener("change", toggleLarge, false);
   document.getElementById("distance").addEventListener("change", calcEggs, false);
   
   var dateField = document.getElementById("deliveryDate");
      if (dateField.addEventListener) {
   dateField.addEventListener("click", displayCalendar, false);
   } else if (dateField.attachEvent) {
      dateField.attachEvent("onclick", displayCalendar); 
   }
   var dateCells = document.getElementsByTagName("td");
   if (dateCells[0].addEventListener) {
      for (var i = 0; i < dateCells.length; i++) {
         dateCells[i].addEventListener("click", selectDate, false);
      } 
   } else if (dateCells[0].attachEvent) {
      for (var i = 0; i < dateCells.length; i++) {
         dateCells[i].attachEvent("onclick", selectDate);
      }
   }
   var closeButton = document.getElementById("close");
   if (closeButton.addEventListener) {
      closeButton.addEventListener("click", hideCalendar, false);
   } else if (closeButton.attachEvent) {
      closeButton.attachEvent("onclick", hideCalendar);
   }
   var prevLink = document.getElementById("prev");
   var nextLink = document.getElementById("next");
   if (prevLink.addEventListener) {
      prevLink.addEventListener("click", prevMo, false);
      nextLink.addEventListener("click", nextMo, false);
   } else if (prevLink.attachEvent) {
      prevLink.attachEvent("onclick", prevMo);
      nextLink.attachEvent("onclick", nextMo);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}
