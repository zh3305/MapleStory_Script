function enter(pi) {
    var returnMap = pi.getSavedLocation("MULUNG_TC");
    if (returnMap == 950000100) {
        returnMap = 103000000; // to fix people who entered the fm trough an unconventional way
    }
    pi.clearSavedLocation("MULUNG_TC");
    pi.warp(returnMap, 0);
    return true;
}
