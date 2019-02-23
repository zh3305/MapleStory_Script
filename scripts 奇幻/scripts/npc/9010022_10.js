function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 200000301) {
		cm.sendOk("您已经在家族中心了。");
		cm.dispose();
		return;
	}
	cm.warp(200000301, 0);
	cm.dispose();
}