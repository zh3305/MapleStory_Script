function enter(pi) {
    var em = pi.getEventManager("Kenta");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getPlayer().getParty() != null) {
        //pi.warpParty_Instanced(921120600);
        var state = em.getProperty("state");
        var cleared = false;
        switch (pi.getMapId() / 10) {
            case 92304010:
                cleared = state.equals("2") && eim.getProperty("KentaSave").equals("3") && pi.getMap().getMonsterById(9300460) != null && pi.getPortal().getPosition().distanceSq(pi.getMap().getMonsterById(9300460).getPosition()) < 10000;//完成任务后
                if (cleared) {
                    pi.removeAll(2430364);
                }
                break;
            case 92304020:
                cleared = state.equals("3");
                break;
            case 92304030:
                cleared = true;
                break;
        }
        if (cleared) {
            pi.warpParty_Instanced(pi.getMapId() + 100);
            pi.playPortalSE();
        } else {
            pi.startMapEffect("请帮帮我，不要把我丢在这里。", 5120052);
        }
    } else {
        pi.playerMessage(5, "传送口未激活.");
    }
}
