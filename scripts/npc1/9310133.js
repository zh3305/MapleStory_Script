var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getQuestStatus(56203) == 2) { //2022新叶城 - 被占领的 新叶城
            cm.sendOk("你已经不需要进入外星人密集地了");
        } else {
            cm.warp(703000001, 0);
        }
        cm.dispose();
    }
}