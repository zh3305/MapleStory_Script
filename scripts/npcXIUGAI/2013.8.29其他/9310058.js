var status = 0;

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
        if (cm.getPlayerStat("LVL") >= 180) {
            cm.sendSimple("亲爱的#r" + cm.getChar().getName() + "#k你好，我是每日福利NPC。#b \r\n - 每日活动内容>> #e#d(已签到" + cm.getBossLog("总计签到", 1) + "次 已领取福利" + cm.getBossLog("总计福利", 1) + "次)#n#r\r\n#L1# 每日签到#l\r\n#L2# 每日福利#l\r\n#L3# 签到奖励兑换#l")
        } else {
            cm.sendOk("#r - 每日签到 >> #k\r\n\r\n180级以下的不能参加活动。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n180级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n签到失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日签到") == 0) {
                    cm.gainItem(4032398, 1);//出席图章
                    cm.gainItem(4310002, 2);//国庆纪念币
                    cm.setBossLog("每日签到");
                    cm.setBossLog("总计签到", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功签到.当前签到次数" + cm.getBossLog("总计签到", 1));
                    cm.sendOk("#r - 每日签到 >> \r\n#d签到成功#k\r\n获得7周年纪念币x2#v4310002#\r\n获得#b出席图章#v4032398##k，收集多个可以跟我领取奖励！");
                } else {
                    cm.sendOk("#r - 每日签到 >> #k\r\n\r\n对不起，一天只能签到一次。");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n30级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日福利") == 0) {
		    cm.gainItem(2022118, 3);//管理员的祝福x3
                    cm.gainItemPeriod(5072000,10,1);//高质地喇叭x10
                    cm.gainItemPeriod(5030001,1,1);//雇佣商人x10 
                    cm.gainItemPeriod(5220040,2,1);//转蛋卷x2
                    cm.gainNX(2, 600);//抵用卷 600
                    cm.setBossLog("每日福利");
                    cm.setBossLog("总计福利", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取福利.领取福利总次数" + cm.getBossLog("总计福利", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日福利领取成功#k\r\n获得#v2022118# x 3   #v5072000# x 10 #v5030001# x 1 #v5220040# x 2 获得低用卷600点。");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能福利一次。");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9310058, 1);
        } else if (selection == 4) {
	if (cm.getBossLog("每日雇佣") == 0) {
	    cm.gainItemPeriod(5030001,1,1);
                    cm.setBossLog("每日雇佣");
                    cm.setBossLog("总计雇佣", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取雇佣商店.领取雇佣商店总次数：" + cm.getBossLog("总计雇佣", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日雇佣领取成功#k\r\n获得雇佣商店店卡x1");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能领取一次。");
            cm.dispose();
        }
    }
}
    }