var status = 0;
var typed=0;
var random = 0;

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
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，欢迎来到充值礼包活动:\r\n达到一定购买额度你可以获得大礼包一份\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前(余额:#r"+cm.getHyPay(1)+"#k):\r\n#b#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[活动]购买礼包		(#k目前状态:#r充值活动#k#b)#k#l\r\n ");
		} else if (status == 1) {
			if (selection == 1) {
			cm.dispose();
			cm.openNpc(9900004,"chongz7");	
			} else if (selection == 2) {
			cm.dispose();
			cm.openNpc(9900001,3001);	
			} else if (selection == 3) {
			if(cm.haveItem(4032521,1)){
			cm.sendOk("您已经办理了传奇理财,无需重复办理,谢谢!!!");
			cm.dispose();
			} else {
                	cm.sendYesNo("您是否要花费#r 1200 #k元的充值金额办理#b 年卡理财 #k。");
			typed = 3;
			}
			} else if (selection == 4) {
			if(cm.haveItem(4032521,1) && cm.getSpace(5) > 2 && cm.getPQLog("理财双倍") == 0){
			cm.gainItem(5210004,1,1); //双倍经验卡 晚 1天权
			cm.gainItem(5210002,1,1); //双倍经验卡 白 1天权
			cm.setPQLog("理财双倍");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日双倍经验卡。");
			cm.dispose();
			} else {
                	cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。\r\n请确认您的特殊背包栏是否空余2个位置。");
			cm.dispose();
			}
			} else if (selection == 5) {
			if(cm.haveItem(4032521,1) && cm.getSpace(5) > 2 && cm.getPQLog("理财双爆") == 0){
			cm.gainItem(5360015,1,1); //双倍爆率卡 1天权
			cm.setPQLog("理财双爆");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日双倍爆率卡。");
			cm.dispose();
			} else {
                	cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。\r\n请确认您的特殊背包栏是否空余2个位置。");
			cm.dispose();
			}
			} else if (selection == 6) {
			if(cm.haveItem(4001753,1) && cm.haveItem(4032521,1)){
			cm.resetEventCount("抽奖");
			cm.resetEventCount("历练");
			cm.resetEventCount("养成");
			cm.resetEventCount("皇陵");
			cm.resetEventCount("罗朱");
			cm.resetEventCount("海盗");
			cm.resetEventCount("鬼节");
			cm.gainItem(4001753,-1);
			cm.sendOk("日常活动任务已经全部重置");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财重置了全部日常活动任务。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您是否办理了传奇理财。\r\n请确认是否拥有#v4001753#日常任务重置物品。");
			cm.dispose();
			}
			} else if (selection == 7) {
			if(cm.haveItem(4032521,1) && cm.getSpace(5) > 2 && cm.getPQLog("理财魔方") == 0){
			cm.gainItem(5062002,3); //高级神奇魔方 x3
			cm.gainItem(5062000,6); //高级神奇魔方 x6
			cm.setPQLog("理财魔方");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日大量神奇魔方。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。\r\n请确认您的特殊背包栏是否空余2个位置。");
			cm.dispose();
			}
			} else if (selection == 8) {
			if(cm.haveItem(4032521,1) && cm.getSpace(2) > 2 && cm.getPQLog("理财卷轴") == 0){
			random = java.lang.Math.floor(Math.random() * 5);
			cm.gainItem(4001254,-1);
			cm.gainItem(2049116,2); //强化混沌卷走 x2
			if(random > 3){
			cm.gainItem(2049122,1); //正向混沌卷轴 x1
			}
			cm.setPQLog("理财卷轴");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日大量卷轴。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。\r\n请确认您的消耗背包栏是否空余2个位置。");
			cm.dispose();
			}
			} else if (selection == 9) {
			if(cm.haveItem(4032521,1) && cm.getPQLog("理财积分") == 0){
			cm.gainPlayerPoints(180); //积分值
			cm.setPQLog("理财积分");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日大量积分值。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。");
			cm.dispose();
			}
			} else if (selection == 10) {
			if(cm.haveItem(4032521,1) && cm.getPQLog("理财活力") == 0){
			cm.gainPlayerEnergy(50); //活力值
			cm.setPQLog("理财活力");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日大量活力值。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。");
			cm.dispose();
			}
			} else if (selection == 11) {
			if(cm.haveItem(4032521,1) && cm.getPQLog("理财抽奖") == 0){
			cm.gainItem(2430069,1); //理财抽奖礼包
			cm.setPQLog("理财抽奖");
			cm.sendOk("请注意查收！");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财领取了每日理财抽奖礼包。");
			cm.dispose();
			}else{
			cm.sendOk("请确认您今天是否已经领取。\r\n请确认您是否办理了传奇理财。");
			cm.dispose();
			}
			}
	    	} else if (status == 2) {
			if(typed == 1){
                	if (cm.getHyPay(1) < 30) {
                	cm.sendNext("您充值金额不足 30 元。");
            		} else if (cm.addHyPay(30) > 0) {
			cm.gainNX(90000);
			cm.gainNX(-90000);
			cm.gainItem(4001753,2); //日常重置物品
			cm.gainItem(4032521,1,7); //理财凭证
			cm.gainItem(1142145,1,7); //VIP勋章 10G
			cm.sendOk("成功办理了周卡理财。\r\n#v4032521##b理财凭证 #v1142145#理财勋章 #v4001753#日常重置物品。\r\n#r注：请保留好以上物品...");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财办理了传奇理财周卡系列。");
			} else {
			cm.sendOk("办理传奇理财出现错误，请反馈给管理员！");
			}
                    	cm.dispose();
			}
			if(typed == 2){
                	if (cm.getHyPay(1) < 120) {
                	cm.sendNext("您充值金额不足 120 元。");
            		} else if (cm.addHyPay(120) > 0) {
			cm.gainNX(360000);
			cm.gainNX(-360000);
			cm.gainItem(4001753,8); //日常重置物品
			cm.gainItem(4032521,1,30); //理财凭证
			cm.gainItem(1142145,1,30); //VIP勋章 10G
			cm.sendOk("成功办理了月卡理财。\r\n#v4032521##b理财凭证 #v1142145#理财勋章 #v4001753#日常重置物品。\r\n#r注：请保留好以上物品...");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财办理了传奇理财月卡系列。");
			} else {
			cm.sendOk("办理传奇理财出现错误，请反馈给管理员！");
			}
                    	cm.dispose();
			}
			if(typed == 3){
                	if (cm.getHyPay(1) < 1200) {
                	cm.sendNext("您充值金额不足 1200 元。");
            		} else if (cm.addHyPay(1200) > 0) {
			cm.gainNX(3600000);
			cm.gainNX(-3600000);
			cm.gainItem(4001753,96); //日常重置物品
			cm.gainItem(4032521,1,365); //理财凭证
			cm.gainItem(1142145,1,365); //VIP勋章 10G
			cm.sendOk("成功办理了年卡理财。\r\n#v4032521##b理财凭证 #v1142145#理财勋章 #v4001753#日常重置物品。\r\n#r注：请保留好以上物品...");
			cm.worldSpouseMessage(0x20,"[传奇理财] 玩家 "+ cm.getChar().getName() +" 在传奇理财办理了传奇理财年卡系列。");
			} else {
			cm.sendOk("办理传奇理财出现错误，请反馈给管理员！");
			}
                    	cm.dispose();
			}
	  }
     }
}