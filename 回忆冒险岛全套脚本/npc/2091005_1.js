function start() {
	var eim = cm.getPlayer().getEventInstance();
	var maps = eim.getObjectProperty("maps");
	if (maps == null) {
		java.lang.System.out.println("maps获取失败");
		eim.dispose();
		return;
	}
		for (var i = 1; i < maps.length; i++) {
			if (maps[i][0] == cm.getPlayer().getMapId() + 100) {
				cm.getPlayer().changeMap(maps[i][1], maps[i][1].getPortal(0));
				break;
			}
		}
	cm.dispose();
}