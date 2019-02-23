function start() {
    cm.sendYesNo("要通過#p1002105#移動到萬神殿嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(400000001, 1);
	}
    cm.dispose();
}