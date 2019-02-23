/*
	Fourth Eos Rock - Ludibrium : Eos Tower 1st Floor (221020000)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4001020)) {
            cm.sendYesNo("你想使用 魔法石觉醒卷轴移动到玩具塔 41层？");
        } else {
            cm.sendOk("这里是连接各个魔法石的魔法阵，但是没有 魔法石觉醒卷轴 无法启动。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4001020, -1);
        cm.warp(221021700, 0);
        cm.dispose();
    }
}