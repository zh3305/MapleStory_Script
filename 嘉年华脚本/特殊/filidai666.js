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
			text += "#b#L2#购买小福袋套餐#l\r\n";
			text += "#b#L3#购买巨大福袋套餐#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1) {
				var text = "#e#d什么是小福袋套餐？#n#k\r\n";
				text += "\t购买小福袋套餐可以立刻获得#r永久坐骑[暗光龙]#k，#r20#k张#b无损高级装备强化卷#k，#r10#k张#b#z2049135##k，并发放#r30#k个#b福袋#k，每个#b福袋#k打开可获得#r50#k#b兔币#k，每天只能使用一个。售价为#b15W点卷#k。\r\n";
				text += "#e#d什么是巨大福袋套餐？#n#k\r\n";
				text += "\t购买巨大福袋套餐可以立刻获得#r永久坐骑[幻龙]#k，不管是否拥有滑翔技能，都可以进行滑翔，#r30#k张#b无损高级装备强化卷#k，#r10#k张#b#z2049137##k，1个#b惊喜箱子#k，打开#b惊喜箱子#k可能随机获得5张星火或者5张惊人武器卷或者暴君装备一件，每个#b巨大福袋#k打开可获得#r100#k#b兔币#k，每天只能使用一个。售价为#b30W点卷#k。\r\n";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 2) {
				cm.sendYesNo("是否要花费#r15W#k点卷购买小福袋套餐？");
				typed=1;
			} else if (selection == 3) {
				cm.sendYesNo("是否要花费#r30W#k点卷购买巨大福袋套餐？");
				typed=2;
			}
		} else if (status == 2) {
			if (typed==1) {				
				if (cm.getPlayer().getCSPoints(1) >= 150000) {// && !cm.haveItem(2432529)) {
/*					if (cm.getPQLog("小福袋套餐")==-1) {
						cm.sendOk("一个账号只能办理一次#b小福袋#k套餐，无法再办理。");
						cm.dispose();
						return;
					}*/
					cm.gainItem(2049135, 10);
					cm.gainItem(2432529, 30);
					cm.gainItem(2049323, 20);
					cm.gainItem(2430297, 1);
					cm.gainNX(-150000);
				cm.worldSpouseMessage(0x20, "『福袋套餐』 : 有钱不任性，玩家 " + cm.getChar().getName() + " 办理了小福袋理财套餐.");
					cm.getPlayer().dropMessage(1, "购买成功！");
					cm.setPQLog("小福袋套餐", -2);
					cm.dispose();
				} else {
					cm.sendOk("购买失败，您的点卷不足或者身上还有未使用完的福袋，无法购买！");
					cm.dispose();
				}
			} else if (typed==2) {
				if (cm.getPlayer().getCSPoints(1) >= 300000) { //&& !cm.haveItem(2431481)) {
					/*if (cm.getPQLog("巨大福袋套餐")==-1) {
						cm.sendOk("一个账号只能办理一次#b巨大福袋#k套餐，无法再办理。");
						cm.dispose();
						return;
					}*/
					cm.gainItem(2049137, 10);
					cm.gainItem(2431481, 30);
					cm.gainItem(2049323, 30);
					cm.gainItem(2431137, 1);
					cm.gainItem(2431989, 1);
					cm.gainNX(-300000);
				cm.worldSpouseMessage(0x20, "『福袋套餐』 : 有钱不任性，玩家 " + cm.getChar().getName() + " 办理了大福袋理财套餐.");
					cm.setPQLog("巨大福袋套餐", -2);
					cm.getPlayer().dropMessage(1, "购买成功！");
					cm.dispose();
				} else {
					cm.sendOk("购买失败，您的点卷不足或者身上还有未使用完的巨大福袋，无法购买！");
					cm.dispose();
				}
			}
		}
   }
}