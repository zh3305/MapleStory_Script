/*
 * 芬芬时尚潮流
 * 枫叶兑换R.E.D
 */
var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var eff1 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
		var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想选择什么样的R.E.D兑换:\r\n";
		selStr += "#L0#" + eff1 + "#rR.E.D兑换简介#l#k\r\n\r\n";
		selStr += "	" + eff1 + "#v4310088##z4310088#：#r" + cm.getItemQuantity(4310088) + "#k个		#v4001126##z4001126#：#r" + cm.getItemQuantity(4001126) + "#k个\r\n\r\n";
		selStr += "#L1#" + eff1 + "#b[R.E.D]R.E.D币兑换枫叶		(#k目前状态:#r推荐内容#b)#l\r\n";
		selStr += "#L2#" + eff1 + "#b[R.E.D]枫叶兑换R.E.D币		(#k目前状态:#r推荐内容#b)#l\r\n";	
		selStr += "#L3#" + eff1 + "#b打开R.E.D商店				(#k目前状态:#r推荐内容#b)#l\r\n\r\n";				
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，欢迎来到R.E.D兑换简介:\r\n\r\n#r" + eff1 + "R.E.D币兑换成金枫叶 比例为 1 : 1\r\n" + eff1 + "金枫叶兑换成R.E.D币 比例为 1 : 1\r\n" + eff1 + "R.E.D币兑换成金枫叶就能与玩家进行交易\r\n" + eff1 + "金枫叶兑换成R.E.D币就能购买R.E.D商店道具#l");
			cm.dispose();
			break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002,51);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,51);
            break;
        case 3:
			cm.dispose();
			cm.openShop(9000201);
            break;				
        }
    }
}