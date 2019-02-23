var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("想要转移到卡姆那时，要告诉我一声喔。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("要转移到卡姆那吗？");
    } else if (status == 1) {
        cm.sendNext("传送到卡姆那。");
    } else if (status == 2) {
        cm.warp(802000101);
        cm.dispose();
    }
}