var status = 0;
var eff ="#fEffect/CharacterEff/1102232/2/0#";
var sl =1 + Math.floor(Math.random() * 5);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

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
	        if(month == 12 && day <= 31 && day > 24 ){
            cm.sendSimple("=======================#r圣诞节#b专场#k=====================\r\n亲爱的#r" + cm.getChar().getName() + "#k，Merry Christmas！,我是#p9209101#。\r\n 从圣诞节开始，我每天都会有小礼物送给你哦！让你在这冬日里，心变得暖暖的。感谢你支持#rChina冒险岛#k，有你的校园会越来越好！\r\n#L1#" + eff + " #b圣诞老人，我要礼物!#n#l#k #v2430608##z2430608#\r\n#L2#" + eff + " #r「累计」#b领取奖励次数赢取道具!~#k#n#l")
        } else {
		    cm.sendOk("活动时间为：#b 2014 年 12 月 25 日#k—#b 2014 年 12 月 30 日#k\r\n当前日期为:#e#r "+ year +" 年 "+ month +" 月 "+ day +" 日#k#n。");
			cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getBossLog("圣诞礼物") > 0 || cm.getGamePoints() < 180 ) {
                cm.sendOk("#r - 圣诞礼物 >> #k\r\n\r\n你已经领过了或者在线时间不够 #r3#k 个小时。");
            } else if (cm.getSpace(2) < 1 || cm.getSpace(3) < 1 ) {
                cm.sendOk("#r - 圣诞签到 >> #k\r\n\r\n你的背包是不是装满了?");
            } else {
                    cm.gainItem(2430608, 1);  
                    cm.gainItem(4310011, sl); 
                    cm.setBossLog("圣诞礼物");
                    cm.setBossLog("总计礼物", 1);
		            cm.worldMessage(0x18,""+ cm.getChar().getName() +"" + " : " + "耶！我收到了圣诞老人的礼物了，这是第 " + cm.getBossLog("总计礼物", 1) + " 次了哦，心动就赶快行动吧！");
                    cm.sendOk("#r - 圣诞礼物 >> \r\n#d礼物给你了,总共是:#k\r\n#b#v2430608##z2430608# x1\r\n#v4310011##z4310011# x"+ sl +"#k\r\n开心吗？");
            }
            cm.dispose();
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9209101, 4);
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
           /* if (cm.getPlayerStat("LVL") < 70) {
                cm.sendOk("#r - 每日福利 >> #k\r\n\r\n70级以下的不能参加活动。");
            } else  */
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
