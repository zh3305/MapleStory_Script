var status = 0;
//////////////////////////////////////////////////
//礼包名称
var bosslogId = "开区礼包1";
//礼包开始领取时间
var startTime = "2015-4-17 21:00:00";
//礼包结束领取时间
var endTime = "2015-5-17 22:03:00";
//领取要求最小等级
var minLevel = 0;
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
			var text = "你好，我是福利礼包管理员。\r\n";
			text+="#b#L1#领取新手礼包#l\r\n";
			//text+="#L2#领取节日礼物#l\r\n";
			//text+="#L3#了解什么是节日礼物#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			if (selection == 1) {
				if (cm.getPlayer().getLevel() < minLevel) {
					cm.sendOk("您的等级小于"+minLevel+"级，无法领取礼包，请加油哦！");
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
				
				if (cm.getBossLogAcc(bosslogId)!=-1) {
					//写入BOSSLOG
					cm.setBossLogAcc(bosslogId, -2);
					//定义礼包内容 ID,数量
					var itemList = Array(
						Array(1102563, 1),
						Array(1122253, 1),
						Array(1132229, 1),
						Array(1012377, 1),
						Array(1052613, 1)
					);
					
					var str = "您成功领取了本服送你的礼包，礼包内容如下：\r\n";
					for (var key in itemList) {
						str +="#b#v"+itemList[key][0]+"##t"+itemList[key][0]+"##kx#r"+itemList[key][1]+"#k\r\n";
						cm.gainItem(itemList[key][0], itemList[key][1]);
					}
					if (cm.getBossLogAcc("开区礼包")!=-1) {
						str+="#b点卷#kx#r1000#k点\r\n";
						cm.gainNX(1, 1000); //点卷1000
						cm.sendOk(str);
						cm.setBossLogAcc("开区礼包", -2);
					}
					cm.dispose();
				} else {
					cm.sendOk("您已经领取过补偿礼包");
					cm.dispose();
				}
			} else if (selection == 2) {
				cm.sendOk("当前没有节日礼物，下次节日礼物时间为：#r2015-2-10#k");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendSimple("逢年过节我都会给大家带来一些好礼。每次节日礼物或者补偿奖励都可以到我这里来领取。");
				status=-1;
				//cm.dispose();
			}
		}
   }
}