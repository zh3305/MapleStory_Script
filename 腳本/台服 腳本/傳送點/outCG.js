function enter(pi) {
    var map = pi.getSavedLocation("CRYSTALGARDEN");
    if (map === 950000100) {
        map = 100000000;
    }
    pi.warp(map);
    pi.clearSavedLocation("CRYSTALGARDEN");
    return true;
}
