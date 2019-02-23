function enter(pi) {
    var portal = 0;
    var returnMap = pi.getSavedLocation("BPReturn");

    if (returnMap === 950000100) {
        returnMap = 240040600;
        portal = 5;
    } else {
        pi.clearSavedLocation("BPReturn");
    }
    pi.playPortalSE();
    pi.warp(returnMap, portal);
}