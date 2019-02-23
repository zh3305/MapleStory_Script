function start() {
    cm.sendYesNo("ÄãÏë³öÈ¥Âð£¿");
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (cm.getPlayer().getMapId() == 280030000)
        	cm.warp(211042300);
	else
		cm.warp(211042301);
    }
    cm.dispose();
}