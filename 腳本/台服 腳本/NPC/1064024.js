function start() {
    cm.sendYesNo("你現在是想離開這裡嗎?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(105200000, 0);
    }
    cm.dispose();
}