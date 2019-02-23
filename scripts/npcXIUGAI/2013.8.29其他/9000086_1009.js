var status = 0;
var dsd = 0;

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
    if (status == 0) {//            #r #i4005000##r  福利中心  #i4005000##r \r\n
        var selStr = "#r ┈┈┈━═☆#i4251202##r  福利专区  #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + " #r 您好！#d欢迎您进入福利专区！\r\n我们MapleWing为您准备了不一样的福利待遇 ！#b请选择您要需要的服务：\r\n#r#L1009100# #i4021005##r  在线福利  #i4021005##r #l #L1009101# #i4021005##r  每日福利  #i4021005# #l\r\n             #L1009102# #i4021007##r  特殊福利  #i4021007##r #l\r\n             #L1009103# #i4021007##r  VIP 福利  #i4021007##r #l\r\n#r#L1009104# #i4021005##r  福利商店  #i4021005##r #l #L1009105# #i4021005##r  福利彩票  #i4021005# #l\r\n\r\n#L0##e#r福利发放说明 (新人必看！)！#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {


        switch (selection) {

        case 0:

         
         cm.sendOk("#r ┈┈━═☆#i4005000##r  福利发放说明  #i4005000# #r☆═━┈┈ \r\n\r\n#d福利是MapleWing 世界精心准备的高级待遇！\r\n#b以下是福利发放的具体说明：\r\b #r#i4021005##r  #e在线福利#n  #i4021005##r \r\n 每位玩家可以凭借在线积累的活跃点进行领取！\r\n#b主要其中包括：1000抵用卷、50W金币、1贡献点、1个#i5062000:#  \r\n #r#i4021005##r  #e每日福利#n  #i4021005# \r\n#b每位玩家一天只能领一次！\r\n主要其中包括 1W抵用卷、500W金币、10贡献点、1个#i4032398:#  \r\n #i4021007##r  特殊福利  #i4021007##r \r\n#b敬请期待！ \r\n #i4021007##r  VIP 福利  #i4021007##r  \r\n#b敬请期待！\r\n #i4021005##r  福利彩票  #i4021005# \r\n#b敬请期待！");
            cm.dispose();

            break;

        case 1009101:

            dsd = 1;

        if (cm.getPlayerStat("LVL") >= 10) {
            cm.sendSimple("#r ┈┈┈━═☆#i4021005##r  每日福利  #i4021005# #r☆═━┈┈┈ \r\n#b \r\n - 每日活动内容 >> \r\n#b参与条件：10级以上！\r\n#d您目前已签到#e#r " + cm.getBossLog("总计签到", 1) + " #n#d次 已领取福利 #e#r" + cm.getBossLog("总计福利", 1) + " #n#d次 \r\n#r\r\n#L1#  进行每日签到#l\r\n\r\n#L2#  领取每日福利#l\r\n")
        } else {
            cm.sendOk("#r - 每日福利 >> #k\r\n\r\n10级以下的玩家不能领取。");
            cm.dispose();
        }


           // cm.dispose();
            //cm.openNpc(9000086, 1009100);
            break;

        case 1009100:

            dsd = 2;


            cm.sendSimple("#r ┈┈┈━═☆#i4021005##r  在线福利  #i4021005# #r☆═━┈┈┈ \r\n#b \r\n#b参与条件：100级以上！\r\n\r\n#d您目前拥有#e#r" + cm.getMaplewing("mapley") + " #n活跃点#d  已领取在线福利#e#r " + cm.getBossLog("在线福利", 1) + " #n#d次  \r\n#r\r\n#L1#  领取在线福利#l\r\n");



            break;

        case 1009102:
            cm.dispose();
            cm.openNpc(9000086, 1009102);
            break;

        case 1009103:
            cm.dispose();
            cm.openNpc(9000086, 1009103);
            break;


        }

     } else if (status == 2) {

           if (dsd == 1) {


        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n10级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - 每日签到 >> #k\r\n\r\n签到失败，您的其他栏道具空间不足2个空位。");
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
                    cm.gainItemPeriod(5030001,1,1);//雇佣商人x1
                    cm.gainItemPeriod(5220040,10,1);//转蛋卷x10
                    cm.gainNX(2, 1000);//抵用卷 1000
                    cm.gainMeso(5000000);//500W金币
                    cm.setBossLog("每日福利");
                    cm.setBossLog("总计福利", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取福利.领取福利总次数" + cm.getBossLog("总计福利", 1));
                    cm.sendOk("#r - 每日福利 >> \r\n#d每日福利领取成功#k\r\n获得#v2022118# x 3   #v5072000# x 10 #v5030001# x 1 #v5220040# x 10 获得1000低用卷 500W金币。");
                } else {
                    cm.sendOk("#r - 每日福利 >> #k\r\n\r\n对不起，一天只能福利一次。");
                }
            }
            cm.dispose();

        }


      } esle if (dsd == 2) {
 

        if (selection == 1) {

            if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk("#r - 在线福利 >> #k\r\n\r\n100级以下的玩家不能领取。");
            } else if (cm.getSpace(5) < 3) {
                cm.sendOk("#r #k\r\n\r\n领取失败，您的特殊栏道具空间不足3个空位。");
            } else {
                if (cm.getMaplewing("mapley") >= 1) {


                    cm.gainItem(4021005, 1);//神奇魔方x1
                    cm.gainItemPeriod(5072000,2,1);//高质地喇叭x2

                    cm.gainItemPeriod(5220040,2,1);//转蛋卷x2
                    cm.gainNX(2, 200);//抵用卷 200
                    cm.gainMeso(1000000);//100W金币

                    cm.addMaplewing("mapley", -1);
                    cm.setBossLog("在线福利", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取在线福利.当前领取次数" + cm.getBossLog("在线福利", 1));

                    cm.sendOk("#r - 每日签到 >> \r\n#d签到成功#k\r\n获得7周年纪念币x2#v4310002#\r\n获得#b出席图章#v4032398##k，收集多个可以跟我领取奖励！");

                } else {
                    cm.sendOk("#k\r\n\r\n对不起，您的活跃点不足1，无法领取在线福利！\r\n您目前的拥有：#e#r" + cm.getMaplewing("mapley") + " 点活跃点");
                }
            }
            cm.dispose();

        
           



      }
              



        cm.dispose();




    }
}