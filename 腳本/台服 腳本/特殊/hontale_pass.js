function start() {
    cm.sendNextS("(前方可以看到闇黑龍王的洞窟. 進去吧.)", 2);
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(240050000);
    }
    cm.dispose();
}