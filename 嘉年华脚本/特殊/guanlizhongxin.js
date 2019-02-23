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
       	selStr += "#L0#" + eff + "#b【雇佣店铺管理】#l\r\n\r\n";
        selStr += "#L1#" + eff + "【仓库服务管理】#l\r\n\r\n";	
		selStr += "#L2#" + eff + "【物品删除】#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openNpc(9030000);	
            break;
        case 1:
			cm.dispose();
			cm.openNpc(9030100);	
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9900003,"Delete");	
            break;
	}
    }
}