function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 100000104) {
		cm.sendOk("您已经在美发店了。");
		cm.dispose();
		return;
	}
	cm.warp(100000104, 0);
	cm.dispose();
}