function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() && pi.haveItem(4001055,1)) {
		pi.warpParty(920010100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"请组队长进入这个传送口,并确定拥有生命草.");
	}
}
