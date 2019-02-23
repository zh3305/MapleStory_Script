function enter(pi) {
	pi.getPlayer().saveLocation(net.sf.odinms.server.maps.SavedLocationType.FREE_MARKET);
	pi.warp(749050400, "st00");
	return true;
}