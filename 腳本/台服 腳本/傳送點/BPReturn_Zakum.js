/* global pi */

function enter(pi) {
    var returnMap = pi.getSavedLocation("BPReturn");
    var portal = 0;

    if (returnMap === 950000100) {
        returnMap = 211042200;
        portal = 2;
    } else {
        pi.clearSavedLocation("BPReturn");
    }
    pi.playPortalSE();
    pi.warp(returnMap, portal);
}