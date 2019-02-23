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
        if (cm.getPlayerStat("LVL") >= 160) {
            cm.sendSimple("亲爱的#r" + cm.getChar().getName() + "#k你好，我是每日福利NPC。#b \r\n - 每日活动内容>> #e#d(已签到" + cm.getBossLog("总计签到", 1) + "次 已领取福利" + cm.getBossLog("总计福利", 1) + "次)#n#r\r\n#L1# 每日签到#l\r\n#L2# 每日福利#l\r\n#L3# 签到奖励兑换#l")
        } else {
            cm.sendOk("#r - 每日签到 >> #k\r\n\r\n160级以下的不能参加活动。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 120) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n120级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n签到失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日签到") == 0) {
		    cm.registerSquad("ChaosHT",null," 已经领取了本日的福利. - 领取福利总次数为" + cm.getBossLog("总计签到", 1)+1 + "次");
                    cm.gainItem(4032398, 1);
                    cm.gainItem(4310002, 5);
                    cm.setBossLog("每日签到");
                    cm.setBossLog("总计签到", 1);
                    cm.sendOk("#r - 每日签到 >> \r\n#d签到成功#k\r\n获得7周年纪念币\r\n获得#b#i4032398##t4032398##k，收集多个可以跟我领取奖励！");
                } else {
                    cm.sendOk("#r - 每日签到 >> #k\r\n\r\n对不起，一天只能签到一次。");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 160) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n160级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日福利") == 0) {
		    cm.registerSquad("ChaosHT",null," 已经领取了本日的福利. - 领取福利总次数为" + cm.getBossLog("总计福利", 1)+1 + "次");
		    cm.gainItem(5072000, 1);
		    cm.gainItem(5073000, 1);
		    cm.gainItem(5074000, 1);
		    cm.gainItem(2022118, 3);
                    cm.gainNX(2, 1500);
                    cm.setBossLog("每日福利");
                    cm.setBossLog("总计福利", 1);
                    cm.sendOk("#r - 每日福利 >> \r\n#d签到成功#k\r\n获得1500点卷\r\n获得#b\r\n#i5360014#\r\n#i2022118#\r\n#i5072000##i5073000##i5074000#");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能福利一次。");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.sendOk("敬请期待！")
            cm.dispose();
        }
    }
}