function enter(pi) {
    var eim = pi.getEventManager("LudiPQ").getInstance("LudiPQ");
    
    // only let people through if the eim is ready
    if (eim.getProperty("stage3status") == null) { // do nothing; send message to player
	pi.playerMessage(5, "现在还不能进入。");
    } else {
	pi.warp(pi.getMapId() + 400, "st00");
    }
}