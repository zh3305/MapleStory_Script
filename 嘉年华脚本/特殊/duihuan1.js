
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
	if (cm.itemQuantity(4001126)>0) {
		cm.sendNext("你身上怎么会有#v4001126#,是不是你偷得....\r\n开个玩笑，哈哈，感谢你带来了#v4001126#，需要我帮你换成游戏币吗？");
	} else {
		cm.sendOk("我这辈子最恨的就是小偷了");
        	cm.dispose();
        	return;
	}
    } else if (status == 1) {
	cm.sendGetNumber("你要兑换多少个呢?(#r#v4001126#=10000游戏币#k)",cm.itemQuantity(4001126),1,cm.itemQuantity(4001126));
    } else if (status == 2) {
	sl = selection;
	cm.sendYesNo("你真的要兑换#r" + sl + "#k个#v4001126#吗？\r\n兑换后你可以获得#r" + (sl * 10000) + "#k游戏币");
    } else if (status == 3) {
	if (cm.itemQuantity(4001126)>=sl){
		cm.gainMeso(-sl * 10000);
		cm.gainItem(4001126, -sl);
		cm.sendOk("兑换成功");
	            cm.worldSpouseMessage(0x19,"『冒险岛运营员』：恭喜[" + cm.getChar().getName() + "]使用 "+ sl +"个枫叶换取 "+ sl * 10000 +"游戏币");
	} else {
		cm.sendOk("您确定有#r" + sl  + "#k个#v4001126#吗？");
	}
	cm.dispose();
    }
}