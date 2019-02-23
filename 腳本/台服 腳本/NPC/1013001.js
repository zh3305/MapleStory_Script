var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
} 

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("終於找到了，符合契約人條件的人…");
    } else if (status == 1) {
        cm.sendNextPrev("履行契約的條件…");
    } else if (status == 2) {
        cm.warp(900090101);
        cm.dispose();
    }
}