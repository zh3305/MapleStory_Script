var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if (cm.haveItem(2430865)) {
			cm.warp(704000000);
			cm.dispose();
		} else {
			cm.sendOk("对不起，只有#rVIP#k才能进入三倍泡点专区");
			cm.dispose();
		}
	}
}