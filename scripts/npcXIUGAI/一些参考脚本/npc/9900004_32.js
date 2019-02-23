
var status = 0;
var sl = 0;//兑换数量

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
	if (cm.itemQuantity(4000313)>0) {
		cm.sendNext("如果你能带来#v4000313#,我可以给你1W点点卷作为交易\r\n想要兑换成点卷吗？");
	} else {
		cm.sendOk("如果你能带来#v4000313#,我可以给你1W点点卷作为交易");
        	cm.dispose();
        	return;
	}
    } else if (status == 1) {
	cm.sendGetNumber("你要兑换多少个呢?(#r#v4000313#=1W点卷#k)",cm.itemQuantity(4000313),1,cm.itemQuantity(4000313));
    } else if (status == 2) {
	sl = selection;
	cm.sendYesNo("你真的要兑换#r" + sl + "#k个#v4000313#吗？\r\n兑换后你可以获得#r" + (sl * 1) + "w#k点卷");
    } else if (status == 3) {
	if (cm.itemQuantity(4000313)>=sl){
		cm.gainNX(sl * 10000);
		cm.gainItem(4000313, -sl);
		cm.sendOk("兑换成功");
	} else {
		cm.sendOk("您确定有#r" + sl + "#k个#v4000313#吗？");
	}
	cm.dispose();
    }
}