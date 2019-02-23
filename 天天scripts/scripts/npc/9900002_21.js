/*
 *Mary
 */
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
        var selStr = "#r您好，欢迎来到MapleWing#l:\r\n\r\n#b#L0#美容美发#l\r\n#L1#皇家发型#l\r\n#L2#机器人美容美发#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 23);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1012117);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1012123);
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1) >= 50000) {
	    	cm.gainNX(- 50000);
		cm.gainItem(5060003,1);
	    cm.sendOk("成功购买花生机 祝贺你抽到好东西!");
	    cm.worldMessage(cm.getChar().getName() + "在点卷商店购买了花生机 ,让我们一起祝贺他转到好货色。");
	    cm.dispose();
	} else {
	    cm.sendOk("你没有5W点卷。");
	    cm.dispose();
            break;
		}
        }
    }
}