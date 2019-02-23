function enter(pi) {
    var returnMap = pi.getSavedLocation("MULUNG_TC");
    pi.clearSavedLocation("MULUNG_TC");
    if (returnMap < 0) {
        returnMap = 910000000;
    }
    pi.warp(returnMap);
}