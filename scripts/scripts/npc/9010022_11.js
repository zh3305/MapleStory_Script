function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 910001000) {
		cm.sendOk("您已经在专业技术<匠人村>了。");
		cm.dispose();
		return;
	}
	cm.warp(910001000, 0);
	cm.dispose();
}