"use strict";var photoOrderArray=window.opener.photoOrder;var figFilename="images/IMG_0"+photoOrderArray[2]+".jpg";function pageSetup(){document.getElementsByTagName("img")[0].src=figFilename}
window.onload=pageSetup