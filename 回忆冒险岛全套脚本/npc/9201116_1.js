var status = 0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
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
			var text = "开服七天乐，#b2015年3月21日至2015年3月27日#k之间，凡是登录游戏的玩家，在线时间与等级达到相应要求，当天晚上的#r8点35分至8点45分#k和#r9点35分至9点45分#k可在此领取丰厚的雪花奖励。\r\n";
			text += "#b#L2#查看领奖要求#l\r\n";
			text += "#b#L1#我要领取今日奖励#l";
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			if (selection == 2) {
				var text = "#d#e3月21日：#n#k\r\n";
				text += "\t在线时间达到#r10分钟#k，等级达到#b10级#k，可领取雪花币#r20#k枚。\r\n";

				text += "#d#e3月22日：#n#k\r\n";
				text += "\t在线时间达到#r180分钟#k，等级达到#b100级#k，可领取雪花币#r20#k枚。\r\n";

				text += "#d#e3月23日：#n#k\r\n";
				text += "\t在线时间达到#r180分钟#k，等级达到#b150级#k，可领取雪花币#r20#k枚。\r\n";

				text += "#d#e3月24日：#n#k\r\n";
				text += "\t在线时间达到#r180分钟#k，等级达到#b170级#k，可领取雪花币#r20#k枚。\r\n";

				text += "#d#e3月25日：#n#k\r\n";
				text += "\t在线时间达到#r180分钟#k，等级达到#b180级#k，可领取雪花币#r30#k枚。\r\n";

				text += "#d#e3月26日：#n#k\r\n";
				text += "\t在线时间达到#r180分钟#k，等级达到#b190级#k，可领取雪花币#r40#k枚。\r\n";

				text += "#d#e3月27日：#n#k\r\n";
				text += "\t在线时间达到#r240分钟#k，等级达到#b200级#k，可领取雪花币#r100#k枚。\r\n";
				status = -1;
				cm.sendSimple(text);
			} else if (selection == 1){
				cm.sendYesNo("请注意，#r#e每台电脑同一账号只能领取一次奖励#n#k，是否现在就领取奖励？");
			}
		} else if (status == 2) {
			if (((month == 3) && (hour == 20 && (minute >= 35 && minute <= 45)) || hour == 21 && (minute >= 35 && minute <= 59))) {
				var points = 0;
				var level = 0;
				var onlineTime = 0;
				if (true) {
					switch (day) {
					case 21:
						points = 20;
						level = 10;
						onlineTime = 10;
						break;
					case 22:
						points = 20;
						level = 100;
						onlineTime = 180;
						break;
					case 23:
						points = 20;
						level = 150;
						onlineTime = 180;
						break;
					case 24:
						points = 20;
						level = 170;
						onlineTime = 180;
						break;
					case 25:
						points = 30;
						level = 180;
						onlineTime = 180;
						break;
					case 26:
						points = 40;
						level = 190;
						onlineTime = 180;
						break;
					case 27:
						points = 100;
						level = 200;
						onlineTime = 180;
						break;
					}
					if (points==0) {
						cm.sendOk("领取奖励出错！可能不在时间活动范围。");
						cm.dispose();
						return;
					}
					if (cm.getLevel() >= level && cm.getPlayer().getTodayOnlineTime() >= onlineTime) {
						if (getPCLog("开服礼包", 1)<=0) {
							if (cm.getBossLogAcc("回忆七天奖励") < 1) {
								cm.setBossLogAcc("回忆七天奖励");
								cm.gainItem(4310014, points);
								setPCLog("开服礼包", 1);
								cm.sendOk("领取成功！领取了#b" + points + "#k枚雪花币。");
								cm.dispose();
							} else {
								cm.sendOk("您今日已经领取奖励，不能重复领取。");
								cm.dispose();
							}
						} else {
							cm.sendOk("每台电脑只能领取一次，无法重复领取。");
							cm.dispose();
						}
					} else {
						cm.sendOk("您的等级或在线时间不符合今日领取要求。具体请查看领奖说明。");
						cm.dispose();
					}
				}
			} else {
				cm.sendOk("现在不是领取的时间哦，请于#b2015年3月21日至2015年3月27日#k之间的每晚8点35分至8点45分和9点35分至9点40分之间过来领取，如果时间过了，就无法领取了哦。");
				cm.dispose();
			}
		}
	}
}
function getPCLog(bossid, type) {
	if (type==null)
		type=1;
	var t = 'mac';
	if (type == 1)
		t = 'ipaddress';
	var tValue = (type==0) ? cm.getC().getMac() : cm.getC().getSessionIPAddress();
	if (tValue == "113.100.106.8" || tValue == "/221.232.126.180" || tValue == "/58.251.249.98" || tValue == "/119.96.250.13" || tValue == "/112.95.25.5" || tValue == "/121.229.70.240" || tValue== "/27.159.95.244" || tValue == "/202.100.206.36" || tValue == "/49.77.12.234")
		return 0;
	var times = 0;
	var conn = cm.getConnection();
	var sql = "SELECT * FROM `pclog` WHERE `bossid` = ? and `"+t+"`=? ";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, bossid);
	pstmt.setString(2, tValue);
	var result = pstmt.executeQuery();
	if (result.next()) {
		var time = result.getString('time');
		var lastTimestamp = time.substring(0, 10);
		lastTimestamp +=" 00:00:00";
		lastTimestamp = java.sql.Timestamp.valueOf(lastTimestamp).getTime();
		var dayTimestamp = year+"-"+month+"-"+day+" 00:00:00";
		dayTimestamp = java.sql.Timestamp.valueOf(dayTimestamp).getTime();
		if (lastTimestamp == dayTimestamp) {
			times = result.getInt('count');
		} else {
			sql = "UPDATE `pclog` SET `count` = 0, `time` = CURRENT_TIMESTAMP where `bossid`=? and `"+t+"`=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bossid);
			pstmt.setString(2, tValue);
			pstmt.executeUpdate();
			times = 0;
		}
	} else { 
		sql = "INSERT INTO `pclog`(`bossid`,`"+t+"`,`count`) values(?,?,0)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, bossid);
		pstmt.setString(2, tValue);
		pstmt.executeUpdate();
		times = 0;
	}
	result.close();
	pstmt.close();
	return times;
}
function setPCLog(bossid, type) {
	if (type==null)
		type=1;
	var t = 'mac';
	if (type == 1)
		t = 'ipaddress';
	var tValue = (type==0) ? cm.getC().getMac() : cm.getC().getSessionIPAddress();
	var times = getPCLog(bossid, type);
	var conn = cm.getConnection();
	sql = "UPDATE `pclog` SET `count` = ?, `time` = CURRENT_TIMESTAMP where `bossid`=? and `"+t+"`=?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, times+1);
	pstmt.setString(2, bossid);
	pstmt.setString(3, tValue);
	pstmt.executeUpdate();
}