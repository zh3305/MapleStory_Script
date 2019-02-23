function start() {
    cm.sendYesNo("你想通過傳送口移動到#m230050000#嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(230050000);
	}
    cm.dispose();
}