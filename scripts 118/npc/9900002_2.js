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
        var selStr = "您好，欢迎来到MapleWing:\r\n\r\n#b#L0#游戏道具#l\r\n#L5#各种椅子#l\r\n#L4#绝版点装#l\r\n#L6#各种喇叭#l\r\n#L7#洗点卷轴#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10);
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