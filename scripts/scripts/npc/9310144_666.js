var status = 0;
var typed = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var text = "你要购买超值福袋吗？\r\n";
			text += "#b#L1#了解什么是福袋#l\r\n";
			text += "#b#L2#购买小福袋套餐[300雪花币]#l\r\n";
			text += "#b#L3#购买巨大福袋套餐[500雪花币]#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1) {
				var text = "#e#d什么是小福袋套餐？#n#k\r\n";
				text += "\t购买小福袋套餐可以立刻获得#r永久坐骑[暗光龙]#k，#r45#k张#b无损高级装备强化卷#k，并发放#r30#k个#b福袋#k，每个#b福袋#k打开可获得#r15#k个#b雪花币#k，每天只能使用一个。总价值高达#e#r800元宝#k#n！售价为#b300雪花币#k。\r\n";
				text += "#e#d什么是巨大福袋套餐？#n#k\r\n";
				text += "\t购买巨大福袋套餐可以立刻获得#r永久坐骑[幻龙]#k，不管是否拥有滑翔技能，都可以进行滑翔，#r75#k张#b无损高级装备强化卷#k，并发放#r30#k个#b巨大福袋#k，每个#b巨大福袋#k打开可获得#r25#k个#b雪花币#k，每天只能使用一个。总价值高达#e#r1300元宝#k#n！售价为#b500雪花币#k。\r\n";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 2) {
				cm.sendYesNo("是否要花费#r300#k雪花币购买小福袋套餐？");
				typed=1;
			} else if (selection == 3) {
				cm.sendYesNo("是否要花费#r500#k雪花币购买巨大福袋套餐？");
				typed=2;
			}
		} else if (status == 2) {
			var paylog = cm.getSevenDayPayLog(7);
			var totalPay = 0;
			for(i=0; i<7; i++) {
				totalPay+=parseInt(paylog.get(i));
			}
			if (typed==1) {
				if (totalPay<300) {
					cm.sendOk("您最近七天的充值累计金额为：#r"+totalPay+"#k元，未达到#r300#k元，无法办理小福袋套餐。");
					cm.dispose();
					return;
				}
								
				if (cm.haveItem(4310014, 300) && !cm.haveItem(2432529)) {
					if (cm.getBossLogAcc("小福袋套餐")==-1) {
						cm.sendOk("一个账号只能办理一次#b小福袋#k套餐，无法再办理。");
						cm.dispose();
						return;
					}
					cm.gainItem(2432529, 30);
					cm.gainItem(2049323, 45);
					cm.gainItem(2430297, 1);
					cm.gainItem(4310014, -300);
					cm.worldMessage(0x18, "『福袋套餐』 : 有钱不任性，玩家 " + cm.getChar().getName() + " 办理了小福袋理财套餐.");
					cm.getPlayer().dropMessage(1, "购买成功！");
					cm.setBossLogAcc("小福袋套餐", -2);
					cm.dispose();
				} else {
					cm.sendOk("购买失败，您的雪花币不足或者身上还有未使用完的福袋，无法购买！");
					cm.dispose();
				}
			} else if (typed==2) {
				if (totalPay<500) {
					cm.sendOk("您最近七天的充值累计金额为：#r"+totalPay+"#k元，未达到#r500#k元，无法办理巨大福袋套餐。");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4310014, 500) && !cm.haveItem(2431481)) {
					if (cm.getBossLogAcc("巨大福袋套餐")==-1) {
						cm.sendOk("一个账号只能办理一次#b巨大福袋#k套餐，无法再办理。");
						cm.dispose();
						return;
					}
					cm.gainItem(2431481, 30);
					cm.gainItem(2049323, 75);
					cm.gainItem(2431137, 1);
					cm.gainItem(4310014, -500);
					cm.worldMessage(0x18, "『福袋套餐』 : 有钱不任性，玩家 " + cm.getChar().getName() + " 办理了巨大福袋理财套餐.");
					cm.setBossLogAcc("巨大福袋套餐", -2);
					cm.getPlayer().dropMessage(1, "购买成功！");
					cm.dispose();
				} else {
					cm.sendOk("购买失败，您的雪花币不足或者身上还有未使用完的巨大福袋，无法购买！");
					cm.dispose();
				}
			}
		}
   }
}