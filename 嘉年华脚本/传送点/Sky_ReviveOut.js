function enter(pi) {
    var em = pi.getEventManager("Dragonica");
    var eim = pi.getEventInstance();
    if (em != null && eim != null) {
        var state = parseInt(em.getProperty("state"));
        var map = eim.getMapInstance(state - 1);
        pi.getPlayer().changeMap(map, map.getPortal(0));
        pi.playPortalSE();
    } else {
        pi.warp(240080000, 0);
    }
    return true;
}
