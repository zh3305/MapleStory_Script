function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("还不想走吗？好的，如果你想回去，可以随时来找我。");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("还不想走吗？好的，如果你想回去，可以随时来找我。");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("你想回村里去吗？好的，我可以把你送回原来的村庄。");
        } else if (status == 1) {
            cm.sendNext("找到了。我马上把你送回去。");
        } else if (status == 2) {
            var returnMap = cm.getSavedLocation("PVP");
            cm.clearSavedLocation("PVP");
            if (returnMap < 0) {
                returnMap = 100000000;
            }
            cm.warp(returnMap);
            cm.dispose();
        }
    }
}