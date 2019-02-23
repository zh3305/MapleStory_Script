var status = 0;
var typed=0;
var typed1=0;
var random = java.lang.Math.floor(Math.random() * 9 + 1);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0 || mode == 0 && status == 2) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到年终充值礼包活动:\r\n  达到一定赞助额度你可以获得大礼包一份\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)#b\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r100#b  赞助礼包#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r500#b  赞助礼包#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r1000#b 赞助礼包#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r3000#b 赞助礼包#l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r6000#b 赞助礼包#l\r\n#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r10000#b赞助礼包#l\r\n\r\n   #r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#注：点击领取后自动把余额转换为点卷");
		} else if (status == 1) {
			if (selection == 1) {
			cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到活动专栏简介:\r\n  活动专栏提供所有的线上不定时活动举办\r\n  活动专栏提供的活动奖励是你意向不到\r\n  在这里你才懂得什么叫做丰富有趣!\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n  #b全部游戏道具....\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：部分活动专栏24点重置。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：经常关注活动专栏 你值得拥有。");
                    	cm.dispose();
			} else if (selection == 2) {
			typed=3;
			cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到年终充值礼包活动:\r\n  达到一定赞助额度你可以获得大礼包一份\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)#b\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r100#b  赞助礼包#l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r500#b  赞助礼包#l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r1000#b 赞助礼包#l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r3000#b 赞助礼包#l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r6000#b 赞助礼包#l\r\n#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[新年赞助礼包]查看#r10000#b赞助礼包#l\r\n\r\n   #r#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#注：点击领取后自动把余额转换为点卷");
			/*cm.sendOk("活动已经结束...请期待 春节活动吧!!!");
			cm.dispose();*/
			} else if (selection == 3) {
			typed=4;
			cm.dispose();
			cm.openNpc(9900001,3012);
			} else if (selection == 4) {
			typed=5;
			cm.dispose();
			cm.openNpc(9900001,3014);
			} else if (selection == 5) {
			cm.dispose();
			cm.openNpc(9900001,3013);
			} else if (selection == 6) {
			typed=7;
		    	cm.dispose();
		    	cm.openNpc(9900001,3001);
			} else if (selection == 7) {
			cm.sendOk("活动已经结束...!!!");
			cm.dispose();
			/*cm.dispose();
			cm.openNpc(9900001,3009);*/
			} else if (selection == 8) {
			cm.sendOk("活动已经结束...!!!");
			cm.dispose();
			} else if (selection == 9) {
			cm.dispose();
			cm.openNpc(9900001,3011);
			}
		} else if (status == 2) {
		if (typed == 3) {
		if (selection == 2) {
			typed1=1;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看100 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足100#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046008##t2046008# x1\r\n#v2046009##t2046009# x1\r\n#v2046108##t2046108# x1\r\n#v2046109##t2046109# x1\r\n#v2049122##t2049122# x5\r\n#v2049116##t2049116# x5\r\n#v2049322##t2049322# x1\r\n#v2049752##t2049752# x2\r\n#v3010659##t3010659# x1\r\n#v3010608##t3010608# x1\r\n#v1142346##t1142346# x1\r\n#v1112141##t1112141# x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r100#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束");
		}else if(selection == 3){
			typed1=2;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看500 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足500#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046008##t2046008# x2\r\n#v2046009##t2046009# x2\r\n#v2046108##t2046108# x2\r\n#v2046109##t2046109# x2\r\n#v2049122##t2049122# x25\r\n#v2049116##t2049116# x25\r\n#v2049322##t2049322# x2\r\n#v2049751##t2049751# x2\r\n#v3010590##t3010590# x1\r\n#v3010606##t3010606# x1\r\n#v1142347##t1142347# x1\r\n#v1112151##t1112151# x1\r\n#v1112915##t1112915# x1\r\n#v1003797#150装备随机 x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r500#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b注：拥有1次免费使用一键潜能更改第1条属性机会。");
		}else if(selection == 4){
			typed1=3;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看1000 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足1000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046110##t2046110# x1\r\n#v2046111##t2046111# x1\r\n#v2046010##t2046010# x1\r\n#v2046010##t2046010# x1\r\n#v2049122##t2049122# x50\r\n#v2049116##t2049116# x50\r\n#v2049322##t2049322# x4\r\n#v2049750##t2049750# x2\r\n#v3010494##t3010494# x1\r\n#v3010661##t3010661# x1\r\n#v1142348##t1142348# x1\r\n#v1112150##t1112150# x1\r\n#v1122122##t1122122# x1\r\n#v1112915##t1112915# x2\r\n#v1003797#150装备随机 x1\r\n#v1132176#150暴君随机 x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r1000#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束。\r\n     #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b注：拥有2次免费使用一键潜能更改第1条属性机会。");
		}else if(selection == 5){
			typed1=4;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看3000 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足3000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046110##t2046110# x2\r\n#v2046111##t2046111# x2\r\n#v2046010##t2046010# x2\r\n#v2046011##t2046011# x2\r\n#v2049137##t2049137# x50\r\n#v2049119##t2049119# x50\r\n#v2049322##t2049322# x8\r\n#v2049750##t2049750# x4\r\n#v1112140##t1112140# x1\r\n#v1112247##t1112247# x1\r\n#v1112787##t1112787# x1\r\n#v1003698##t1003698# x1\r\n#v3700071##t3700071# x1\r\n#v3010509##t3010509# x1\r\n#v3010621##t3010621# x1\r\n#v3010670##t3010670# x1\r\n#v3010070##t3010070# x1\r\n#v1122122##t1122122# x2\r\n#v1112915##t1112915# x3\r\n#v1672027##t1672027# x1\r\n#v1003797#150装备随机 x1\r\n#v1132176#150暴君随机 x1\r\n#v1472214#150武器随机 x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r3000#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b注：拥有1次免费使用一键潜能更改第1,2条属性机会。");
		}else if(selection == 6){
			typed1=5;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看6000 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足6000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046074##t2046074# x2\r\n#v2046075##t2046075# x2\r\n#v2046149##t2046149# x2\r\n#v2049137##t2049137# x100\r\n#v2049119##t2049119# x100\r\n#v2049322##t2049322# x16\r\n#v2049750##t2049750# x6\r\n#v1112139##t1112139# x1\r\n#v1112246##t1112246# x1\r\n#v1112786##t1112786# x1\r\n#v1003697##t1003697# x1\r\n#v3700070##t3700070# x1\r\n#v3010508##t3010508# x1\r\n#v3010658##t3010658# x1\r\n#v3010594##t3010594# x1\r\n#v3010520##t3010520# x1\r\n#v1122122##t1122122# x3\r\n#v1112915##t1112915# x4\r\n#v1672027##t1672027# x1\r\n#v1003797#150装备随机 x1\r\n#v1132176#150暴君随机 x1\r\n#v1472214#150武器随机 x1\r\n#v1132246#最高级贝勒德首饰随机 x1\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r6000#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b注：拥有2次免费使用一键潜能更改第1,2条属性机会。");
		}else if(selection == 7){
			typed1=6;
		    	cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎查看10000 赞助礼包简介:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#账号目前 (#k赞助金额： #r"+cm.getHyPay(1)+"#k)\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e#r赞助金额满足10000#n#k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/basic#\r\n#v2046074##t2046074# x4\r\n#v2046075##t2046075# x4\r\n#v2046149##t2046149# x4\r\n#v2049137##t2049137# x200\r\n#v2049119##t2049119# x200\r\n#v2049322##t2049322# x32\r\n#v2049750##t2049750# x8\r\n#v1112138##t1112138# x1\r\n#v1112245##t1112245# x1\r\n#v1112785##t1112785# x1\r\n#v1003696##t1003696# x1\r\n#v3700069##t3700069# x1\r\n#v3010507##t3010507# x1\r\n#v3010696##t3010696# x1\r\n#v3010492##t3010492# x1\r\n#v3010519##t3010519# x1\r\n#v1122122##t1122122# x4\r\n#v1112915##t1112915# x5\r\n#v1672027##t1672027# x1\r\n#v1003797#150装备随机 x2\r\n#v1132176#150暴君随机 x2\r\n#v1472214#150武器随机 x2\r\n#v1132246#最高级贝勒德首饰随机 x2\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[年终赞助礼包]点击#r10000#b  赞助礼包领取#l\r\n\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：赞助礼包每日24点重置。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：该活动与2013/12/30 - 2014/01/04结束。\r\n   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b注：拥有2次免费使用一键潜能更改第1,2,3条属性机会。");
		}
		}
		} else if (status == 3) {
		if (typed1 == 1) {
		if (selection == 2) {
		   if(cm.getEventCount("100赞助") == 0){
		   if(cm.getHyPay(1) < 100 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到100赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(100) > 0){
			cm.gainNX(100 * 3000);
		        cm.gainItem(2431987,1);//周年庆50%卷轴箱
		        cm.gainItem(2049122,5);//正向混沌卷轴 不可交易 50%
		        cm.gainItem(2049116,5);//强化混沌卷轴 60%
		        cm.gainItem(2049322,1);//5星装备强化卷轴 30%
		        cm.gainItem(2049752,2);//S级潜能附加卷轴 30%
		        cm.gainItem(3010659,1);//冒险巴士站椅子
		        cm.gainItem(3010608,1);//完美的名画椅子
		        cm.gainItem(1142346,1);//夺旗得分手勋章
		        cm.gainItem(1112141,1);//红玫瑰名片戒指
		        cm.setEventCount("100赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终100赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过100赞助礼包。");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 2) {
		if (selection == 2) {
		   if(cm.getEventCount("500赞助") == 0){
		   if(cm.getHyPay(1) < 500 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到500赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(500) > 0){
			cm.gainNX(500 * 3000);
		        cm.gainItem(2431987,2);//周年庆50%卷轴箱 
		        cm.gainItem(2049122,25);//正向混沌卷轴 不可交易 50%
		        cm.gainItem(2049116,25);//强化混沌卷轴 60%
		        cm.gainItem(2049322,2);//5星装备强化卷轴 30%
		        cm.gainItem(2049751,2);//S级潜能附加卷轴 60%
		        cm.gainItem(3010590,1);//酸甜点心椅子
		        cm.gainItem(3010606,1);//未上色的名画椅子
		        cm.gainItem(1142347,1);//夺旗护旗手勋章
		        cm.gainItem(1112151,1);//美味蛋糕名片戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(2431988,1);//150装备箱
		        cm.gainItem(3994417,1);//红色蜡笔
		        cm.setEventCount("500赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终500赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过500赞助礼包。");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 3) {
		if (selection == 2) {
		   if(cm.getEventCount("1000赞助") == 0){
		   if(cm.getHyPay(1) < 1000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到1000赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(1000) > 0){
			cm.gainNX(1000 * 3000);
		        cm.gainItem(2431990,1);//周年庆100%卷轴箱 
		        cm.gainItem(2049122,50);//正向混沌卷轴 不可交易 50%
		        cm.gainItem(2049116,50);//强化混沌卷轴 60%
		        cm.gainItem(2049322,4);//5星装备强化卷轴 30%
		        cm.gainItem(2049750,2);//S级潜能附加卷轴 80%
		        cm.gainItem(3010494,1);//TV椅子
		        cm.gainItem(3010661,1);//欢乐相框椅子
		        cm.gainItem(1142348,1);//夺旗猎杀手勋章
		        cm.gainItem(1112150,1);//天使降临名片戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(2431991,1);//真*觉醒的冒险之心箱
		        cm.gainItem(2431992,1);//150暴君箱
		        cm.gainItem(2431988,1);//150装备箱
		        cm.gainItem(3994417,2);//红色蜡笔
		        cm.setEventCount("1000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终1000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过1000赞助礼包。");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 4) {
		if (selection == 2) {
		   if(cm.getEventCount("3000赞助") == 0){
		   if(cm.getHyPay(1) < 3000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到3000赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(3000) > 0){
			cm.gainNX(3000 * 3000);
		        cm.gainItem(2431990,2);//周年庆100%卷轴箱 
		        cm.gainItem(2049137,50);//惊人正义混沌卷轴 不可交易 40%
		        cm.gainItem(2049119,50);//惊人强化混沌卷轴 60%
		        cm.gainItem(2049322,8);//5星装备强化卷轴 30%
		        cm.gainItem(2049750,4);//S级潜能附加卷轴 80%
		        cm.gainItem(1112140,1);//白银VIP名片戒指
		        cm.gainItem(1112247,1);//白银VIP聊天戒指
		        cm.gainItem(1112787,1);//白银VIP戒指
		        cm.gainItem(1003698,1);//白银VIP专用王冠
		        cm.gainItem(3700071,1);//白银VIP的专属称号。
		        cm.gainItem(3010509,1);//白银VIP的祝福
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1672027,1);//极真锂心脏
		        cm.gainItem(2431991,2);//真*觉醒的冒险之心箱
		        cm.gainItem(2431992,1);//150暴君箱
		        cm.gainItem(2431988,1);//150装备箱
		        cm.gainItem(2431989,1);//150武器箱
		        cm.gainItem(3010070,1);//巨无霸品克缤椅子
		        cm.gainItem(3010670,1);//绝对指环王椅子
		        cm.gainItem(3010621,1);//蛤蟆仙人椅子
		        cm.gainItem(3994417,1);//红色蜡笔
		        cm.gainItem(3994418,1);//橙色蜡笔
		        cm.setEventCount("3000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终3000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过3000赞助礼包。");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 5) {
		if (selection == 2) {
		if(cm.getEventCount("6000赞助") == 0){
		   if(cm.getHyPay(1) < 6000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到6000赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(6000) > 0){
			cm.gainNX(6000 * 3000);
		        cm.gainItem(2431994,2);//祥龙99%卷轴箱 
		        cm.gainItem(2049137,100);//惊人正义混沌卷轴 不可交易 40%
		        cm.gainItem(2049119,100);//惊人强化混沌卷轴 60%
		        cm.gainItem(2049322,16);//5星装备强化卷轴 30%
		        cm.gainItem(2049750,6);//S级潜能附加卷轴 80%
		        cm.gainItem(1112139,1);//黄金VIP名片戒指
		        cm.gainItem(1112246,1);//黄金VIP聊天戒指
		        cm.gainItem(1112786,1);//黄金VIP戒指
		        cm.gainItem(1003697,1);//黄金VIP专用王冠
		        cm.gainItem(3700070,1);//黄金VIP的专属称号。
		        cm.gainItem(3010508,1);//黄金VIP的祝福
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1672027,1);//极真锂心脏
		        cm.gainItem(2431991,3);//真*觉醒的冒险之心箱
		        cm.gainItem(2431992,1);//150暴君箱
		        cm.gainItem(2431988,1);//150装备箱
		        cm.gainItem(2431989,1);//150武器箱
		        cm.gainItem(2431993,1);//最高级贝勒德首饰箱
		        cm.gainItem(3010658,1);//夏日西瓜冰椅子
		        cm.gainItem(3010594,1);//蓝莓蛋糕椅子
		        cm.gainItem(3010520,1);//巨大企鹅王椅子
		        cm.gainItem(3994417,2);//红色蜡笔
		        cm.gainItem(3994418,2);//橙色蜡笔
		        cm.setEventCount("6000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终6000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过6000赞助礼包。");
		        cm.dispose();
		   }
		}
		}
		if (typed1 == 6) {
		if (selection == 2) {
		if(cm.getEventCount("10000赞助") == 0){
		   if(cm.getHyPay(1) < 10000 && (cm.getSpace(1) < 7||cm.getSpace(2) < 7||cm.getSpace(3) < 7||cm.getSpace(4) < 7)){
			cm.sendOk("请确认账号余额是否达到10000赞助金额\r\n请确认装备背包栏至少空出7格以上位置\r\n请确认消耗背包栏至少空出7格以上位置\r\n请确认其它背包栏至少空出7格以上位置\r\n请确认设置背包栏至少空出7格以上位置");
		        cm.dispose();
		   }else if(cm.addHyPay(10000) > 0){
			cm.gainNX(10000 * 3000);
		        cm.gainItem(2431994,4);//祥龙99%卷轴箱 
		        cm.gainItem(2049137,200);//惊人正义混沌卷轴 不可交易 40%
		        cm.gainItem(2049119,200);//惊人强化混沌卷轴 60%
		        cm.gainItem(2049322,32);//5星装备强化卷轴 30%
		        cm.gainItem(2049750,8);//S级潜能附加卷轴 80%
		        cm.gainItem(1112138,1);//钻石VIP名片戒指
		        cm.gainItem(1112245,1);//钻石VIP聊天戒指
		        cm.gainItem(1112785,1);//钻石VIP戒指
		        cm.gainItem(1003696,1);//钻石VIP专用王冠
		        cm.gainItem(3700069,1);//钻石VIP的专属称号。
		        cm.gainItem(3010507,1);//钻石VIP的祝福
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1112915,1);//蓝调戒指
		        cm.gainItem(1672027,1);//极真锂心脏
		        cm.gainItem(2431991,4);//真*觉醒的冒险之心箱
		        cm.gainItem(2431992,2);//150暴君箱
		        cm.gainItem(2431988,2);//150装备箱
		        cm.gainItem(2431989,2);//150武器箱
		        cm.gainItem(2431993,2);//最高级贝勒德首饰箱
		        cm.gainItem(3010696,1);//大黄鸭
		        cm.gainItem(3010492,1);//首脑椅子
		        cm.gainItem(3010519,1);//巨大雪人王椅子
		        cm.gainItem(3994417,2);//红色蜡笔
		        cm.gainItem(3994418,2);//橙色蜡笔
		        cm.gainItem(3994419,2);//黄色蜡笔
		        cm.setEventCount("10000赞助");
		     	cm.sendOk("请注意查收。");
			cm.worldSpouseMessage(0x20,"[年终礼包] 玩家 "+ cm.getChar().getName() +" 领取了年终10000赞助礼包。");
		        cm.dispose();
		     }else{
		     	cm.sendOk("出现错误，请反馈给管理员！");
		        cm.dispose();
		     }
		   }else{
			cm.sendOk("该账号今天已经领取过10000赞助礼包。");
		        cm.dispose();
		   }
		}
		}
	   }
      }
}
