function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("这个地方经常有变异的蜈蚣出现，为了确保人民群众的安全，我们警察几乎都出动来维护这个地图。\r\n\r\n\r\n#r如果再继续往前进那将会很危险，你已经做好准备了吗？#k");
        } else if (status == 1) {
           if (cm.haveItem(4031289,1)) {
               cm.warp(701010321,0);
               cm.dispose();
           } else {
               cm.sendOk("对不起！我不能让你进去。你必须要在杂货商店购买 获得 #v4031289# 我才可以让你进去。");
               cm.dispose();
           }
       }
    }
}