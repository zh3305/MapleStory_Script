var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.haveItem(3010508)) {
        var gbtp = "#r贵宾玩家#k";
    } else {
        var gbtp = "普通玩家";
    }
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
        } else if (status == 0) {
		var selStr = "" + eff1 + "在线：#r"+cm.getOnlineTime()+"#k       " + eff1 + "积分：#r"+cm.getPlayerPoints()+"#k	   " + eff1 + "活力：#r"+cm.getPlayerEnergy()+"#k\r\n" + eff1 + "余额：#r"+cm.getHyPay(1)+"#k 	 " + eff1 + "点券：#r" + cm.getPlayer().getCSPoints(1) + "#k	 " + eff1 + "抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "#k#k\r\n";
		selStr += "#L2#" + eff + "#r新手必看#l";
                selStr += "#L8#" + eff + "#r快速转职#l";	
		//selStr += "#L22#" + eff + "#r免费余额#l";
		selStr += "#L23#" + eff + "#r美容美发#l";
		selStr += "#L3#" + eff + "#r充值中心#l\r\n\r\n";
		selStr += "#L4#" + eff + "#d杂货商店#l"; 
		selStr += "#L14#" + eff + "#d服务中心#l";
		//selStr += "#L18#" + eff + "#d购买坐骑#n#l";
		selStr += "#L21#" + eff + "#d在线奖励#l";
		selStr += "#L6#" + eff + "#d每日福利#l\r\n\r\n";
                selStr += " #L7##b回到市场#l";
		selStr += " #L12##rBOSS传送#l";
		selStr += " #L18##b删除道具#l";
		selStr += " #L10##r管理中心#l\r\n";
		selStr += " #L11##b万能传送#l";
		selStr += " #L0##r副本任务#l";
		selStr += " #L13##b爆物查询#l";
		selStr += " #L9#学购技能#l#n\r\n\r\n";
		selStr += " #L15#" + eff + "#b点卷商店#l";
		selStr += " #L16#" + eff + "#r积分道具#l";
		selStr += " #L17#" + eff + "#b百宝抽奖#k#l\r\n\r\n";	
		//selStr += " #L20#" + eff + "#b玩家不要点测试npc#k#l\r\n\r\n";	
		selStr += "		Ps：常用指令#r@npc#k，#r@解卡#k，#r@卡图#k，#r@帮助#k \r\n";
		selStr += "  Ps：新手玩家请先熟悉【#r新手必看#k】【#r每日福利#k】功能\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			//cm.openNpc(9310144, "zuduirenwu");
           cm.warp(910002000, 0);	
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9900001,"tupo");	
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9900005);	
            break;
        case 22:
			cm.dispose();
			cm.openNpc(9900005,"hqye1");	
            break;
        case 3://充值网站
			cm.dispose();
			cm.openNpc(9900004,"chongzhijiangli");	
            break;
        case 4://管理雇佣商店
            cm.dispose();
            // cm.openShop(9070000);
	    //cm.openNpc(9900000);
            cm.openShop(61);
            break;
        case 5://累积充值
            cm.dispose(); 
	    cm.openNpc(9900002, "hanqingdu");
            break;
        case 6://每日福利
		   cm.dispose();
	    //cm.openNpc(9900003,"qiandao0");
           cm.openNpc(9900003, "mrfl");
            break;
         /*   cm.dispose();
            cm.openWeb("http://www.libaopay.com/buy/?wid=37438");
	    cm.sendOk("已经为您打开赞助网站！");*/
	//if(cm.getPlayer().getLevel() <= 10){
		//cm.gainExp( + 50000);
		//cm.worldMessage("恭喜新玩家"+ cm.getChar().getName() +"在拍卖NPC处领取5W经验");
		//cm.sendOk("恭喜您领取成功,10级下都能在我这里领取经验");
		//}else{
		//cm.sendOk("你的等级大于10");
	//}
	//cm.dispose();
            //break;
        case 7://回到市场
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();		
            break;
        case 8://快速转职
			cm.dispose();
		  cm.openNpc(9310362, "changeJob");
			break;			
        case 9://学习技能
			cm.dispose();
			cm.openNpc(9900003, "xuegoujineng");         
			break;
		 case 10://管理雇佣商店
		/*if (cm.getPlayer().getLevel() > 100 ) {
			cm.warp(701000210);
			cm.sendOk("青龙之门为大混战PK.赤龙之门为组队PK战.黄龙之门为家族PK战.祝您好运");
			} else {
				cm.sendOk("对不起.PK太危险了.100级以下的玩家不能进入噢.");
			}
			cm.dispose();*/
		cm.dispose();
		cm.openNpc(9900004,"guanlizhongxin");
	    //cm.openNpc(9030000);	
            break;
		 case 11://快速传送
			cm.dispose();
			cm.openNpc(1032005, "worldwarp");				
            break;
		case 12://副本传送
		cm.dispose();
	   //cm.openNpc(9900003,"fuben108");
             cm.openNpc(2023000, "BOSSwarp");	
            break;
		case 13://快速转职
          /*  cm.dispose();
			cm.openNpc(9900001,3000);
            break;*/
			cm.dispose();
            cm.openNpc(9010000, "wuguaibaolbv"); 
			break;			
		case 14://银行存款
           /* cm.dispose();
			cm.openNpc(9900002,36);
            break;*/
			cm.dispose();
			cm.openNpc(9310476);
			break;			
		case 15://美容美发
            /*cm.dispose();
			cm.openNpc(9900002,36);*/
            cm.dispose();
			//cm.openNpc(9900003,"qitashangdian");
                    cm.openNpc(9010047, "dianjuanshangcheng2"); 
            break;
		case 16://每日福利
            cm.dispose();
			cm.openNpc(9900002,"jifenhuoli");
			//cm.openNpc(9900003,608);
            break;
		case 17:
            cm.dispose();
			//cm.openNpc(9900002,36);
			//cm.openNpc(9900004,"wanneng");
                     cm.warp(749050400);
            break;
		case 18://百货店
			cm.dispose();
			//cm.openNpc(9900000,"fubencz");
			cm.openNpc(9900000,"Delete");
			break;			
        case 19:
            cm.dispose();
            cm.openNpc(9900002);
            break;	
        case 20://RED商店
            cm.dispose();
            cm.openNpc(9900002, "shizi");
            break;	
        case 21://RED商店
            cm.dispose();
            cm.openNpc(9900004, "zaixianshijian5");
            break;	
        case 23://RED商店
            cm.dispose();
           // cm.openNpc(9900004, "ffn");
  cm.warp(100000104,1);
 cm.sendOk("#r#e`(*∩_∩*)′\r\n#b本服最新美容美发全免费，快来打扮自己吧！");
            break;		
			
	}
    }
}