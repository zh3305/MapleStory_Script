var status = -1;
var typed = 0;
var transId = 4031997;
var icon ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
//"#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head+"亲爱的#b#e#h ##n#k，欢迎来到点卷中介所，需要什么帮助吗？\r\n\r\n";
		text+="\t当前点卷余额：#r"+cm.getPlayer().getCSPoints(1)+"#k点\r\n";
		text+="\t当前#t"+transId+"#数量：#r"+cm.getItemQuantity(transId)+"#k个\r\n";
		text+="\t当前#t4310014#数量：#r"+cm.getItemQuantity(4310014)+"#k个\r\n\r\n";
		text+="#b#L5#"+icon+" 了解点卷中介说明#l\r\n";
		text+="#L3#"+icon+" 点卷兑换雪花币#l\r\n"
		text+="#L2#"+icon+" 点卷兑换蘑菇币#l\r\n";
		text+="#L1#"+icon+" 蘑菇金币兑换点卷#l\r\n";
		text+="#L4#"+icon+" 雪花币兑换点卷#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		if (selection == 5) {
			status = -1;
			cm.sendSimple("1个#b#t"+transId+"##k可以兑换#r950点卷#k，#r1000点卷#k可以兑换1个#b#t"+transId+"##k。#b#t"+transId+"##k可用于玩家之间的交易与贩售。同时点卷还可以兑换雪花币，#r2000点卷#k兑换#r1雪花币#k");
		} else if (selection == 1) {
			var maxTimes = cm.getItemQuantity(transId);
			cm.sendGetNumber("#d#e<蘑菇币兑换点卷>#n#k\r\n当前最多可以兑换#r"+(maxTimes*950)+"#k点卷，最多输入#r"+maxTimes+"#k。\r\n请输入兑换的#b#t"+transId+"##k数量:\r\n兑换比例为 1 : 950\r\n", 1, 1, maxTimes);
		} else if (selection == 2) {
			var maxTimes = Math.floor(cm.getPlayer().getCSPoints(1)/1000);
			if (maxTimes>300)
				maxTimes = 300;
			cm.sendGetNumber("#d#e<点卷兑换蘑菇币>#n#k\r\n本次最多可以兑换#r"+maxTimes+"#k个#b#t"+transId+"##k\r\n请输入兑换的#b#t"+transId+"##k数量:\r\n兑换比例为 1000 : 1\r\n", 1, 1, maxTimes);
		} else if (selection == 3) {
			var maxTimes = Math.floor(cm.getPlayer().getCSPoints(1)/2000);
			if (maxTimes>1000)
				maxTimes = 1000;
			cm.sendGetNumber("#d#e<点卷兑换雪花币>#n#k\r\n本次最多可以兑换#r"+maxTimes+"#k个#b#t4310014##k\r\n请输入兑换的#b#t4310014##k数量:\r\n兑换比例为 2000 : 1\r\n", 1, 1, maxTimes);
		} else if (selection == 4) {
			var maxTimes = cm.getItemQuantity(4310014);
			cm.sendGetNumber("#d#e<雪花币兑换点卷>#n#k\r\n当前最多可以兑换#r"+(maxTimes*1000)+"#k点卷，最多输入#r"+maxTimes+"#k。\r\n请输入兑换的#b#t4310014##k数量:\r\n兑换比例为 1 : 1000\r\n", 1, 1, maxTimes);
		}
	} else if (status == 2) {
		var quantity = Math.floor(selection);
		if (quantity <= 0) {
			cm.sendOk("Error");
			cm.dispose();
			return;
		}
		if (typed == 1) {
			if (cm.haveItem(transId, quantity)) {
				status=-1;
				var nx = 950*quantity;
				cm.gainItem(transId, -quantity);
				cm.gainNX(nx);
				cm.sendSimple("成功兑换了#r"+nx+"#k点卷");
			} else {
				cm.sendOk("你好像没有那么多#b#t"+transId+"##k哦！");
				cm.dispose();
			}
		} else if (typed == 2) {
			if (cm.getSpace(4)<1) {
				status = -1;
				cm.sendSimple("您的背包空间不足，请整理背包中其他栏的空间。");
			} else {
				var maxNumber = quantity*1000;
				if (cm.getPlayer().getCSPoints(1)>=maxNumber) {
					status =-1;
					cm.gainItem(transId, quantity);
					cm.gainNX(-maxNumber);
					cm.sendSimple("成功兑换了#r"+quantity+"#k个蘑菇币");
				} else {
					cm.sendOk("你好像没有那么多点卷哦！");
					cm.dispose();
				}
			}
		} else if (typed == 3) {
			if (cm.getSpace(4)<1) {
				status = -1;
				cm.sendSimple("您的背包空间不足，请整理背包中其他栏的空间。");
			} else {
				var maxNumber = quantity*2000;
				if (cm.getPlayer().getCSPoints(1)>=maxNumber) {
					status =-1;
					cm.gainItem(4310014, quantity);
					cm.gainNX(-maxNumber);
					cm.sendSimple("成功兑换了#r"+quantity+"#k个雪花币");
				} else {
					cm.sendOk("你好像没有那么多点卷哦！");
					cm.dispose();
				}
			}
		} else if (typed == 4) {
			if (cm.haveItem(4310014, quantity)) {
				status=-1;
				var nx = 1000*quantity;
				cm.gainItem(4310014, -quantity);
				cm.gainNX(nx);
				cm.sendSimple("成功兑换了#r"+nx+"#k点卷");
			} else {
				cm.sendOk("你好像没有那么多#b#t4310014##k哦！");
				cm.dispose();
			}
		}
	}
}