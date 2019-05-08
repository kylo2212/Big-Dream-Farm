/*
     Filename: zoom.js
 */

 
 //KIRSTIE FIXED THE PHOTO ZOOM FOR THIS PAGE 
 //OPEN IN FIREFOX PLEASE AND THANK YOU
 
 
"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;