function start() {
    var eim = ms.getEventInstance();
    if (eim != null && ms.getPartySize() > 0) {
        eim.setProperty("size", ms.getPartySize());
    }
    ms.getPlayer().getGhostParkScore();
    ms.dispose();
}