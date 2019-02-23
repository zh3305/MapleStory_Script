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
        var selStr = "亲爱的#r" + cm.getChar().getName() + "#k你好，我是聚宝盆！#r\r\n#L0#金币兑换\r\n#L1#武器回收\r\n#L2#装备回收\r\n#L3#Boss任务重置";
 cm.sendSimple(selStr);
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 0:
            cm.dispose();
	    cm.sendOk("敬请期待！");
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002,15);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,16);
            break;
        case 3:
            cm.dispose();
	    cm.sendOk("敬请期待！");
            break;
        }
    }
}