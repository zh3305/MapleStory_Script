var status = -1;

function start() {
    cm.sendYesNo("你现在是想离开这里吗?");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    cm.warp(220080000);
    cm.dispose();
}
