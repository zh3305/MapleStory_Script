/* 芬芬时尚潮流*/
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
        var selStr = "#r您好，在我这里可以合成至高无上的140装备#l:\r\n\r\n#b#L0#查看说明#l\r\n#L1#合成140装备#l\r\n#L2#分解140装备#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.sendOk("#b合成条件如下。所需要物品：\r\n1：#v4310002#20个（各城市BOSS出）\r\n2：相对应的130级装备（比如#v1442117#兑换的是#v1442116#.以此类推）PS：130装备出处：进阶黑龙.PB.女皇.\r\n3：冒险币5E\r\n4：只要满足以上3个条件即可合成");
            cm.dispose();
            break;
        case 1://合成140
            cm.dispose();
            cm.openNpc(9900002,26);
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