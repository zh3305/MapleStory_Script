var status = 0;

var sms = "#r首先我代表 #e#rMapleWing #n 感谢您的支持！\r\n千言万语说不尽这份感激！\r\n#b以下是 #rMapleWing#b NPC主要功能：\r\n#g①快捷传送：#d这里包含世界所有主城快捷免费传送，您也可以点击拍卖那里进入！当然也可以您也可以打开大地图双击您需要去的地方.....\r\n#g②万能商店：#d里面包含了所有职业的商店，里面有许多你想不到的东西哦，有空可以去看看！\r\n#g③转职向导：#dMapleWing的特色之一哦，除了新英雄之类的职业自动转职之外，在这里你可以体验到不一样的转职服务哦！\r\n#g④枫翼重修：#d如果您厌倦了满级的生活，可以选择这个服务，它会指引你找到<时间女神>伦娜，帮助你进行重修，获得更加强大的力量！\r\n#g⑤VIP专区：#d暂时还未开放，需要修复一些问题，和加入一些新的功能！\r\n#g⑥金融专区：#d没钱了？不要紧，里面的债券和股票都可以让你一夜暴富！(股票除了一些BUG 还在抢修中，敬请期待。)\r\n#g⑦副本专区：#d暂时只开放了粉扎，等以后会开放更多，不过这需要后续的努力。。\r\n#g⑧活动专区：#d（人数还不是很多呐，要是有15个人，我一定放出来！）\r\n#g⑨贡献专区：#d这里是贡献点的天堂哦！记得多去看看！不过也不要一下子花完了，不然都最后，伤害上限就很低了哦！\r\n#g⑩福利专区：#d里面有各种福利，活跃点可以兑换到神奇的魔方哦！\r\n#g11.娱乐专区：#d暂时不开放。\r\n#g12.枫翼专区：#d暂时未开发。\r\n#g13.英雄觉醒：#d暂时开放幻影的觉醒。\r\n#g14.委托任务：#d（等人多了，再开放。。）\r\n#g15.周年活动：#d同上。\r\n#g16.正义挑战：#d同上。\r\n#g17.美容美发：#d绝对的美容美发中心，不信就去看看。\r\n#g18.点卷中介：#d没点卷了可以进去看看。\r\n#g19.仓库管理：#d支持野外快速打开仓库的哦。。\r\n#g20.BOSS 传送：#d先有BOSS副本都可以在这里传送过去哦！\r\n#g21.BOSS 查询：#d时不开放。\r\n#g22.等级送礼：#d（人多了再开放。。）\r\n#g23.结婚系统：#d同上。。";

var shop1 = 1012123;
var mds;

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 

    else if (status == 0) {

  //  if (cm.getPlayer().getLevel() < 0 && cm.getPlayer().getJob() != 200) {
//	cm.warp(50000);
    //    cm.sendOk("等级达到 8 级才能使用此功能.请你在这里升到 8 级吧.\r\n8 级前因为职业问题可能经验不//是100倍.\r\n8 级后经验将会恢复当前倍数.8 级后可以在我这里领取新人奖励哦!\r\n最后祝你游戏愉快!");
    //    cm.dispose();
     //   return;
 //   }
      //  if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419, 1)) {
                cm.gainItem(1002419, 1); //枫叶帽
            }
          //  if (cm.canHold(1142184, 1)) {
           //     cm.gainItem(1142184, 1); //荣誉冒险家
           //     cm.gainMeso(5555555); //yo shit who the hell added this
	//	cm.gainItem(1302063,1);
             //   cm.forceCompleteQuest(29003);
          //      cm.getPlayer().modifyCSPoints(2, 55555);
             //   cm.sendOk("#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n\r\n#d" + cm.getVipname() + " 欢迎您来到MapleWing，作为新玩家，系统特送你几样礼物！希望您在游戏中玩的愉快！");
         //   } else {
        //        cm.sendOk("请将背包留一定的空间.");
       //     }
          //  cm.dispose();
        //    return;
      //  }

           mds = "#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + "\r\n";

           var selStr = "#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + "  #k#n您好! 感谢您对 MapleWing 支持!#n#k\r\n您对  #rMapleWing#k  的#d 贡献值#k 为： #e#r" + cm.getMaplewing("maple")  + "#k#n点 \r\n请选择您需要的服务：#r\r\n#L100#快捷传送#l  #L101#万能商店#l  #L102#转职向导#l  #L103#枫翼重修#l\r\n#r#L104#VIP 专区#l  #L105#金融专区#l  #L106#副本专区#l  #L107#活动专区#l\r\n#d#L108#贡献专区#l  #L109#福利专区#l  #L110#娱乐专区#l  #L111#枫翼专区#l\r\n#d#L112#英雄觉醒#l  #L113#委托任务#l  #L114#精彩活动#l  #L115#终极挑战#l\r\n#b#L116#美容美发#l  #L117#点卷中介#l  #L118#仓库管理#l  #L119#百宝抽奖#l\r\n#L120#BOSS传送#l  #L121#BOSS查询#l  #L122#等级送礼#l  #L123#结婚系统#l  \r\n#b#L124#            了解所有服务内容和要求      #l \r\n";

//备份
//\r\n\r\n#k以下是专区服务快捷入口：\r\n#r#L104#┈┈┈━═☆       VIP 专区       ☆═━┈┈┈#l \r\n#d#L201#VIP 特权#l  #L202#VIP 商店#l  #L203#VIP 福利#l  #L204#VIP 活动#l \r\n#r#L105#┈┈┈━═☆       金融专区       ☆═━┈┈┈#l \r\n#d#L301#金融中心#l  #L302#金融管理#l  #L303#金融投资#l  #L304#慈善事业#l  \r\n#r#L106#┈┈┈━═☆       副本专区       ☆═━┈┈┈#l \r\n#d#L401#组队副本#l  #L402#活动副本#l  #L403#终极副本#l  #L404#趣味副本#l    \r\n#r#L107#┈┈┈━═☆       活动专区       ☆═━┈┈┈#l \r\n#d#L501#日常活动#l  #L502#特殊活动#l  #L503#正义活动#l  #L504#传说活动#l  \r\n#r#L108#┈┈┈━═☆       贡献专区       ☆═━┈┈┈#l \r\n#d#L601#贡献中心#l  #L602#枫翼委托#l  #L603#贡献商店#l  #L604#慈善捐赠#l   \r\n#r#L109#┈┈┈━═☆       福利专区       ☆═━┈┈┈#l \r\n#d#L109#在线福利#l  #L109#每日福利#l  #L703#福利商店#l  #L704#福利彩票#l    \r\n#r#L110#┈┈┈━═☆       娱乐专区       ☆═━┈┈┈#l \r\n#d#L801#娱乐中心#l  #L802#抽奖中心#l  #L803#特卖商店#l  #L804#世界祝福#l    \r\n#r#L111#┈┈┈━═☆       枫翼专区       ☆═━┈┈┈#l \r\n#L901#永恒枫翼#l 
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            break;
        case 7:
            cm.dispose();
	    cm.openShop(9900007);
            break;
        case 8:
	   //cm.warp(910530202,0);
            //cm.sendOk("已经将你传送到活动地图.请向上跳寻找到管管!有丰富的奖励哦!\r\n#r祝你游戏愉快!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	  //  cm.openWeb("http://www.5ifly.com");
            cm.sendOk("已经为你打开新职业技能书的暴率清单.\r\n#r祝你游戏愉快!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;

        case 11:
            cm.dispose();
	    cm.openNpc(9900002,20);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9900004,70);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9900002,21);
            break;
        case 14:
            cm.dispose();
            cm.openNpc(9900004,90);
            break;
        case 15:
            cm.dispose();
	    cm.warp(749050400);
            break;
        case 16:
            cm.dispose();
	    cm.openNpc(9900002,2);
            break;
        case 17:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 18:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 19:
            cm.dispose();
	    cm.openNpc(9270035,1);
            break;
        case 20:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 22:
            cm.dispose();
	    cm.openNpc(9900004,998);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 24:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("你已经在结婚地图了.");
}else{
            cm.warp(700000000);
	    cm.sendOk("已经将你传送到结婚地图。\r\n结婚和盛大一样.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
}
            break;
        case 25:
            cm.dispose();
	    cm.openNpc(9900004, 999);
            break;
        case 26:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 27:
            cm.dispose();
	    cm.openNpc(9900004,80);
            break;
        case 28:
            cm.dispose();
	    cm.openNpc(9900004,4);
            break;
        case 29:
            cm.dispose();
            cm.openShop(shop1);
            break;
        case 30:
            cm.dispose();
	    cm.openNpc(9120033);
            break;
	case 31:
            cm.dispose();
	    cm.openNpc(9900002,24);
            break;
        case 32:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;
        case 33:
            cm.dispose();
	    cm.openNpc(9900002,25);
            break;
        case 34:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;



        case 100:
            cm.dispose();
	    cm.openNpc(9000086, 1000);
            break;
        case 101:
            cm.dispose();
	    cm.openNpc(9000086, 1001);
            break;
        case 102:
            cm.dispose();
	    cm.openNpc(9000086, 1002);
            break;
        case 103:
            cm.dispose();
	    cm.openNpc(9000086, 1003);
            break;
        case 104:
            cm.dispose();

              cm.sendOk("敬请期待！");
	  //  cm.openNpc(9000086, 1004);
            break;
	case 105:
            cm.dispose();
	    cm.openNpc(9000086, 1005);
            break;
        case 106:
            cm.dispose();
	    cm.openNpc(9000086, 1006);
            break;
        case 107:
            cm.dispose();
            cm.sendOk("敬请期待！");
	  //  cm.openNpc(9000086, 1007);
            break;
        case 108:
            cm.dispose();
	    cm.openNpc(9000086, 1008);
            break;
        case 109:
            cm.dispose();
	    cm.openNpc(9000086, 1009);
            break;
        case 110:
            cm.dispose();
          //  cm.sendOk("敬请期待！")
	    cm.openNpc(9000086, 1010);
            break;
        case 111:
            cm.dispose();
            cm.sendOk("敬请期待！")
	 //   cm.openNpc(9000086, 1011);
            break;
        case 112:
            cm.dispose();
	    cm.openNpc(9000086, 1012);
            break;
        case 113:
            cm.dispose();
           // cm.sendOk("敬请期待！")
	    cm.openNpc(9000086, 1013);
            break;
        case 114:
            cm.dispose();
         //   cm.sendOk("敬请期待！")
	    cm.openNpc(9000086, 1014);
            break;
	case 115:
            cm.dispose();
            cm.warp(270050300);
            cm.sendOk(mds + "\r\n我已经将您传送到了 #e#r终极挑战#n 入场地！")
	 //   cm.openNpc(9000086, 1015);
            break;
        case 116:
            cm.dispose();
	    cm.openNpc(9000086, 1016);
            break;
        case 117:
            cm.dispose();
	    cm.openNpc(9000086, 1017);
            break;
        case 118:
            cm.dispose();
	    cm.sendStorage();
            break;
        case 119:
            cm.dispose();
	    cm.openNpc(9000086, 1019);
            break;
        case 120:
            cm.dispose();
	    cm.openNpc(9000086, 1020);
            break;
        case 121:
            cm.dispose();
	    cm.openNpc(9000086, 1021);
            break;
        case 122:
            cm.dispose();
            cm.sendOk("敬请期待！")
	   // cm.openNpc(9000086, 1022);
            break;
        case 123:
            cm.dispose();
            cm.sendOk("敬请期待！")
	  //  cm.openNpc(9000086, 1023);
            break;
        case 124:
            cm.dispose();
            cm.sendOk("#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r" + sms)
	   // cm.openNpc(9000086, 1024);
            break;

        case 701:
            cm.dispose();
	    cm.openNpc(9000086, 1009100);
            break;



		}
    }
}