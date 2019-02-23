
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(10, 60, 180, 300, 420, 540, 680, 800);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包1
					Array(1, 5030001, 1, 1), //雇佣商人一天权
					Array(1, 2000005, 50),   //超级药水
					//Array(1, 2431174, 1),    //荣誉徽章
					Array(1, 2450020, 1),    //经验值1.5倍

					// 礼包2
					//Array(2, 4000463, 1000),  //点卷
					Array(2, 5220040, 1),    //转蛋
					Array(2, 2000005, 100),  //超级药水
					Array(2, 5062000, 1),    //神奇魔方
					Array(2, 2431174, 1),    //荣誉徽章
					Array(2, 5121032, 1),    //火红玫
					Array(2, 5072000, 5 , 1),//喇叭5个			
	    			Array(2, 2450020, 1),    //经验值1.5倍
					
					// 礼包3	
					Array(3, 5220040, 1),    //转蛋
				    Array(3, 5062000, 1),    //神奇魔方
					Array(3, 5062002, 1),    //高级神奇魔方
					Array(3, 2340000, 1, 1), //祝福卷轴	
					Array(3, 2431174, 1),    //荣誉徽章
					Array(3, 5121032, 1),    //火红玫
					//Array(3, 4310030, 1),    //运动会币
					Array(3, 5076000, 5 , 1),//道具喇叭
					Array(3, 4001713, 5),    //50w

					// 礼包4-300
					//Array(4, 4000463, 1000),  //点卷
					Array(4, 5220040, 1),    //转蛋
					Array(4, 5062000, 1),    //神奇魔方
					Array(4, 5062500, 1),    //大师魔方
					Array(4, 5064000, 1, 1), //防暴卷轴				
					Array(4, 4310110, 1),    //春节纪念币
					Array(4, 4310030, 5),    //运动会币
					//Array(4, 4310036, 3),    //征服币
					Array(4, 2431174, 1),    //荣誉徽章
					Array(4, 5121032, 1),    //火红玫
                    Array(4, 2431738, 1),    //抵用卷500商品
                    Array(4, 4001714, 1),    //定居金100万金钱
									
					// 礼包5-420
				    //Array(5, 5220040, 1),    //转蛋
					Array(5, 5062000, 2),    //神奇魔方       
					Array(5, 5062002, 1),    //高级神奇魔方
					Array(5, 5062500, 1),    //大师魔方
                    Array(5, 2340000, 1),  //祝福卷轴
                    //Array(5, 5064000, 1),  //防爆卷轴					
					//Array(5, 2049300, 1),  //高级装备强化卷
                   // Array(5, 2049400, 1),  //高级潜能附加卷C
				   	Array(5, 2049116, 1),  //强混
					Array(5, 2431738, 1),  //抵用卷500商品
					Array(5, 4310110, 1),  //春节纪念币
					Array(5, 4310030, 5),  //运动会币
					//Array(5, 4310036, 10),  //征服币
					Array(5, 2431174, 1),    //荣誉徽章
					Array(5, 4001714, 1),  //定居金100万金钱

					
					// 礼包6-540
					//Array(6, 4000463, 1000),  //点卷
				    //Array(6, 5220040, 1),    //转蛋
					Array(6, 5062000, 2),               
					Array(6, 5062002, 1),
					Array(6, 5062500, 1),
                    //Array(6, 2340000, 1),  //祝福卷轴
                    Array(6, 5064000, 1),  //防爆卷轴					
					//Array(5, 2049300, 1),  //高级装备强化卷
                    Array(6, 2049400, 1 , 1),  //高级潜能附加卷C
					//Array(6, 2049168, 1),  //惊人正义20%
					Array(6, 2431739, 1),  //抵用卷1000商品
					Array(6, 4310110, 1),  //春节纪念币
					Array(6, 4310030, 5),  //运动会币
					//Array(6, 4310036, 10),  //征服币
					Array(6, 2431174, 1),    //荣誉徽章
					Array(6, 4001714, 1),  //定居金100万金钱

					
					// 礼包7-680
					Array(7, 5062000, 2),               
					Array(7, 5062002, 2),
					Array(7, 5062500, 2),
                    //Array(7, 2340000, 1),  //祝福卷轴
                    //Array(7, 5064000, 1),  //防爆卷轴					
					//Array(7, 4001839, 100),  //星星
					//Array(7, 2049400, 1 , 1),  //高级潜能附加卷C
					Array(7, 2049300, 1 , 1),  //高级装备强化卷
					Array(7, 2049168, 1),  //惊人正义20%
					Array(7, 2431742, 1),  //抵用卷4000商品
					Array(7, 4310110, 1),  //春节纪念币
					//Array(7, 4310030, 10),  //运动会币
					//Array(7, 4310036, 10),  //征服币
					Array(7, 2431174, 2),    //荣誉徽章
					Array(7, 4001714, 2),  //定居金100万金钱
		
					//礼包8-800
					///Array(8, 4000463, 1000),  //点卷
					Array(8, 4001839, 100), //星星
					//Array(8, 4001832, 100), //咒语
                    Array(8, 5062000, 3), //神奇魔方
					Array(8, 5062002, 2), //高级神奇魔方
					Array(8, 5062500, 2), //大师级神奇魔方  
					Array(8, 2340000, 1),  //祝福卷轴
                    Array(8, 5064000, 1),  //防爆卷轴
					Array(8, 2049300, 1 , 1),  //高级装备强化卷
					Array(8, 2049400, 1 , 1),  //高级潜能附加卷C
					//Array(8, 2048310, 1),  //附加潜能附加卷轴60%
					Array(8, 2049124, 1),  //正向混沌卷轴50%
					Array(8, 2431742, 1),  //抵用卷4000商品
                    Array(8, 4310110, 2),  //春节纪念币 				
					Array(8, 4000463, 5),  //5元点卷
					//Array(8, 4310030, 10), //运动会币
					//Array(8, 4310036, 10), //征服币
					Array(8, 2431174, 2),    //荣誉徽章
					Array(8, 4001714, 2)   //定居金100万金币
			);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	var time = cm.getGamePoints();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d您今天在China冒险岛世界时长为： #r" + time + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 55#n #b至#r #e00 ： 05#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：55#n#b 分前领取当天未领取的奖励。以免造成损失。\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" [王者] 领取在线" + condition[i-1] + "分钟奖励";
			if (cm.getBossLogAcc("在线礼包" + i) > 0) {
				text += "(已领取)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
		if ((hour == 23 && (minute >= 55 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 5))){
			cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 55 #b至#r 00 ： 05 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}
		if (cm.getBossLogAcc("在线礼包" + selection) > 0) {
			cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			return;
		}
		sel = selection;
		text = "\t\t\t\t#e#r- 在线 " + condition[selection - 1] + " 分钟奖励 -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (time < condition[sel-1]) {
			cm.sendOk("在线时间不足，无法领取。");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				if (reward[i][3] == null || reward[i][3] == '')
					reward[i][3]=0;
				rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			if (rewardlist[i][2] != 0) {
				//有期限道具
				cm.gainItemPeriod(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
				//java.lang.System.out.println("有");
			} else {
				//无期限道具
				cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
		}
		cm.setBossLogAcc("在线礼包" + sel);
		cm.playerMessage(1, "领取成功！");
		cm.worldSpouseMessage(0x20,"[在线奖励] ：" + "玩家 " + cm.getChar().getName() + " 领取了在线 " + condition[sel-1] + " 分钟奖励,离超神更近了一步");
		if (sel == 5) {
			cm.finishActivity(120108);
		} else if (sel == 6) {
			cm.finishActivity(120109);
		}
		cm.dispose();
	}
}
