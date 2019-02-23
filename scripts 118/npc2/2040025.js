/*
	Second Eos Rock - Ludibrium : Eos Tower 71st Floor (221022900)
*/

var status = 0;
var map;

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
            cm.sendSimple("这里可以连接到下一个魔法石#b\r\n#L0#使用 魔法石觉醒卷轴 (100 层)#l\r\n#L1#使用 魔法石觉醒卷轴 (41 层)#l");
        } else {
            cm.sendOk("这里是连接各个魔法石的魔法阵，但是没有 魔法石觉醒卷轴 无法启动。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendYesNo("你想用 魔法石觉醒卷轴 移动到100层玩具塔？");
            map = 221024400;
        } else {
            cm.sendYesNo("你想用 魔法石觉醒卷轴 移动到41层玩具塔？");
            map = 221021700;
        }
    } else if (status == 2) {
        cm.gainItem(4001020, -1);
        cm.warp(map, 0);
        cm.dispose();
    }
}