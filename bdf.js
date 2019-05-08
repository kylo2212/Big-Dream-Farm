/*    JavaScript 6th Edition
 *    Chapter 3
 *    Chapter case

 *    Tipton Turbines
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: tt.js
 */

 //	KIRSTIE updated the calendar to reflect the December 2018 dates to the corresponding events.
 // I went ahead and closed the farm for Christmas Eve and Christmas Day and fixed the layout and added some color 
 //to the content in the calendar 11-25-2018 
 
 
// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
   "Thursday", "Friday", "Saturday"];
   
var opponents = ["Eggs & Seasonal Produce", 
"(CLOSED)", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce",
"(CLOSED)", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce",
"(CLOSED)", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce",
"(CLOSED)", "MERRY", "CHRISTMAS", "Egg Pickup", "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce",
"(CLOSED)", "Egg Pickup"];

/*var opponents = ["Egg Pickup", "Egg Pickup", "Egg Pickup", 
    "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce", "(Closed)", 
    "Egg Pickup", "Egg Pickup", "Egg Pickup", 
    "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce", "(Closed)",
    "Egg Pickup", "Egg Pickup", "Egg Pickup", 
    "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce", "(Closed)",
	"Egg Pickup", "Egg Pickup", "Egg Pickup", 
    "Egg Pickup", "Egg Pickup", "Eggs & Seasonal Produce", "(Closed)",
    "Egg Pickup", "Egg Pickup", "Egg Pickup"];
*/
var gameLocation = ["ALL DAY", 
"", "PM", "PM", "PM", "PM", "PM", "ALL DAY",
"", "PM", "PM", "PM", "PM", "PM", "ALL DAY",
"", "PM", "PM", "PM", "PM", "PM", "ALL DAY",
"", "", "", "PM", "PM", "PM", "ALL DAY",
"", "PM"]




/*
var gameLocation = 
   ["PM", "PM", "PM", "PM", "PM", "ALL DAY", "",
    "PM", "PM", "PM", "PM", "PM", "ALL DAY", "",
    "PM", "PM", "PM", "PM", "PM", "ALL DAY", "",
	"PM", "PM", "PM", "PM", "PM", "ALL DAY", "",
    "PM", "PM", "PM"];

*/
// function to place daysOfWeek values in header row cells 
function addColumnHeaders() {
   var i = 0;
   while (i < 7) {
      document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
	  document.getElementsByTagName("th")[i].style.color = "blue";
      i++;
   }
}

// function to place day of month value in first p element 
// within each table data cell that has an id 
function addCalendarDates() {
   var i = 1;
   var paragraphs = "";
   do {
      var tableCell = document.getElementById("08-" + i);
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[0].innerHTML = i;
	  paragraphs[0].style.color = "blue";
      i++;      
   } while (i <= 31);
}

// function to place opponents and gameLocation values in 
// second p element within each table data cell that has an id
function addGameInfo() {
   var paragraphs = "";
   for (var i = 0; i < 31; i++) {
      var date = i+1;
      var tableCell = document.getElementById("08-" + date);
      paragraphs = tableCell.getElementsByTagName("p");
/*      if (gameLocation[i] === "away") {
         paragraphs[1].innerHTML = "@ ";
      } 
      if (gameLocation[i] === "home") {
         paragraphs[1].innerHTML = "vs ";
      }*/
/*      if (gameLocation[i] === "away") {
         paragraphs[1].innerHTML = "@ ";
      } 
      else {
         if (gameLocation[i] === "home") {
            paragraphs[1].innerHTML = "vs ";
         }
      } */
      switch (gameLocation[i]) {
         case "PM":
            paragraphs[2].innerHTML = "5P-8P ";
            break;
         case "ALL DAY":
            paragraphs[2].innerHTML = "7A-8P ";
            break;
		
      }
      paragraphs[1].innerHTML += opponents[i];
	  if (paragraphs[1].innerHTML === "(CLOSED)")
		paragraphs[1].style.color = "red";
	  
   }
var tableCell = document.getElementById("08-24");
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[2].innerHTML = "(CLOSED)";
	  paragraphs[1].style.color = "green";
	  paragraphs[2].style.color = "red";
var tableCell = document.getElementById("08-25");
      paragraphs = tableCell.getElementsByTagName("p");
      paragraphs[2].innerHTML = "(CLOSED)";
	  paragraphs[1].style.color = "green";
	  paragraphs[2].style.color = "red";
}

// function to populate calendar 
function setUpPage() {
   addColumnHeaders();
   addCalendarDates();
   addGameInfo();
}

// runs setUpPage() function when page loads
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}
