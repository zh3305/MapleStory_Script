var status = 0;
var typed=0;

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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想选择什么样的R.E.D兑换:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#R.E.D兑换简介#l\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##v4310088#R.E.D币：#r"+cm.itemQuantity(4310088)+"#k 个  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##v4001126#枫叶：#r"+cm.itemQuantity(4001126)+"#k 个\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0##b\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[R.E.D]R.E.D币兑换枫叶    (#k目前状态： #r推荐内容#b)#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[R.E.D]枫叶兑换R.E.D币    (#k目前状态： #r推荐内容#b)#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[R.E.D]商店#l");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到R.E.D兑换简介:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition##r\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#R.E.D币兑换成金枫叶 比例为 1 : 1.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#金枫叶兑换成R.E.D币 比例为 1 : 1.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#R.E.D币兑换成金枫叶就能与玩家进行交易.\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#金枫叶兑换成R.E.D币就能购买R.E.D商店道具.");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
                    	cm.dispose();
			cm.openNpc(9900005, 2001);
			} else if (selection == 3) {
			typed=4;
			cm.dispose();
			cm.openNpc(9900005, 2002);
			} else if (selection == 5) {
			cm.dispose();
			cm.openShop(9000201);
			}
	   }
      }
}