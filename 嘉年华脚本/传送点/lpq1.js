function enter(pi) {
    var eim = pi.getEventManager("LudiPQ").getInstance("LudiPQ");

    // only let people through if the eim is ready
    if (eim.getProperty("stage2status") == null) { // do nothing; send message to player
        pi.playerMessage(5, "现在无法进入.");
    } else {
        pi.warp(910340200, "st00");
    }
}
