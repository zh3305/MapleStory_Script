var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt5 = "#fUI/UIWindow/Quest/icon5/1#";

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
        var selStr = "#e#d欢迎使用土豪点卷商城，使用后将会扣除相对应的点卷.购买后概不退款，请慎重请选择#n#k:\r\n";
            selStr += "#d您当前拥有点卷：  #r" + cm.getPlayer().getCSPoints(1) + "#k #d点#k#l\r\n\r\n";
	    selStr += "#r#L5#"+ttt6+" 抵用卷装备道具商店[屌丝专用]#l\r\n\r\n";
	    selStr += "- #e#d土豪专属#n#k\r\n";
            selStr += "#r#L0#"+ttt6+" 点卷购买装备[各种给力高级装备]#l\r\n";
            selStr += "#L1#"+ttt6+" 点卷购买道具[各种稀有消耗道具]#l\r\n";
            selStr += "#L2#"+ttt6+" 点卷购买椅子[各种非卖好看椅子]#l\r\n";
	    selStr += "#L3#"+ttt6+" 点卷购买礼包[各种实惠划算礼包]#l\r\n";
            //selStr += "#L4#"+ttt6+" 打开充值网站进行充值[10RMB:5000点卷]#l\r\n";
            selStr += " ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9310144, 12);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 13);
            break;
        case 2:
	    cm.sendOk("期待添加。");
            cm.dispose();
            //cm.openNpc(9310144, 15);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9310144, 14);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900003, 16);
            break;
        case 4:
            cm.dispose();
            cm.openWeb("http://www.huiyimxd.com");
	    cm.sendOk("已经为您打开赞助网站！");
            break;
		}
    }
}