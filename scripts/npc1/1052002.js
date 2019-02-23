var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("好东西容易损坏.偶尔去修修装备比较好.");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("暂时只接收耐久度修理工作.\r\n想修复耐久度么?");
    } else if (status == 1) {
        cm.sendRepairWindow();
        cm.dispose();
    }
}