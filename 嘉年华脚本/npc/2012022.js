var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.sendOk("船在过一会儿就要开了!请耐心等待吧!");
        cm.safeDispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("你想离开这里吗？？");
    } else if (status == 1) {
        cm.warp(200000131);
        cm.dispose();
    }
}