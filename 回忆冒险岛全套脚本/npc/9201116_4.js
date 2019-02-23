var status = 0;
var bossid = "补偿礼包";
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
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var text = "";
		if (month==3 && day==1 && hour==20 && (minute>=40 && minute <=59)) {
			text += "2月28日补偿礼包，请于3月1日晚8点40分到9点之间前来领取。\r\n";
			text+="#b#L1#领取补偿礼包#l\r\n";
			//text+="#b#L2#领取360分钟奖励【15000点卷和15000抵用券】#l";
			cm.sendSimple(text);
		} else {
			cm.sendOk("活动已经结束");
			cm.dispose();
		}
	} else if (status == 1) {
		typed = selection;
		cm.sendYesNo("是否现在就领取补偿礼包，每个账号只能领取一次，并且角色等级需要大于等于160级。");
	} else if (status == 2) {
		
		var needtime = 120;
		
		if (cm.getPlayer().getTodayOnlineTime()>=needtime) {
			if (cm.getBossLogAcc(bossid+typed)!=-1) {
				cm.setBossLogAcc(bossid+typed, -2);
				cm.gainItem(5062009, 10);
				cm.gainItem(5062500, 10);
				cm.gainNX(1, 10000);
				cm.gainNX(2, 50000);
				cm.sendOk("领取成功！您获得了10个超级神奇魔方，10个大师附加神奇魔方，10000点卷和50000抵用券。");
				cm.dispose(); 
			} else {
				cm.sendOk("领取失败，您已经领取过了");
				cm.dispose();
			}
		} else {
			cm.sendOk("您的在线时间不足"+needtime+"分钟！");
			cm.dispose();
		}
	}
}