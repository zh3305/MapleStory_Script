var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } else if (status == 0) {
		var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到年终充值礼包活动:\r\n  达到一定赞助额度你可以获得大礼包一份\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#r联系客服获取充值礼包#k)#b\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n";
		//#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r50#b赞助礼包#l\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r100#b  赞助礼包#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看  #r500#b  赞助礼包#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r1000#b 赞助礼包#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r3000#b 赞助礼包#l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r6000#b 赞助礼包#l\r\n\r\n   #r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#注：点击领取后自动把余额转换为点卷";
        selStr += "#L0#" + eff + "#b查看#k#r50元#k   #b购买礼包    [内大量道具+#k#r15#k#b万点卷]#k#l\r\n";
		selStr += "#L1#" + eff + "#b查看#k#r100元#k  #b购买礼包	[内大量道具+#k#r30#k#b万点卷]#k#l\r\n";
		selStr += "#L2#" + eff + "#b查看#k#r300元#k  #b购买礼包	[内大量道具+#k#r150#k#b万点卷]#k#l\r\n";
		selStr += "#L3#" + eff + "#b查看#k#r500元#k  #b购买礼包	[内大量道具+#k#r300#k#b万点卷]#k#l\r\n";
		selStr += "#L4#" + eff + "#b查看#k#r1000元#k #b购买礼包	[内大量道具+#k#r600#k#b万点卷]#k#l\r\n";
		selStr += "#L5#" + eff + "#b查看#k#r3000元#k #b购买礼包	[内大量道具+#k#r1800#k#b万点卷]#k#l\r\n";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if(cm.getEventCount("50赞助") == 0){
		   if(cm.getHyPay(1) < 5000 && (cm.getSpace(1) < 4||cm.getSpace(2) < 4||cm.getSpace(3) < 4||cm.getSpace(4) < 4)){
			cm.sendOk("请确认账号余额是否达到50赞助金额\r\n请确认装备背包栏至少空出4格以上位置\r\n请确认消耗背包栏至少空出4格以上位置\r\n请确认其它背包栏至少空出4格以上位置\r\n请确认设置背包栏至少空出4格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(5000) > 0){
				cm.gainNX(150000);
				cm.gainItem(2431987,1);//周年庆50%卷轴箱子 代码测试
		        cm.gainItem(2049124,2);//正向混沌卷轴X2
		        cm.gainItem(2049116,2);//强化混沌卷轴X2
		        cm.gainItem(2049313,1);//5星装备强化卷轴X1
		        cm.gainItem(2049752,1);//S级潜能卷轴 30% X1
		        cm.setEventCount("50赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了50赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过50赞助礼包。");
		        cm.dispose();
		   }
            break;
        case 1:
		if(cm.getEventCount("100赞助") == 0){
		   if(cm.getHyPay(1) < 10000 && (cm.getSpace(1) < 9||cm.getSpace(2) < 9 ||cm.getSpace(3) < 9 ||cm.getSpace(4) < 9 )){
			cm.sendOk("请确认账号余额是否达到100赞助金额\r\n请确认装备背包栏至少空出9格以上位置\r\n请确认消耗背包栏至少空出9格以上位置\r\n请确认其它背包栏至少空出9格以上位置\r\n请确认设置背包栏至少空出9格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(10000) > 0){
				cm.gainNX(300000);
				cm.gainItem(2431987,2);//周年庆50%卷轴箱子 代码测试
		        cm.gainItem(2049124,5);//正向混沌卷轴X2
		        cm.gainItem(2049116,5);//强化混沌卷轴X2
		        cm.gainItem(2049313,1);//5星装备强化卷轴X1
		        cm.gainItem(2049752,2);//S级潜能卷轴 30% X1
		        cm.gainItem(3010659,1);//巴士车站椅子 X1
				cm.gainItem(3010608,1);//完美的名画椅子X1
				cm.gainItem(1142178,1);//冒险岛形象大使X1
				cm.gainItem(2431988,1);//戒指名片箱子 X1 
		        cm.setEventCount("100赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了100赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过100赞助礼包。");
		        cm.dispose();
		   }
            break;
        case 2:
		if(cm.getEventCount("300赞助") == 0){
		   if(cm.getHyPay(1) < 50000 && (cm.getSpace(1) < 12||cm.getSpace(2) < 12 ||cm.getSpace(3) < 12 ||cm.getSpace(4) < 12 )){
			cm.sendOk("请确认账号余额是否达到300赞助金额\r\n请确认装备背包栏至少空出12格以上位置\r\n请确认消耗背包栏至少空出12格以上位置\r\n请确认其它背包栏至少空出12格以上位置\r\n请确认设置背包栏至少空出12格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(50000) > 0){
				cm.gainNX(1500000);
				cm.gainItem(2431987,4);//周年庆50%卷轴箱子 代码测试
		        cm.gainItem(2049124,5);//正向混沌卷轴X2
		        cm.gainItem(2049116,5);//强化混沌卷轴X2
		        cm.gainItem(2049313,1);//5星装备强化卷轴X1
		        cm.gainItem(2049752,2);//S级潜能卷轴 30% X1
		        cm.gainItem(3010659,1);//巴士车站椅子 X1
				cm.gainItem(3010608,1);//完美的名画椅子X1
				cm.gainItem(3010590,1);//酸甜点心椅子X1
				cm.gainItem(1142178,1);//冒险岛形象大使X1
				cm.gainItem(1112915,1);//蓝调戒指X1
				cm.gainItem(2431988,1);//150随机装备箱子X1
		        cm.setEventCount("300赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了300赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过300赞助礼包。");
		        cm.dispose();
		   }
            break;
        case 3://充值网站
		if(cm.getEventCount("500赞助") == 0){
		   if(cm.getHyPay(1) < 100000 && (cm.getSpace(1) < 15||cm.getSpace(2) < 15 ||cm.getSpace(3) < 15 ||cm.getSpace(4) < 15 )){
			cm.sendOk("请确认账号余额是否达到500赞助金额\r\n请确认装备背包栏至少空出15格以上位置\r\n请确认消耗背包栏至少空出15格以上位置\r\n请确认其它背包栏至少空出15格以上位置\r\n请确认设置背包栏至少空出15格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(100000) > 0){
				cm.gainNX(3000000);
				cm.gainItem(2431990,3);//周年庆100%卷轴箱子 代码测试
		        cm.gainItem(2049124,50);//正向混沌卷轴X2
		        cm.gainItem(2049116,50);//强化混沌卷轴X2
		        cm.gainItem(2049313,4);//5星装备强化卷轴X1
		        cm.gainItem(2049752,2);//S级潜能卷轴 30% X1
		        cm.gainItem(3010661,1);//欢乐相框椅子 X1
				cm.gainItem(3010608,1);//完美的名画椅子X1
				cm.gainItem(3010590,1);//酸甜点心椅子X1
				cm.gainItem(1142179,1);//王座收藏家勋章X1
				cm.gainItem(1142178,1);//冒险岛形象大使X1
				cm.gainItem(1112915,2);//蓝调戒指X1
				cm.gainItem(2431988,1);//150随机装备箱子X1
				cm.gainItem(2431991,1);//150随机装备箱子X1
				cm.gainItem(2431992,1);//150随机装备箱子X1
				cm.gainItem(2431995,1);//150随机装备箱子X1
		        cm.setEventCount("500赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了500赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过500赞助礼包。");
		        cm.dispose();
		   }
            break;
        case 4://管理雇佣商店
		if(cm.getEventCount("1000赞助") == 0){
		   if(cm.getHyPay(1) < 300000 && (cm.getSpace(1) < 23||cm.getSpace(2) < 23 ||cm.getSpace(3) < 23 ||cm.getSpace(4) < 23 )){
			cm.sendOk("请确认账号余额是否达到1000赞助金额\r\n请确认装备背包栏至少空出23格以上位置\r\n请确认消耗背包栏至少空出23格以上位置\r\n请确认其它背包栏至少空出23格以上位置\r\n请确认设置背包栏至少空出23格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(300000) > 0){
				cm.gainNX(9000000);
				cm.gainItem(2431990,5);//周年庆100%卷轴箱子 代码测试
				cm.gainItem(2049137,50);//周年庆100%卷轴箱子 代码测试
		        cm.gainItem(2049142,50);//正向混沌卷轴X2
		        cm.gainItem(2049116,50);//强化混沌卷轴X2
		        cm.gainItem(2049313,8);//5星装备强化卷轴X1
		        cm.gainItem(2049752,4);//S级潜能卷轴 30% X1
				cm.gainItem(1112140,1);//S级潜能卷轴 30% X1
				cm.gainItem(1112787,1);//S级潜能卷轴 30% X1
				cm.gainItem(1003698,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010509,1);//S级潜能卷轴 30% X1
				cm.gainItem(3700071,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010621,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010670,1);//S级潜能卷轴 30% X1
				cm.gainItem(2431991,2);//S级潜能卷轴 30% X1
		        cm.gainItem(3010661,1);//欢乐相框椅子 X1
				cm.gainItem(3010608,1);//完美的名画椅子X1
				cm.gainItem(3010590,1);//酸甜点心椅子X1
				cm.gainItem(1142179,1);//王座收藏家勋章X1
				cm.gainItem(1112915,3);//蓝调戒指X1
				cm.gainItem(2431988,1);//150随机装备箱子X1
				cm.gainItem(2431991,1);//150随机装备箱子X1
				cm.gainItem(2431992,1);//150随机装备箱子X1
				cm.gainItem(2431995,2);//150随机装备箱子X1
		        cm.setEventCount("1000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了1000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过1000赞助礼包。");
		        cm.dispose();
		   }
            break;
        case 5://累积充值
		if(cm.getEventCount("3000赞助") == 0){
		   if(cm.getHyPay(1) < 600000 && (cm.getSpace(1) < 23||cm.getSpace(2) < 23 ||cm.getSpace(3) < 23 ||cm.getSpace(4) < 23 )){
			cm.sendOk("请确认账号余额是否达到3000赞助金额\r\n请确认装备背包栏至少空出23格以上位置\r\n请确认消耗背包栏至少空出23格以上位置\r\n请确认其它背包栏至少空出23格以上位置\r\n请确认设置背包栏至少空出23格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(600000) > 0){
				cm.gainNX(18000000);
				cm.gainItem(2431994,5);//
				cm.gainItem(2049137,100);//周年庆100%卷轴箱子 代码测试
		        cm.gainItem(2049142,100);//正向混沌卷轴X2
		        cm.gainItem(2049116,100);//强化混沌卷轴X2
		        cm.gainItem(2049313,16);//5星装备强化卷轴X1
		        cm.gainItem(2049752,6);//S级潜能卷轴 30% X1
				cm.gainItem(1112139,1);//S级潜能卷轴 30% X1
				cm.gainItem(1112246,1);//S级潜能卷轴 30% X1
				cm.gainItem(1112786,1);//S级潜能卷轴 30% X1
				cm.gainItem(1003697,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010508,1);//S级潜能卷轴 30% X1
				cm.gainItem(3700070,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010658,1);//S级潜能卷轴 30% X1
				cm.gainItem(3010594,1);//S级潜能卷轴 30% X1
		        cm.gainItem(3010520,1);//欢乐相框椅子 X1
				cm.gainItem(2431991,3);//完美的名画椅子X1
				cm.gainItem(1672027,1);//酸甜点心椅子X1
				cm.gainItem(1142179,1);//王座收藏家勋章X1
				cm.gainItem(1112915,4);//蓝调戒指X1
				cm.gainItem(2431988,1);//150随机装备箱子X1
				cm.gainItem(2431289,1);//150随机装备箱子X1
				cm.gainItem(2431992,1);//150随机装备箱子X1
				cm.gainItem(2431993,2);//150随机装备箱子X1
				cm.gainItem(2431995,5);//150随机装备箱子X1
		        cm.setEventCount("3000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[赞助礼包] 玩家 "+ cm.getChar().getName() +" 领取了3000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("充值余额不足,请充值后领取！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过3000赞助礼包。");
		        cm.dispose();
		   }
            break;
			
	}
    }
}