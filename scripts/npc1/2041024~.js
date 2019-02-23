var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("欢迎使用回忆冒险岛BOSS物品交换系统\r\n请选择你要兑换的挑战BOSS的物品...\r\n#b#L0#兑换闹钟挑战物品 - D片.#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	cm.openNpc(2041024,1);
            break;
        case 1:
            cm.dispose();
		cm.warp(910000000);
            break;
        }
    }
}