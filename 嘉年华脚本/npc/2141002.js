function start() {
    cm.sendYesNo("你想放弃任务从这里出去吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(270050000, 0);
    }
    cm.dispose();
}
