function enter(pi) {
    if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonster().size() == 0 && pi.isLeader()) {
        //pi.warpParty_Instanced(921120600);
        pi.warpParty(921120100);
        pi.playPortalSE();
    } else {
        pi.playerMessage(5, "传送口未激活. 请先消灭所有怪物.");
    }
}
