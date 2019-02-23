var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var ttt6 ="#fUI/Basic/BtCoin/mouseOver/1#";
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
        var selStr = "#e#d欢迎使用绑定喜欢冒险岛币商城，使用后将会扣除相对应的绑定喜欢冒险岛币.购买后概不退款，请慎重请选择#n#k:\r\n";
            selStr += "#d您当前拥有绑定喜欢冒险岛币：  #r"+cm.getPlayerPoints()+"#k #d点#k#l\r\n\r\n";
	    selStr += "- #e#d土豪专属#n#k\r\n";
            selStr += "#r#L0#"+ttt6+" 绑定币购买装备[各种给力高级装备]#l\r\n";
            selStr += "#L1#"+ttt6+" 绑定币购买道具[各种稀有消耗道具]#l\r\n";
            selStr += "#L2#"+ttt6+" 绑定币购买椅子[各种非卖好看椅子]#l\r\n";
	    selStr += "#L3#"+ttt6+" 绑定币购买礼包[各种实惠划算礼包]#l\r\n";
            selStr += "#L4#"+ttt6+" 打开充值网站进行充值[1RMB:1000点卷]#l\r\n";
	    selStr += "#L5#"+ttt6+" 我要使用点券购买绑定币[请点击上面充值]#l\r\n";
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
            cm.openNpc(9310072,1);
            break;
        case 4:
            cm.dispose();
            cm.openWeb("http://sae.kmmmhh.com/OnlinePay.html?m=34298&g=1132");
	    cm.sendOk("已经为您打开赞助网站！");
            break;
		}
    }
}
