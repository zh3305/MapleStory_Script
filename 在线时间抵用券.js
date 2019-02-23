var status = -1;

var onlineTime = Array(180,480); //填写时间，单位:分钟,即180分钟和480分钟可以领取一次
var mPoints = Array(8000, 20000);  //填写抵用卷，用逗号分隔，对应上面的分钟数
var icon ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "你好，欢迎来到抵用券领取中心，如果你满足条件，就可以领取以下抵用券奖励。\r\n";
		for(var key in onlineTime) {
			text +="#L"+key+"#"+icon+"在线"+onlineTime[key]+"领取"+mPoints[key]+"抵用券#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1){
		var sel = selection;
		var needTime = onlineTime[sel];
		var points = mPoints[sel];
		if (cm.getBossLog("在线抵用"+sel) == 0) {
			if (cm.getPlayer().getTodayOnlineTime() >= needTime) {
				cm.gainNX(2, points);
				cm.setBossLog("在线抵用"+sel);
				cm.getPlayer().dropMessage(1, "成功领取了"+points+"抵用券");
				cm.worldSpouseMessage(0x23, "[在线抵用] : 玩家 "+cm.getPlayer().getName()+" 领取了 "+needTime+"分钟 抵用券奖励。");
			} else {
				var lastTime = cm.getPlayer().getTodayOnlineTime() - needTime;
				cm.sendOk("您的在线时间不足"+needTime+"分钟，还需要#r"+lastTime+"#k分钟。");
			}
		} else {
			cm.sendOk("您已经领取过了该奖励，无法重复领取。");
		}
		cm.dispose();
	}
}