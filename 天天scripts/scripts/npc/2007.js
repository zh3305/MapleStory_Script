function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("不错的选择。");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("不错的选择。");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("是否跳过新手介绍，直接移动到明珠港？");
        } else if (status == 1) {
            cm.warp(104000000);
            cm.dispose();
        }
    }
}