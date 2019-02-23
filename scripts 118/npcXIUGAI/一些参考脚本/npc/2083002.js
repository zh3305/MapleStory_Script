function start() {
if (cm.getPlayer().getMapId() == 240060200 || cm.getPlayer().getMapId() == 240060201)
    cm.sendYesNo("你想回到生命之穴吗？");
else
    cm.sendYesNo("你想回到市场吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (cm.getPlayer().getMapId() == 240060200 || cm.getPlayer().getMapId() == 240060201)
		cm.warp(240050400);
        	
	else
		cm.warp(910000000);
    }
    cm.dispose();
}