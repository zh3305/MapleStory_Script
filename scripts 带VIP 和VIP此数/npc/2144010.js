function start() {
    cm.sendYesNo("胆小的人类，这样就怕了吗，你承认你的弱小了吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(272020110);
    }
    cm.dispose();
}