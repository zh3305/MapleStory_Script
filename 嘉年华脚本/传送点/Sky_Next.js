function enter(pi) {
    var em = pi.getEventManager("Dragonica");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader()) {
        if (pi.getMapId() == 240080500 && !pi.checkPartyMemberNearby(pi.getPortal().getPosition())) {
            pi.playerMessage(5, "请所有队员到传送口集合！");
            return;
        }
        var state = parseInt(em.getProperty("state")) + 1;
        pi.warpParty(pi.getPlayer().getMapId() + 100);
        em.setProperty("state", String(state));
        pi.playPortalSE();
    } else {
        pi.playerMessage(5, "请消灭所有怪物！");
    }
}
