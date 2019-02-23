/*芬芬时尚潮流  在线时间兑换东西*/
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#您今天在线：#r"+cm.getOnlineTime()+"#k 分钟#b\r\n";
        selStr += "#L0#" + eff + "#b领取在线60分钟[#r1小时#b]奖励#l\r\n";
        selStr += "#L1#" + eff + "#b领取在线120分钟[#r2小时#b]奖励#l\r\n";
		selStr += "#L2#" + eff + "#b领取在线180分钟[#r3小时#b]奖励#l\r\n";
		selStr += "#L3#" + eff + "#b领取在线240分钟[#r4小时#b]奖励#l\r\n";
		selStr += "#L4#" + eff + "#b领取在线300分钟[#r5小时#b]奖励#l\r\n";
		selStr += "#L5#" + eff + "#b领取在线360分钟[#r6小时#b]奖励#l\r\n";
		selStr += "#L6#" + eff + "#b领取在线420分钟[#r7小时#b]奖励#l\r\n";
		selStr += "#L7#" + eff + "#b领取在线480分钟[#r8小时#b]奖励#l\r\n";
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if (cm.getPQLog("60分钟奖励") == 0 && cm.getOnlineTime() >= 60) {
            cm.gainMeso(+1000000);
            cm.setPQLog("60分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到60分钟.为了表示感谢对本服的支持.给予100W冒险币作为奖励");
            cm.sendOk("#r - 60分钟奖励 >> \r\n#d领取成功#k\r\n获得100W冒险币！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线60分钟哟.或者你已经领取过今天的60分钟奖励了");
			cm.dispose();
			}
			break;
		case 1:
		if (cm.getPQLog("120分钟奖励") == 0 && cm.getOnlineTime() >= 120) {
            cm.gainItem(2432466, 5);//音符礼盒 5个
            cm.setPQLog("120分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到120分钟.为了表示感谢对本服的支持.给予5个明日礼物箱子作为奖励");
            cm.sendOk("#r - 120分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2432466#x5");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线120分钟哟.或者你已经领取过今天的120分钟奖励了");
			cm.dispose();
			}
			break;
		case 2:
		if (cm.getPQLog("180分钟奖励") == 0 && cm.getOnlineTime() >= 180) {
            cm.gainItem(2431046, 2);//末日风暴币 2个
            cm.setPQLog("180分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到180分钟.为了表示感谢对本服的支持.给予2个韩果礼盒作为奖励");
            cm.sendOk("#r - 180分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2431046#x2");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线180分钟哟.或者你已经领取过今天的180分钟奖励了");
			cm.dispose();
			}
			break;
		case 3:
		if (cm.getPQLog("240分钟奖励") == 0 && cm.getOnlineTime() >= 240) {
            cm.gainItem(2431046, 2);//韩果礼盒 2个
            cm.setPQLog("240分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到240分钟.为了表示感谢对本服的支持.给予2个韩果礼盒作为奖励");
            cm.sendOk("#r - 240分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2431046#x2");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线240分钟哟.或者你已经领取过今天的240分钟奖励了");
			cm.dispose();
			}
			break;
		case 4:
		if (cm.getPQLog("300分钟奖励") == 0 && cm.getOnlineTime() >= 300) {
            cm.gainItem(2049160, 1);//一张正向混沌
            cm.setPQLog("300分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到300分钟.为了表示感谢对本服的支持.给予1张正向混沌卷作为奖励");
            cm.sendOk("#r - 300分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2049160#x1！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线300分钟哟.或者你已经领取过今天的300分钟奖励了");
			cm.dispose();
			}
			break;
		case 5:
		if (cm.getPQLog("360分钟奖励") == 0 && cm.getOnlineTime() >= 360) {
            cm.gainNX(2, +20000);
            cm.setPQLog("360分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到360分钟.为了表示感谢对本服的支持.给予2W抵用卷作为奖励");
            cm.sendOk("#r - 360分钟奖励 >> \r\n#d领取成功#k\r\n获得1W抵用卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线360分钟哟.或者你已经领取过今天的360分钟奖励了");
			cm.dispose();
			}
			break;
		case 6:
		if (cm.getPQLog("420分钟奖励") == 0 && cm.getOnlineTime() >= 420) {
            cm.gainNX(2, +20000);
            cm.setPQLog("420分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到420分钟.为了表示感谢对本服的支持.给予2W抵用卷作为奖励");
            cm.sendOk("#r - 420分钟奖励 >> \r\n#d领取成功#k\r\n获得2W抵用卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线420分钟哟.或者你已经领取过今天的420分钟奖励了");
			cm.dispose();
			}
			break;
		case 7:
		if (cm.getPQLog("480分钟奖励") == 0 && cm.getOnlineTime() >= 480) {
            cm.gainNX(1, +20000);
            cm.setPQLog("480分钟奖励");
		    cm.worldMessage(cm.getChar().getName() + "玩家今天上线已经达到480分钟.为了表示感谢对本服的支持.给予2W点卷作为奖励");
            cm.sendOk("#r - 480分钟奖励 >> \r\n#d领取成功#k\r\n获得2W点卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线480分钟哟.或者你已经领取过今天的480分钟奖励了");
			cm.dispose();
			}
			break;
	}
    }
}