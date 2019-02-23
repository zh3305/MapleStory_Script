function enter(pi) {
    //if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
    //    pi.playerMessage("还有剩下的怪物。");
    //} else {
    //    pi.dojoAgent_NextMap(true, false);
    //}
	pi.warp(pi.getPlayer().getMapId() + 100,0);
}