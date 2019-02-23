var status = 0;
//////////////////////////////////////////////////
//礼包名称
var bosslogId = "星之力勋章";
//礼包开始领取时间
var startTime = "2014-12-27 20:30:00";
//礼包结束领取时间
var endTime = "2014-12-27 23:00:00";
//领取要求最小等级
var minLevel = 180;
//需要在线时间
var minOnlineTime = 240;
//////////////////////////////////////////////////
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
			var text = "你好，我是活动特使，我会为你带来最新活动。\r\n";
			text+="#b#L1#领取星之力勋章#l\r\n";
			text+="#r#L6#超值福袋，聚划算，抢购第一波!！#l\r\n#b";
			//text+="#L2#领取开服七天礼[2015年3月20日-2015年3月26日]#l\r\n";
			text+="#L3#领取首冲累计奖励#l\r\n";
			//text+="#L4#天降点卷活动[2015年2月28日-2015年3月3日]#l\r\n"
			//text+="#r#L5#28日停服维护补偿[2015年3月1日晚上8点40分]#l\r\n"
			//text+="#L3#了解什么是节日礼物#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			if (selection == 1) {
				/*
				if (cm.getPlayer().getLevel() < minLevel) {
					cm.sendOk("您的等级小于#r"+minLevel+"#k级，无法领取礼包，请加油哦！");
					cm.dispose();
					return; 
				}
				if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
					cm.sendOk("在线时间小于#r"+minOnlineTime+"#k分钟，无法领取礼包，请加油哦！");
					cm.dispose();
					return; 
				}
				var currentTimestamp = java.lang.System.currentTimeMillis();
				var startTimestamp = java.sql.Timestamp.valueOf(startTime).getTime();
				var endTimestamp = java.sql.Timestamp.valueOf(endTime).getTime();
				//限制领取时段
				if (currentTimestamp < startTimestamp || currentTimestamp > endTimestamp) {
					cm.sendOk("领取时间为：#r"+startTime.substring(0, 16)+"#k至#r"+endTime.substring(0, 16)+"#k，当前时间还未到或已经超时");
					cm.dispose();
					return ;
				}
				*/
				
					//定义礼包内容 ID,数量
					var itemList = Array(
						Array(2430505,1)
					);
					var str = "您成功领取了礼包，礼包内容如下：\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				
			} else if (selection == 2) {/*
				var giftBosslogId = '节日礼包20150101';
				if (cm.getBossLogAcc(giftBosslogId)!=-1) {
					
					if (cm.getPlayer().getLevel() < minLevel) {
						cm.sendOk("您的等级小于#r"+minLevel+"#k级，无法领取礼包，请加油哦！");
						cm.dispose();
						return; 
					}
					if (cm.getPlayer().getTodayOnlineTime() < minOnlineTime) {
						cm.sendOk("在线时间小于#r"+minOnlineTime+"#k分钟，无法领取礼包，请加油哦！");
						cm.dispose();
						return; 
					}
					//写入BOSSLOG
					cm.setBossLogAcc(giftBosslogId, -2);
					var itemList = Array(
						Array(5062000, 10),
						Array(5062002, 10),
						Array(5062500, 10),
						Array(2431741, 5)
					);
					var str = "您成功领取了节日礼包，礼包内容如下：\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					cm.sendOk(str);
					cm.dispose();
				} else {
					cm.sendOk("您已经领过礼包了！");
					cm.dispose();
				}*/
				cm.dispose();
				cm.openNpc(9201116, 1);
			} else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9201116, 2);
				//cm.dispose();
			} else if (selection == 4) {
				cm.dispose();
				cm.openNpc(9201116, 3);
				//cm.dispose();
			} else if (selection == 5) {
				cm.dispose();
				cm.openNpc(9201116, 4);
				//cm.dispose();
			} else if (selection == 6) {
				cm.dispose();
				cm.openNpc(9310144,666);
				//cm.dispose();
			}
		}
   }
}