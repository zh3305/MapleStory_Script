var status = 0;
var eff ="#fEffect/CharacterEff/1102232/2/0#";

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
            cm.sendSimple("亲爱的#r" + cm.getChar().getName() + "#k你好，我是每日福利NPC。#b \r\n - 每日活动内容>> #b可以领取以下的奖励哦\r\n#L1#" + eff + " #b每日#r签到#n#l\r\n#L4#" + eff + " #b免费#r领取雇佣店卡#n#l\r\n#L15#" + eff + " #r每日累计在线时间奖励#l\r\n#L3#" + eff + " #b签到奖励兑换#l")
        } else {
            cm.sendOk("#r - 每日签到 >> #k\r\n\r\n180级以下的不能参加活动。");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
		    if (cm.getEventCount("每日福利") > 0) {
			    cm.sendOk("#r - 每日签到 >> #k\r\n\r\n该帐号已经领取过一次福利了。");
            } else if (cm.getPlayerStat("LVL") < 120) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n120级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n签到失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日签到") == 0 && cm.getGamePoints() >= 60) {
                    cm.gainItem(4032398, 1);
                    cm.setEventCount("每日福利");
                    cm.setBossLog("总计签到", 1);
		            cm.worldMessage(cm.getChar().getName() + "玩家成功签到.当前签到次数" + cm.getBossLog("总计签到", 1));
                    cm.sendOk("#r - 每日签到 >> \r\n#d签到成功#k\r\n获得7周年纪念币\r\n获得#b出席图章#v4032398##k，收集多个可以跟我领取奖励！");
                } else {
                    cm.sendOk("#r - 每日签到 >> #k\r\n\r\n对不起，一天只能签到一次。\r\n或您要在线 1 小时以上才能签到！");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 180) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n180级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 3) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的其他栏道具空间不足。");
            } else {
                if (cm.getBossLog("每日福利") == 0  && cm.getGamePoints()>20) {
		    cm.gainItem(2022118, 3);
		    cm.gainItem(2460003, 2);
                    cm.gainItem(4033136, 1);
                    cm.gainNX(2, 2000);
                    cm.setBossLog("每日福利");
                    cm.setBossLog("总计福利", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取福利.领取福利总次数" + cm.getBossLog("总计福利", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日福利领取成功#k\r\n获得管理员的祝福#v2022118# x 3   获得抵用卷2000点。放大镜 x 2");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能福利一次。\r\n或您要在线20分钟以上时才能领取！");
                }
            }
            cm.dispose();
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9310058, 1);
        } else if (selection == 15) {
            cm.dispose();
            cm.openNpc(9900001, 3013);
        } else if (selection == 5) {
            if(cm.getBossLog("每日赠点") == 0  && cm.getGamePoints()>360){
		cm.gainNX(2, 2000);
		cm.setBossLog("每日赠点");
                    cm.setBossLog("总计赠点", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取赠点2000抵用卷.领取赠点总次数" + cm.getBossLog("总计赠点", 1) + "注：一个角色2000,一个账号最多19角色,每日就能领取36000抵用卷哦!");
                    cm.sendOk("#r - 每日赠点 >> \r\n#d每日赠点领取成功#k\r\n获得赠点2000抵用卷...\r\n注：一个角色2000,一个账号最多19角色,每日就能领取36000抵用卷哦!\r\n#r挂机满足6小时 点击拍卖-万能NPC-积分在线活力兑换3万2点卷。。");
                } else {
                    cm.sendOk("#r - 每日赠点 >> #k\r\n\r\n对不起，一天只能赠点一次。\r\n或您要在线6小时以上才能领取！");
                }
		cm.dispose();
        } else if (selection == 4) {
           if (cm.getPlayerStat("LVL") < 200) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n200级以下的不能参加活动。");
            } else {
	    if (cm.getSpace(5) < 3) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n福利失败，您的现金栏道具空间不足。");
	} else if (cm.getBossLog("每日雇佣") == 0) {
	    cm.gainItemPeriod(5030019,1,1);
                    cm.setBossLog("每日雇佣");
                    cm.setBossLog("总计雇佣", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取雇佣商店.领取雇佣商店总次数：" + cm.getBossLog("总计雇佣", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日雇佣领取成功#k\r\n获得雇佣商店店卡x1");
            cm.dispose();
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能领取一次。");
            cm.dispose();
        }
	  }
    }
}
    }