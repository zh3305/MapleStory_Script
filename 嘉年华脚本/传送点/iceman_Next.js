function enter(pi) {
    try {//
        var em = pi.getEventManager("Iceman");
        var eim = pi.getEventInstance();
        if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300438) != null && pi.isLeader() && eim.getProperty("checkdone").equals(String(pi.getMapId()))) {

            pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
            pi.playPortalSE();
        } else {
            pi.playerMessage(5, "请组队长进入传送口, 并确认冰骑士在这附近.");
        }
    } catch (e) {
        pi.playerMessage(5, "Error: " + e);
    }
}
