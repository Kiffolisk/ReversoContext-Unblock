// ==UserScript==
// @name         ReversoContext Unblock
// @namespace    https://www.youtube.com/channel/UCzHWIUDl06oIPrjJE0Tt2PQ
// @version      0.0.1
// @description  Removes the forced log in/sign up in ReversoContext.
// @author       GAMERSUNITE
// @homepageURL  https://github.com/Kiffolisk/ReversoContext-Unblock
// @match        *://context.reverso.net/*/*/*
// @grant        none
// ==/UserScript==

function DeleteStuff() {
  var blockedExamples = document.getElementsByClassName("example blocked");

    // Stolen from https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp THANK YOU!!
    var i;
    for (i = 0; i < blockedExamples.length; i++) {
        blockedExamples[i].className = "example";
    }
}

(function() {
    'use strict';


    // Delete "blocked" banner.
    document.getElementById("blocked-results-banner").remove();

    // Delay loop deletion stuff to not kill old browsers.

    var lol;
    var manyTimes = 12;
    for (lol = 0; lol < manyTimes; lol++) {
        setTimeout(DeleteStuff,3);
    }
})();
