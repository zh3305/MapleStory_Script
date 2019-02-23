/*
 * 芬芬时尚潮流
 * 积分商店
 */
var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var eff1 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var kkk5 ="#fEffect/ItemEff/1102672/effect/swingP1/0#";

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
    event = cm.getEventManager("Qianggou");
    if (status == 0) {
		var selStr = "                 " + eff1 + " 在线:#r"+cm.getOnlineTime()+"#k		" + eff1 + " 余额：#r"+cm.getHyPay(1)+"#k\r\n" + kkk5 + "#b赞助余额可在,拍卖-充值中心-购买点卷礼包等！\r\n";
		selStr += "#L0#" + eff1 + "#b #d在线时间#k		[#r兑换余额#k]#l#k\r\n\r\n";
		//selStr += "#L1#" + eff1 + "#b 活力兑换		[卷轴-饰品-装备-副手]#l#k\r\n";		
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openNpc(9900002, "hqye1");
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9900001, "huoli");
            break;				
        }
    }
}