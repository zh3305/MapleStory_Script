var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r#v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006#\r\n您有红蜗牛壳:#r " + cm.getItemQuantity(4000016) + " #k#v4000016#   请查看背包是否有空位!  \r\n    #L1#红蜗牛壳兑换中介   (#r400个#v4000016# = 1个#v4000463##k)#l\r\n    #L2#红蜗牛壳兑换中介   (#r4000个#v4000016#  = 10个#v4000463##k)#l   \r\n\r\n#v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.haveItem(4000016,400)) {
		cm.gainItem(4000016, -400);
                cm.gainItem(4000463,1);
                cm.sendOk("蜗牛壳兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有红蜗牛壳x200,我不能与你兑换");
            }
            break;
        case 2:
            if (cm.haveItem(4000016,4000)) {
		cm.gainItem(4000016, -4000);
                cm.gainItem(4000463,10);
                cm.sendOk("蜗牛壳兑换成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有红蜗牛壳x2000,我不能与你兑换");
            }
            break;
        }
        cm.dispose();
    }
}