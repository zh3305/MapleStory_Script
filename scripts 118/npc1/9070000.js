var status = -1;

function action(mode, type, selection) {
    if (cm.isCanPvp()) {
        cm.sendPVPWindow();
    } else {
        cm.sendNext("Pvp系统暂未开放.");
    }
    cm.dispose();
}