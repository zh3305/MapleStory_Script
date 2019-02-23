function start() {
	cm.sendYesNo("你是否想离开这里?");
}

function action(mode, type, selection) {
    	if (mode == 1) {
		cm.warp(541020700,6);
	}
	cm.dispose();
}
