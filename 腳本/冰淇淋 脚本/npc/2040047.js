

function start() {
    if (cm.getMapId() != 922010000) {
        cm.sendYesNo("你确定要出去吗?");
    } else {
        if (cm.haveItem(4001022)) {
            cm.removeAll(4001022);
        }
        if (cm.haveItem(4001023)) {
            cm.removeAll(4001023);
        }
        cm.warp(910000000, 0)

        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(910000000, 0);
    }
    cm.dispose();
}