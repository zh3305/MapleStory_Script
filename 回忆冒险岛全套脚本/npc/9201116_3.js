var status = 0;
var bossid = "点卷礼包";
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
		if ((month==2 || month==3) && (day == 28 || (day >=1 && day <=3))) {
			text += "2月28日至3月3日之间，每天可以在此处根据在线时间领取点卷和抵用券奖励。\r\n";
			text+="#b#L1#领取120分钟奖励【5000点卷】#l\r\n";
			text+="#b#L2#领取360分钟奖励【15000点卷和15000抵用券】#l";
			cm.sendSimple(text);
		} else {
			cm.sendOk("活动已经结束");
			cm.dispose();
		}
	} else if (status == 1) {
		typed = selection;
		cm.sendYesNo("是否现在就领取点卷奖励，每个账号只能领取一次，并且角色等级需要大于等于180级。");
	} else if (status == 2) {
		var points = 0;
		var nxpoints = 0;
		var needtime = 120;
		if (typed==1) {
			points = 5000;
			nxpoints = 0;
			needtime = 120;
		} else if (typed==2){
			points = 15000;
			nxpoints = 15000;
			needtime = 360;
		}
		if (cm.getPlayer().getTodayOnlineTime()>=needtime) {
			if (cm.getBossLogAcc(bossid+typed)==0) {
				cm.setBossLogAcc(bossid+typed);
				cm.gainNX(1, points);
				cm.gainNX(2, nxpoints);
				cm.sendOk("领取成功！");
				cm.dispose(); 
			} else {
				cm.sendOk("领取失败，您今日已经领取过了");
				cm.dispose();
			}
		} else {
			cm.sendOk("您的在线时间不足"+needtime+"分钟！");
			cm.dispose();
		}
	}
}