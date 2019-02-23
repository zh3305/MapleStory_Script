function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getMapId() == 680000000) {
		cm.sendOk("您已经在婚礼村了。");
		cm.dispose();
		return;
	}
	cm.warp(680000000, 0);
	cm.sendOk("已经将你传送到结婚地图。\r\n请查看左上角NPC结婚流程.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
	cm.dispose();
}