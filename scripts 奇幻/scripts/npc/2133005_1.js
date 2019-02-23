function start() {
    cm.sendYesNo("你想从这里出去吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(300030300, 0);
    }
    cm.dispose();
}