/*
	第一个玩具塔石 - Ludibrium : Eos Tower 100th Floor (221024400)
**/

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
            cm.sendYesNo("把手放在魔法石上，周围发生了奇妙的光。你想移动到下一个魔法石吗？");
        } else {
            cm.sendOk("这是连接到下一个魔法石的魔法阵，但是没有 魔法石觉醒卷轴 无法开启。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4001020, -1);
        cm.warp(221022900, 3);
        cm.dispose();
    }
}