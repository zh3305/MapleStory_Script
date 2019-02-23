var status = 0;
var jf = 20;//兑换数量

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
        if (cm.getPlayerStat("LVL") >= 0) {
            cm.sendSimple("亲爱的#r" + cm.getChar().getName() + "#k你好，我是每日福利NPC。#b \r\n - 每日活动内容>> #e#d(已签到" + cm.getPQLog("总计签到", 1) + "次 已领取福利" + cm.getPQLog("总计福利", 1) + "次)#n#r\r\n#L1# 每日签到#l\r\n#L2# 每日福利#l\r\n#L4# 免费领取雇佣店卡#l\r\n#L6##d 每日BOSS入场劵#b#l\r\n#L3# 签到奖励兑换#l") //#L5# 每日赠点[New 每天送点卷]#l\r\n
        } else {
            cm.sendOk("#r - 每日签到 >> #k\r\n\r\n180级以下的不能参加活动。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 120) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n120级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n签到失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getPQLog("每日签到10") == 0 && cm.getOnlineTime() > 60) {
                    cm.gainItem(2431152, 1);
                   // cm.gainItem(4310110, 1);
                    cm.gainItem(4032398, 1);
                    cm.gainPlayerPoints(jf * 1);
                    cm.setPQLog("每日签到10");
                    cm.setPQLog("总计签到10", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功签到.当前签到次数" + cm.getPQLog("总计签到10", 1));
                    cm.sendOk("#r - 每日签到 >> \r\n#d签到成功#k\r\n获得#b每日礼包#v2431152##k 及20积分，收集多个可以跟我领取奖励！");
                } else {
                    cm.sendOk("#r - 每日签到 >> #k\r\n\r\n对不起，一天只能签到一次。\r\n或您要在线1小时以上才能签到！");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n180级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 3) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getPQLog("每日福利10") == 0  && cm.getOnlineTime()>20) {
		    cm.gainItem(2022118, 5);
		    cm.gainItem(2049100, 2);
                    cm.gainNX(2, 5000);
                    cm.setPQLog("每日福利10");
                    cm.setPQLog("总计福利10", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取福利.领取福利总次数" + cm.getPQLog("总计福利10", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日福利领取成功#k\r\n获得管理员的祝福#v2022118# x 5   获得抵用卷5000点。#v2049100# x 2");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能福利一次。\r\n或您要在线20分钟以上时才能领取！");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9310058, "qiandao1");
        } else if (selection == 6) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - 每日BOSS入场劵 >> #k\r\n\r\n180级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 3) {
                cm.sendOk("#r - 每日BOSS入场劵 >> #k\r\n\r\n福利失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getPQLog("每日入场劵10") == 0  && cm.getOnlineTime()>60) {
		    cm.gainItem(4001086, 1);
		    cm.gainItem(4000385, 1);
		    cm.gainItem(4033304, 1);
		    cm.gainItem(4033406, 1);
		    cm.gainItem(4032246, 1);
		    cm.gainItem(4032002, 1);
		    cm.gainItem(4033117, 1);
		    cm.gainItem(4033981, 1);
		    cm.gainItem(4032923, 1);
		    cm.gainItem(4033255, 1);
		    cm.gainItem(4033611, 1);
                    cm.setPQLog("每日入场劵10");
                    cm.setPQLog("总计入场劵10", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取每日BOSS入场劵.领取福利总次数" + cm.getPQLog("总计入场劵10", 1));
                    cm.sendOk("#r - 每日BOSS入场劵 >> \r\n#d每日福利领取成功#k\r\n获得#v4001086# x1 #v4000385# x1 #v4033304# x1 #v4033406# x1 #v4032246# x1 #v4032002# x1 #v4033117# x1 #v4033981# x1 #v4032923# x1 #v4033255# x1 #v4033611# x1");
                } else {
                    cm.sendOk("#r - 每日BOSS入场劵 >> #k\r\n\r\n对不起，一天只能福利一次。\r\n或您要在线60分钟以上时才能领取！");
                }
            }
            cm.dispose();
        } else if (selection == 5) {
            if(cm.getPQLog("每日赠点10") == 0  && cm.getOnlineTime()>360){
		cm.gainNX(1, 1000);
		cm.setPQLog("每日赠点10");
                    cm.setPQLog("总计赠点", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取赠点1000点卷.领取赠点总次数" + cm.getPQLog("总计赠点", 1) + "注：一个角色1000,一个账号最多30角色,每日就能领取30000点卷哦!");
                    cm.sendOk("#r - 每日赠点 >> \r\n#d每日赠点领取成功#k\r\n获得赠点1000点卷...\r\n注：一个角色1000,一个账号最多30角色,每日就能领取30000点卷哦!");
                } else {
                    cm.sendOk("#r - 每日赠点 >> #k\r\n\r\n对不起，一天只能赠点一次。\r\n或您要在线6小时以上才能领取！");
                }
		cm.dispose();
        } else if (selection == 4) {
           /* if (cm.getPlayerStat("LVL") < 70) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n70级以下的不能参加活动。");
            } else  */
	    if (cm.getSpace(5) < 3) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的现金栏道具空间不足。");
	} else if (cm.getPQLog("每日雇佣10") == 0) {
	    cm.gainItemPeriod(5030019,1,1);
                    cm.setPQLog("每日雇佣10");
                    cm.setPQLog("总计雇佣10", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取雇佣商店.领取雇佣商店总次数：" + cm.getPQLog("总计雇佣10", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日雇佣领取成功#k\r\n获得雇佣商店店卡x1");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能领取一次。");
            cm.dispose();
        }
    }
}
    }