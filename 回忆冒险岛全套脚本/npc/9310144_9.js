/* 
	累积充值领取礼包
*/
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 最高累积天数
var day = 7;
// 每个阶段礼包所需的充值数
var condition = new Array(30, 50, 100, 200, 500, 1000, 1500, 2000);
// 礼包内容
var reward = new Array(
					// 礼包1 30
					Array(1, 5062002, 5),
					Array(1, 5064000, 5),
					Array(1, 2340000, 5),

					// 礼包2 50
					Array(2, 5062002, 10),
					Array(2, 5064000, 10),
					Array(2, 2340000, 10),

					// 礼包3 100
					Array(3, 5062002, 20),
					Array(3, 5064000, 10),
					Array(3, 2340000, 10),

					// 礼包4 200
					Array(4, 5062002, 30),
					Array(4, 5062500, 30),
					Array(4, 5064000, 10),
					Array(4, 2340000, 10),

					// 礼包5 500
					Array(5, 2049116, 10),
					Array(5, 2049124, 10),
					Array(5, 5062002, 35),
					Array(5, 5062500, 35),
					Array(5, 5062009, 35),
					Array(5, 5064000, 10),
					Array(5, 2340000, 10),
					
					// 礼包6 1000
					Array(6, 2049116, 10),
					Array(6, 2049124, 10),
					Array(6, 5062002, 50),
					Array(6, 5062500, 50),
					Array(6, 5062009, 50),
					Array(6, 5064000, 10),
					Array(6, 2340000, 10),

					// 礼包7 1500
					Array(7, 2049116, 15),
					Array(7, 2049124, 15),
					Array(7, 5062002, 50),
					Array(7, 5062500, 50),
					Array(7, 5062009, 50),
					Array(7, 5064000, 20),
					Array(7, 2340000, 20),
					Array(7, 2049323, 10),

					// 礼包8 2000
					Array(8, 3994417, 1),
					Array(8, 2049116, 20),
					Array(8, 2049124, 20),
					Array(8, 5062002, 50),
					Array(8, 5062500, 50),
					Array(8, 5062009, 50),
					Array(8, 5064000, 20),
					Array(8, 2340000, 20),
					Array(8, 2049323, 10)
					);


var status = -1;
var text;
var paylog;
var sel;
var daily = "每日充值礼包";
var grandtotal = "7天累计充值礼包";
var giftname;

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

	if (status == 0) {
		paylog = cm.getSevenDayPayLog(day);
		text = "\t\t\t\t#e- 充值礼包领取 -#n\r\n\r\n";
		text += "#d您总共充值金额为： #r" + cm.getPlayer().getRMB() + "\r\n";
		text += "#d您今日充值金额为： #r"+ getTodayRMB() +"\r\n\r\n#n#b";
		//text += paylog + "#n\r\n#b";
		
		var loop = false;
		for (var i = 0; i < condition.length; i++) {
			giftname = (daily) + (i + 1);

			text += "#L" + i + "#领取每日充值#r" + condition[i] + "#b元奖励";

			if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
				text += "(已领取)";
			}
			text += "#l\r\n";
		}

		cm.sendOk(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			cm.sendOk("#d服务器当前时间： #r" + hour +" 时 " + minute + " 分 " + second + " 秒#k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
			cm.dispose();
			return;
		}
		sel = selection + 1;
		giftname = (daily) + (sel);
		if (cm.getPlayer().getBossLogAcc(giftname) > 0) {
			cm.sendOk("这个礼包您已经领取过了");
			cm.dispose();
			return;
		}
		text = "\t\t\t\t#e- 礼包内容 -#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		var rmb = condition[sel - 1];
		if (sel <= condition.length) {
			if (getTodayRMB() < rmb) {
				cm.sendOk("您今日充值不满" + rmb + "元，无法领取这个礼包。");
				cm.dispose();
				return;
			}
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
		cm.setBossLogAcc(giftname);
		cm.playerMessage(1, "领取成功！");
		cm.channelMessage(0x18, "『每日充值』" + " : " + "玩家 " + cm.getChar().getName() + " 领取了每日充值 " + condition[sel-1] + " 元奖励。");
		cm.dispose();
	}
}

function getTodayRMB() {
	var conn = cm.getConnection();
	var myAccountName =getAccountName(cm.getPlayer().getId());
	var sql = "select sum(rmb) as totalrmb from paylog where account=? and date(paytime) = curdate();";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, myAccountName);
	var result = pstmt.executeQuery();
	var totalrmb = 0;
	if (result.next()) {
		totalrmb = result.getInt('totalrmb');
	}
	result.close();
	pstmt.close();
	return totalrmb;
}

function getAccountName(charid) {
	var sql = "select name from accounts where id = (select accountid from characters where id = "+charid+");";
	var accountQuery = cm.getConnection().prepareStatement(sql).executeQuery();
	var accountName = null;
	if (accountQuery.next())
		accountName = accountQuery.getString("name");
	accountQuery.close();
	return accountName;
}