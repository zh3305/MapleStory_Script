var status = 0;
var dsd = 0;

var qdwp1 = 4032398;//出席图章
var qdwp2 = 4310002;//国庆纪念币

var mrfl1 = 5062000;//神奇魔方
var mrfl2 = 2022118;//管理员的祝福
var mrfl3 = 5072000;//高质地喇叭
var mrfl4 = 5030001;//雇佣商人
var mrfl5 = 5220040;//转蛋卷

var mrdj = 1000;//每日给的点卷
var mrjb = 5000000;//每日给的金币


var zxfl1 = 5062000;//神奇魔方
var zxfl2 = 5072000;//高质地喇叭
var zxfl3 = 5220040;//转蛋卷

var zxdj = 200;//在线给的点卷
var zxjb = 1000000;//在线给的金币


var gqdwp1 = 1;
var gqdwp2 = 2;

var gmrfl1 = 3;
var gmrfl2 = 3;
var gmrfl3 = 10;
var gmrfl4 = 1;
var gmrfl5 = 10;


var gzxfl1 = 1;
var gzxfl2 = 2;
var gzxfl3 = 2;

var mds = "";
var mdss = "";
var mdsss = "";


var ads = 1;//小计数
var huoy;
var nbs;

var pjb;


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

        huoy = cm.getMaplewing("mapley");
        pjb = cm.getMeso();

        var selStr = "#r ┈┈┈━═☆#i4251202##r  福利专区  #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + " #r 您好！#d欢迎您进入福利专区！\r\n我们MapleWing为您准备了不一样的福利待遇 ！\r\n#b请选择您要需要的服务：\r\n#r#L1009100# #i4021005##r  在线福利  #i4021005##r #l #L1009101# #i4021005##r  每日福利  #i4021005# #l\r\n             #L1009102# #i4021007##r  特殊福利  #i4021007##r #l\r\n             #L1009103# #i4021007##r  VIP 福利  #i4021007##r #l\r\n#r#L1009104# #i4021005##r  福利商店  #i4021005##r #l #L1009105# #i4021005##r  福利彩票  #i4021005# #l\r\n\r\n#L0##e#r福利发放说明 (新人必看！)！#l\r\n";
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

        mds += "#r ┈┈┈━═☆#i4021005##r  每日福利  #i4021005# #r☆═━┈┈┈ \r\n";

            cm.sendSimple(mds + "#b参与条件：10级以上！\r\n#d您目前已签到#e#r " + cm.getBossLog("总计签到", 1) + " #n#d次 已领取福利 #e#r" + cm.getBossLog("总计福利", 1) + " #n#d次 \r\n#b签到礼物：#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " \r\n#b福利礼物：#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d抵用卷#r#e " + mrjb + "#n#d金币 \r\n\r\n#e#r#L1#  进行每日签到#l       #L2#  领取每日福利#l\r\n")
        } else {
            cm.sendOk(mds + "#k\r\n\r\n10级以下的玩家不能领取!!!!");
            cm.dispose();
        }


           // cm.dispose();
            //cm.openNpc(9000086, 1009100);
            break;

        case 1009100:

            dsd = 2;
            ads = huoy;

            nbs = (gzxfl1 + gzxfl2 + gzxfl3)*ads/100 + 3;

        mdss = "#r ┈┈┈━═☆#i4021005##r  在线福利  #i4021005# #r☆═━┈┈┈ \r\n";


            cm.sendSimple(mdss + "\r\n#b参与条件：100级以上！背包有足够的空位！\r\n\r\n#d您目前拥有  #e#r" + cm.getMaplewing("mapley") + " #n活跃点#d  已领取在线福利#e#r " + cm.getBossLog("在线福利", 1) + " #n#d次  \r\n#b福利礼物：#i" + zxfl1  + ":# #kx#r " + gzxfl1 + " #i" + zxfl2  + ":# #kx#r " + gzxfl2  + " #i" + zxfl3  + ":# #kx#r " + gzxfl3  + "  #r#e" + zxdj + " #n#d抵用卷#r#e " + zxjb + "#n#d金币  \r\n#b注意：一点活跃点可以领取一次在线福利，活跃点每十分钟系统自动赠送一次。#r#e\r\n#L1#领取一次在线福利#l    #L2#领取 " + huoy + " 次在线福利#l\r\n\r\n#k#n注: 一次性领取#e#r" + huoy + "#n#k次福利，请在特殊栏留出#e#r" + nbs + "#n#k个空位！\r\n全部领取后您将会获得以下物品：\r\n#i" + zxfl1  + ":# #kx#r " + gzxfl1*ads + " #i" + zxfl2  + ":# #kx#r " + gzxfl2*ads  + " #i" + zxfl3  + ":# #kx#r " + gzxfl3*ads  + "  #r#e" + zxdj*ads + " #n#d抵用卷#r#e " + zxjb*ads + "#n#d金币\r\n注意：当所领取得到的金币超过1E时，系统将把金币自动打入您在MaplewingBank的账户内！ ");



            break;

        case 1009102:
            cm.dispose();
            cm.sendOk("敬请期待！！");
            //cm.openNpc(9000086, 1009102);
            break;

        case 1009103:
            cm.dispose();
            cm.sendOk("敬请期待！！");
           // cm.openNpc(9000086, 1009103);
            break;
       case 1009104:
            cm.dispose();
            cm.sendOk("敬请期待！！");
            //cm.openNpc(9000086, 1009102);
            break;

        case 1009105:
            cm.dispose();
            cm.sendOk("敬请期待！！");
           // cm.openNpc(9000086, 1009103);
            break;


        }

     } else if (status == 2) {

           if (dsd == 1) {


        mdsss += "#r ┈┈┈━═☆#i4021005##r  每日签到  #i4021005# #r☆═━┈┈┈ \r\n";


        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk(mdsss + "#k\r\n\r\n10级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk(mdsss + "#k\r\n\r\n签到失败，您的其他栏道具空间不足2个空位。");
            } else {
                if (cm.getBossLog("每日签到") == 0) {
                    cm.gainItem(qdwp1, gqdwp1);//出席图章
                    cm.gainItem(qdwp1, gqdwp2);//国庆纪念币
                    cm.setBossLog("每日签到");
                    cm.setBossLog("总计签到", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功签到.当前签到次数" + cm.getBossLog("总计签到", 1));
                    cm.sendOk(mdsss + "#k \r\n#d签到成功#k\r\n获得签到礼物：\r\n#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " ");
                } else {
                    cm.sendOk(mdsss + "#k #k\r\n\r\n对不起，一天只能签到一次。");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk(mds + "#k\r\n\r\n30级以下的不能参加活动。");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk(mds + "#k\r\n\r\n福利失败，您的其他栏道具空间不足。");

            } else if (pjb > (2147483640 - mrjb)) {
              cm.sendOk(mdss + "#b\r\n\r\n领取失败，您的背包无法装下#e#r" + zxjb + "#n#b  金币，，请将部分金币存入 MapleWingBank 后再来领取吧！");
            } else {
                if (cm.getBossLog("每日福利") == 0) {
                    cm.gainItem(mrfl1, gmrfl1);//神奇魔方x3
		    cm.gainItem(mrfl2, gmrfl2);//管理员的祝福x3
                    cm.gainItemPeriod(mrfl3,gmrfl3,1);//高质地喇叭x10 
                    cm.gainItemPeriod(mrfl4,gmrfl4,1);//雇佣商人x1
                    cm.gainItemPeriod(mrfl5,gmrfl5,1);//转蛋卷x10
                    cm.gainNX(2, mrdj);//抵用卷 1000
                    cm.gainMeso(mrjb);//500W金币
                    cm.setBossLog("每日福利");
                    cm.setBossLog("总计福利", 1);
		    cm.worldMessage(cm.getChar().getName() + "玩家成功领取福利.领取福利总次数" + cm.getBossLog("总计福利", 1));
                    cm.sendOk(mds + "\r\n#d每日福利领取成功，获得福利礼物：\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  \r\n  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + "  \r\n #i" + mrfl3 + ":# #kx#r " + gmrfl3 + "  \r\n #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  \r\n #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  \r\n #r#e" + mrdj + " #n#d抵用卷#r#e " + mrjb + "#n#d金币 ");
                } else {
                    cm.sendOk(mds + " #k\r\n\r\n对不起，一天只能福利一次。");
                }
            }
            cm.dispose();

        }



      } else if (dsd == 2) {

        if (selection == 1) {

            if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk(mdss + "#k\r\n\r\n100级以下的玩家不能领取。");
            } else if (cm.getSpace(5) < 3) {
                cm.sendOk(mdss + "#b\r\n\r\n领取失败，您的特殊栏道具空间不足3个空位。");

            } else if (pjb > (2147483640 - zxjb)) {

              cm.sendOk(mdss + "#b\r\n\r\n领取失败，您的背包无法装下#e#r" + zxjb + "#n#b  金币，，请将部分金币存入 MapleWingBank 后再来领取吧！");
            } else {

                if (cm.getMaplewing("mapley") >= 1) {


                    cm.gainItem(zxfl1, gzxfl1);//神奇魔方x1
                    cm.gainItemPeriod(zxfl2, gzxfl2, 1);//高质地喇叭x2

                    cm.gainItemPeriod(zxfl3, gzxfl3, 1);//转蛋卷x2

                    cm.gainNX(2, zxdj);//抵用卷 200
                    cm.gainMeso(zxjb);//100W金币

                    cm.addMaplewing("mapley", -1);
                    cm.setBossLog("在线福利", 1);

		    cm.worldMessage(-11, cm.getChar().getName() + "  玩家成功领取在线福利.当前领取次数" + cm.getBossLog("在线福利", 1));

                    cm.playerMessage(-1, "恭喜您成功领取到在线福利！所得物品已经放入了您的背包！");

                    cm.sendOk(mdss + "\r\n#d领取成功，获得以下物品：\r\n  #i" + zxfl1 + ":# x " + gzxfl1 + " \r\n  #i" + zxfl2 + ":# x " + gzxfl2 + " \r\n  #i" + zxfl3 + ":# x " + gzxfl3 + " \r\n #r#e" + zxdj + " #n 抵用卷 #r#e" + zxjb + " #n 金币 ");


                } else {
                    cm.sendOk(mdss + "#k\r\n\r\n对不起，您的活跃点不足1，无法领取在线福利！\r\n您目前的拥有：#e#r" + cm.getMaplewing("mapley") + " 点活跃点");

          }


        }

            cm.dispose();




      } else if (selection == 2) {


if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk(mdss + "#k\r\n\r\n100级以下的玩家不能领取。");
            } else if (cm.getSpace(5) < nbs) {
                cm.sendOk(mdss + "#b\r\n\r\n领取失败，您的特殊栏道具空间不足 #e#r" + nbs +"#n#b 个空位。");
            } else if (pjb > (2147483640 - zxjb*ads)) {

              cm.sendOk(mdss + "#b\r\n\r\n领取失败，您的背包无法装下#e#r" + zxjb + "#n#b  金币，，请将部分金币存入 MapleWingBank 后再来领取吧！\r\n如果您的金币量太大，请分多次领取在线福利。");
            } else {

                if (cm.getMaplewing("mapley") >= ads) {


                    cm.gainItem(zxfl1, gzxfl1*ads);//神奇魔方x1
                    cm.gainItemPeriod(zxfl2,gzxfl2*ads, 1);//高质地喇叭x2

                    cm.gainItemPeriod(zxfl3, gzxfl3*ads, 1);//转蛋卷x2
                    cm.gainNX(2, zxdj*ads);//抵用卷 200


                   // if ()
                    cm.gainMeso(zxjb*ads);//100W金币

                    cm.addMaplewing("mapley", -1*ads);
                    cm.setBossLog("在线福利", ads);

		    cm.worldMessage(cm.getChar().getName() + "   玩家成功领取  " + ads + "  次 在线福利.当前领取次数" + cm.getBossLog("在线福利", 1));

                    cm.sendOk(mdss + "\r\n#d领取成功，获得以下物品：\r\n  #i" + zxfl1 + ":# x " + gzxfl1*ads + " \r\n  #i" + zxfl2 + ":# x " + gzxfl2*ads + " \r\n  #i" + zxfl3 + ":# x " + gzxfl3*ads + " \r\n #r#e" + zxdj*ads + " #n 抵用卷 #r#e" + zxjb*ads + " #n 金币 ");


                } else {
                    cm.sendOk(mdss + "#k\r\n\r\n对不起，您的活跃点不足 " + ads + " ，无法一次性领取 " + ads + " 次在线福利！\r\n您目前的拥有：#e#r" + cm.getMaplewing("mapley") + " 点活跃点");

          }


        }

            cm.dispose();




      }





        cm.dispose();


  }


    }
}