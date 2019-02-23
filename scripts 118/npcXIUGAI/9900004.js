var status = 0;

var shop1 = 1012123;

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
            if (cm.getMapId() == 910000000) {
var selStr = "#r┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r#h ##d#n  您好!  您是 #r" + cm.getVipname() + " #n #d贡献值： #e#r" + cm.getMaplewing("maple")  +" #n#k\r\n请选择您需要的服务：#r\r\n#L100#快捷传送#l  #L101#万能商店#l  #L102#转职向导#l  #L103#枫翼重修#l\r\n#r#L104#VIP 专区#l  #L105#金融专区#l  #L106#副本专区#l  #L107#活动专区#l\r\n#d#L108#贡献专区#l  #L109#福利专区#l  #L110#娱乐专区#l  #L111#枫翼专区#l\r\n#d#L112#英雄觉醒#l  #L113#委托任务#l  #L114#周年活动#l  #L115#正义挑战#l\r\n#b#L116#美容美发#l  #L117#点卷中介#l  #L118#仓库管理#l  #L119#百宝抽奖#l\r\n#L120#BOSS传送#l  #L121#BOSS查询#l  #L122#等级送礼#l  #L123#结婚系统#l  \r\n#b#L125#            了解所有服务内容和要求      #l \r\n\r\n#k以下是专区服务快捷入口：\r\n#r#L104#┈┈┈━═☆       VIP 专区       ☆═━┈┈┈#l \r\n#d#L201#VIP 特权#l  #L202#VIP 商店#l  #L203#VIP 福利#l  #L204#VIP 活动#l \r\n#r#L105#┈┈┈━═☆       金融专区       ☆═━┈┈┈#l \r\n#d#L301#金融中心#l  #L302#金融管理#l  #L303#金融投资#l  #L304#慈善事业#l  \r\n#r#L106#┈┈┈━═☆       副本专区       ☆═━┈┈┈#l \r\n#d#L401#组队副本#l  #L402#活动副本#l  #L403#终极副本#l  #L404#趣味副本#l    \r\n#r#L107#┈┈┈━═☆       活动专区       ☆═━┈┈┈#l \r\n#d#L501#日常活动#l  #L502#特殊活动#l  #L503#正义活动#l  #L504#传说活动#l  \r\n#r#L108#┈┈┈━═☆       贡献专区       ☆═━┈┈┈#l \r\n#d#L601#贡献中心#l  #L602#枫翼委托#l  #L603#贡献商店#l  #L604#慈善捐赠#l   \r\n#r#L109#┈┈┈━═☆       福利专区       ☆═━┈┈┈#l \r\n#d#L701#福利中心#l  #L702#成长福利#l  #L703#福利商店#l  #L704#福利彩票#l    \r\n#r#L110#┈┈┈━═☆       娱乐专区       ☆═━┈┈┈#l \r\n#d#L801#娱乐中心#l  #L802#抽奖中心#l  #L803#特卖商店#l  #L804#世界祝福#l    \r\n#r#L111#┈┈┈━═☆       枫翼专区       ☆═━┈┈┈#l \r\n#L901#永恒枫翼#l  \r\n\r\n#b#L11#快速转职#l  #L12#万能传送#l  #L13#游戏商店#l  #L14#美容美发#l\r\n#L15#百宝抽奖#l  #L16#点卷商店#l  #L17#BOSS传送#l  #L18#游戏排名#l\r\n#L19#仓库管理#l  #L20#点卷中介#l  #L21#学习技能#l  #L22#银行存款#l\r\n#L23##r等级送礼#l#l  #L24##r结婚系统#l  #L25##b每日签到  #L26##r正义副本\r\n#l#L27##bBOSS查询#l  #L28##r冒险福利  #L29##r万能商店  #L30#天空战舰\r\n#L31#转花生机  #L32#满技能";
        cm.sendSimple(selStr);

       } else if(cm.getChar().getAccountID()==1){
var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n您好，请选择您需要的服务:\r\n\r\n#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l\r\n#L7##rGM专用NPC#l ";
        cm.sendSimple(selStr);


       } else {
        var selStr = "#r" + cm.getVipname() + "#r#h ##k  #n您好，请选择您需要的服务:\r\n\r\n#b#L0#传送到市场#l #L2#查看怪物掉物#l\r\n#L1#快捷NPC服务#l#L5#管理雇佣商店#l";
        cm.sendSimple(selStr);

     } 

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
	    cm.openWeb("http://www.5ifly.com");
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



		}
    }
}