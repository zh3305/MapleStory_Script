
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
	if (cm.itemQuantity(4032339)>0) {
		cm.sendNext("你身上怎么会有#v4032339#,是不是你偷得....\r\n开个玩笑，哈哈，感谢你带来了#v4032339#，需要我帮你换成元宝吗？");
	} else {
		cm.sendOk("我这辈子最恨的就是小偷了");
        	cm.dispose();
        	return;
	}
    } else if (status == 1) {
	cm.sendGetNumber("你要兑换多少个呢?(#r#v4032339#=1000元宝#k)",cm.itemQuantity(4032339),1,cm.itemQuantity(4032339));
    } else if (status == 2) {
	sl = selection;
	cm.sendYesNo("你真的要兑换#r" + sl + "#k个#v4032339#吗？\r\n兑换后你可以获得#r" + (sl * 1000) + "#k元宝");
    } else if (status == 3) {
	if (cm.itemQuantity(4032339)>=sl){
		cm.addHyPay(-sl * 1000);
		cm.gainItem(4032339, -sl);
		cm.sendOk("兑换成功");
	} else {
		cm.sendOk("您确定有#r" + sl + "#k个#v4032339#吗？");
	}
	cm.dispose();
    }
}