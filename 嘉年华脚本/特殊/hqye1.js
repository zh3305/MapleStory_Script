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
        var selStr = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#您今天在线：#r"+cm.getOnlineTime()+"#k 分钟#b\r\n";
        selStr += "#L0#" + eff + "#b领取在线60分钟[#r1小时#b]奖励#l\r\n";

		selStr += "#L1#" + eff + "#b领取在线180分钟[#r3小时#b]奖励#l\r\n";

		selStr += "#L2#" + eff + "#b领取在线300分钟[#r5小时#b]奖励#l\r\n";

		selStr += "#L3#" + eff + "#b领取在线420分钟[#r7小时#b]奖励#l\r\n";

		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if (cm.getPQLog("60分钟奖励") == 0 && cm.getOnlineTime() >= 60) {
            cm.gainMeso(+2000000);
            cm.setPQLog("60分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到60分钟.为了表示感谢对本服的支持.给予200W冒险币作为奖励");
            cm.sendOk("#r - 60分钟奖励 >> \r\n#d领取成功#k\r\n获得200W冒险币！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线60分钟哟.或者你已经领取过今天的60分钟奖励了");
			cm.dispose();
			}
			break;
		case 1:
		if (cm.getPQLog("180分钟奖励") == 0 && cm.getOnlineTime() >= 180) {
            cm.gainItem(5062009, 20);//超级神奇魔方 20个
            cm.setPQLog("180分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到180分钟.为了表示感谢对本服的支持.给予20个超级神奇魔方作为奖励");
            cm.sendOk("#r - 180分钟奖励 >> \r\n#d领取成功#k\r\n获得#v5062009#x20");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线180分钟哟.或者你已经领取过今天的180分钟奖励了");
			cm.dispose();
			}
			break;
		case 2:		
		if (cm.getPQLog("300分钟奖励") == 0 && cm.getOnlineTime() >= 300) {
            cm.gainNX(2, +15000);
            cm.setPQLog("300分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到300分钟.为了表示感谢对本服的支持.给予15000抵用卷作为奖励");
            cm.sendOk("#r - 300分钟奖励 >> \r\n#d领取成功#k\r\n获得15000抵用卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线300分钟哟.或者你已经领取过今天的300分钟奖励了");
			cm.dispose();
			}
			break;
		case 3:
		if (cm.getPQLog("420分钟奖励") == 0 && cm.getOnlineTime() >= 420) {
            cm.gainNX(2, +20000);
            cm.setPQLog("420分钟奖励");
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "玩家今天上线已经达到420分钟.为了表示感谢对本服的支持.给予2W抵用卷作为奖励");
            cm.sendOk("#r - 420分钟奖励 >> \r\n#d领取成功#k\r\n获得2W抵用卷！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有在线420分钟哟.或者你已经领取过今天的420分钟奖励了");
			cm.dispose();
			}
			break;

	}
    }
}