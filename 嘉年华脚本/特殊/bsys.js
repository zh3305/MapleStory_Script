var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
        } else if (status == 0) {
        var selStr = "";
       	selStr += "#L10#" + eff + "#r特殊 BOOS变身药水#l\r\n\r\n";
       	selStr += "#L0#" + eff + "#r迷你 BOOS变身药水#l\r\n\r\n";
        selStr += "#L1#" + eff + "BOOS变身药水#l\r\n\r\n";	
		selStr += "#L2#" + eff + "职业变身药水#l\r\n\r\n";	
		selStr += "#L3#" + eff + "其他变身药水#l\r\n\r\n";
		//selStr += "#L4#" + eff + "  结婚地图#l\n\n\n";
		//selStr += "#L5#" + eff + "  道具删除#l\r\n\r\n";
		//selStr += "#L6#" + eff + "  装备分解#k#l\n\n\n";
		//selStr += "#L7#" + eff + "#r  竞技积分#k#l\n\n\n";
		//selStr += "#L8#" + eff + "#r  抵用商城#k#l\n\n\n\r\n";
		//selStr += "#L9#" + eff + "#r  数字猜猜猜#k#l\n\n\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 10:
			cm.dispose();
			cm.openNpc(9900004,"bsys1");
            break;
        case 0:
			cm.dispose();
			cm.openNpc(9900004,"bsys2");
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9900004,"bsys3");
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9900004,"bsys4");
            break;
        case 3:
			cm.dispose();
			cm.openNpc(9900004,"bsys5");
            break;
        case 4://管理雇佣商店
			cm.dispose();
			if (cm.getMapId() == 680000000) {
				cm.sendOk("你已经在结婚地图了.");
			} else {
				cm.warp(680000000);
				cm
						.sendOk("已经将你传送到结婚地图。\r\n请查看左上角NPC结婚流程.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
				break;
			}
            break;
        case 5://累积充值
            cm.dispose();
	    cm.openNpc(9900002,55);
            break;
        case 6://免费10级
		     cm.dispose();
	    cm.openNpc(9900003,503);
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
            break;	
      case 7://竞技积分
            cm.dispose();
	    cm.openNpc(9900003,501);
            break;
	  case 8://抵用商场
            cm.dispose();
	    cm.openNpc(9900003,16);
            break;
	  case 9://抵用商场
            cm.dispose();
	    cm.openNpc(9900003,"szccc");
            break;
	}
    }
}