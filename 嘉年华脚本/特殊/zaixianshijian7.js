
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
var condition = new Array(30, 60, 120, 180, 240,360,480,600,720,1080);
var reward = new Array(// 礼包编号、道具id、数量
					// 礼包30
					Array(1, 4310014, 1),
					Array(2, 4310014, 1),
					Array(3, 4310014, 1),
					Array(4, 4310014, 2),
					Array(5, 4310014, 2),
					Array(6, 4310014, 2),
					Array(7, 4310014, 2),
					Array(8, 4310014, 2),




					Array(1, 5072000, 2),

					Array(1, 2431738, 1),//500抵用券
					//Array(1, 2430069, 1),//箱子
					Array(1, 2000005, 10),//超级药水
					//Array(1, 5062000, 5),//神奇模仿
					//Array(1, 4310030, 10),//运动
					//Array(1, 4310036, 20),//征服

					// 礼包60
					//Array(2, 4034232, 1),
					Array(2, 5072000, 5),
					Array(2, 4001713, 2),
					//Array(2, 2049002, 3),
					Array(2, 2000005, 100),//超级药水
					//Array(2, 5062009, 20),
					//Array(2, 2340000, 2),//祝福卷
					//Array(2, 2430069, 1),
					//Array(2, 2431739, 100),//
					//Array(2, 5062000, 15),//红魔方
					Array(2, 4310030, 5),
					Array(2, 4310036, 5),

					// 礼包120
					Array(3, 2049002, 2),
					//Array(3, 4034232, 1),
					Array(3, 5072000, 5),
					//Array(3, 5062009, 20),
                                       // Array(3, 2431740, 1),
					//Array(3, 5062002, 10),
					//Array(3, 5062000, 15),
					//Array(3, 2430069, 1),
					//Array(3, 2340000, 3),//祝福卷
					//Array(3, 5064000, 2),
					Array(3, 4310030, 10),
					Array(3, 4310036, 25),

                    // 礼包180
					//Array(4, 4001714, 30),
					Array(4, 2049002, 3),
					Array(4, 5072000, 5),
					Array(4, 5062002, 10),
					//Array(4, 5062000, 15),
					Array(4, 5064000, 2),
					//Array(4, 5062009, 20),
					//Array(4, 2049702, 1),
					//Array(4, 2430069, 1),
					//Array(4, 2340000, 5),//祝福卷
					//Array(4, 4310110, 2),//春节
					//Array(4, 2300000, 5),
					//Array(4, 2431741, 1),
					Array(4, 4310030, 20),
					Array(4, 4001839, 30),
					Array(4, 4310036, 30),
					//Array(4, 2049135, 1),
					//Array(4, 4310036, 50),

					// 礼包7 240
					//Array(5, 4001714, 50),
					Array(5, 2049002, 4),
					//Array(5, 3010073, 1),  //卡片
					//Array(5, 2049400, 5),
					//Array(5, 5072000, 2),
					//Array(5, 2431741, 1),
					Array(5, 2049702, 1),
					//Array(5, 2049301, 5),
					//Array(5, 2049122, 5),
					/*Array(5, 5062009, 10),
					Array(5, 5062500, 30),
					Array(4, 5062500, 30),
					Array(3, 5062500, 20),
					Array(2, 5062500, 10),*/
					Array(5, 5062002, 5),
					//Array(5, 5064000, 5),
					//Array(5, 2340000, 5),//祝福卷
					//Array(5, 2430069, 1),
					//Array(5, 4310110, 3), 
					//Array(5, 2300000, 8),
					Array(5, 4310030, 20),
					Array(5, 4310036, 30),//
					Array(5, 4001839, 30),
					//Array(5, 4001832, 10),
					// 礼包8 600
					Array(8, 2049400, 6),
					Array(8, 4001839, 30),//xingxing
					//Array(8, 4310110, 5),//chunjieb
					//Array(8, 2049323, 2),//wusun
					Array(8, 2049122, 2),
					//Array(8, 2049752, 1),
					Array(8, 2049002, 8),//baiyi
					//Array(8, 4001714, 2),//Sqianneng
					//Array(8, 4001714, 5),//dingjujin
					Array(8, 2340000, 2),//祝福卷
					Array(8, 5064000, 2),//fangbao
					Array(8, 5062009, 10),
					Array(8, 5062500, 15),//dashimofang
					Array(8, 5062002, 10),//高级生气魔方 
					//Array(8, 2430069, 1),//组墨绿箱子
					//Array(8, 2431743, 2),//抵用卷
					Array(8, 4001832, 100),
					//Array(8, 4000463, 6),
					//480
                                        Array(7, 2049002, 8),
					//Array(7, 2049400, 6),
					//Array(7, 5072000, 5),
					//Array(7, 2431741, 2),
					Array(7, 2049702, 2),//A
					Array(7, 2049301, 10),
					Array(7, 2049122, 2),
					Array(7, 5062009, 5),
					Array(7, 5062500, 10),
					//Array(7, 5062002, 20),
					Array(7, 5064000, 2),
					Array(7, 2340000, 2),//祝福卷
					//Array(7, 2430069, 1),
					//Array(7, 4310110, 3), 
					//Array(7, 2300000, 8),
					Array(7, 4310030, 30),
					Array(7, 4310036, 30),//
					Array(7, 4001832, 100),
//360
                                        Array(6, 2049002, 5),
					Array(6, 2049400, 5),
					//Array(6, 5072000, 5),
					//Array(6, 2431743, 1),
					Array(6, 2049702, 1),
					Array(6, 2049301, 5),
					//Array(6, 2049122, 5),
					//Array(6, 5062009, 5),
					//Array(6, 5062500, 5),
					Array(6, 5062002, 10),
					Array(6, 5064000, 2),
					Array(6, 2340000, 2),//祝福卷
					//Array(6, 2430069, 1),
					//Array(6, 4310110, 3), 
					//Array(6, 2300000, 8),
					Array(6, 4310030, 20),
					Array(6, 4310036, 30),//
					Array(6, 4001832, 100),
//720
					Array(9, 5062009, 15),
					Array(9, 5062500, 10),
					Array(9, 5062002, 10),
					Array(9, 4001839, 100),
					Array(9, 2340000, 5),//祝福卷
					Array(9, 5064000, 3),//fangbao
                    Array(9, 2049752, 2),
					Array(9, 2049122, 5),
					Array(9, 2049028, 2),//组墨绿箱子
					//Array(9, 2431741, 3),//抵用卷
					Array(9, 2460003, 10),
					Array(9, 4001714, 5),//dingjujin
					Array(9, 4001832, 200),
//1080
					Array(10, 5062009, 20),
					Array(10, 5062500, 20),
					Array(10, 5062002, 20),
					Array(10, 2431046, 1),
					Array(10, 4001832, 300),
                    Array(10, 2460003, 20),
					Array(10, 5062000, 20),//组墨绿箱子

					//Array(10, 2431741, 3),//抵用卷
					Array(1, 4001839, 30),
					Array(2, 4001839, 30),
					Array(3, 4001839, 30),
					
					Array(6, 4001839, 30),
					Array(7, 4001839, 30),
					
					Array(10, 4001839, 100),
					Array(10, 5537000, 20),
					Array(10, 5743003, 20)
					//Array(10, 4001714, 2)    //dingjujin
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
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement("select mac from hypay ");
	var result = pstmt.executeQuery();
		result.next();
		revenue = result.getString("mac");
	var time = cm.getOnlineTime();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d您今天在小布丁冒险岛世界时长为： #r" + time + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23：50#n #b至#r #e00：10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。#k\r\n ";
		for (var i = 1; i <= condition.length; i++) {
			text += "#e#b#L" + i + "#"+aaa+" 领取在线" + condition[i-1] + "分钟奖励";
			if (cm.getEventCount("在线礼包" + i) > 0) {
				text += "(已领取)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}
		if (cm.getEventCount("在线礼包" + selection) > 0) {
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
				rewardlist.push(new Array(reward[i][1], reward[i][2]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
		}
		var mac = cm.getClient().geiMac()+""+sel;
		var sql="insert into mac(mac) values ('"+mac+"');
		             var conn = cm.getConnection();
                     var pstmt = conn.prepareStatement(sql);
					     pstmt.executeUpdate();
		cm.setEventCount("在线礼包" + sel);
		cm.playerMessage(1, "领取成功！");
		cm.worldSpouseMessage(0x20,"『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了在线 " + condition[sel-1] + " 分钟奖励。");
		//cm.worldMessageYellow("『在线时间奖励』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了在线 " + condition[sel-1] + " 分钟奖励。");
		cm.dispose();
	}
}

