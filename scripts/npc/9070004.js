function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("还没准备好吗？想参加大乱斗的话，可以随时来找我。完毕！");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("还没准备好吗？想参加大乱斗的话，可以随时来找我。完毕！");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.isCanPvp()) {
                cm.sendYesNo("你想参加大乱斗？好的！我可以把你送到赤壁。在那里你可以和其他人对决，确认自己的能力。此外，希望你不要拒绝主公的请求。");
            } else {
                cm.sendNext("Pvp系统暂未开放.");
                cm.dispose();
            }
        } else if (status == 1) {
            cm.saveReturnLocation("PVP");
            cm.warp(960000000);
            cm.dispose();
        }
    }
}