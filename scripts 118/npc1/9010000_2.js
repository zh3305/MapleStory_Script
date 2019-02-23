var status = 0;

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
        var selStr = "亲爱的#r#h ##k您好。在冒险岛旅行的这段日子快乐吗？，\r\n\r\n#b#L0# 使用物品重置BOSS挑战次数(扎昆/黑龙/).#l\r\n#L1# 跑商系统.#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if( cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && (cm.getBossLog("普通扎昆") > 1 || cm.getBossLog("普通黑龙") > 1 || cm.getBossLog("品克缤") > 1)){
                    cm.resetBossLog("普通扎昆");
                    cm.resetBossLog("普通黑龙");
                    cm.resetBossLog("品克缤");
		    cm.gainItem(4000235,-1);
		    cm.gainItem(4000243,-1);
	    cm.sendOk("重置成功.祝你游戏愉快!");
	    cm.dispose();
} else {
	    cm.sendOk("你没有带来格瑞芬多角-天鹰的角与喷火龙的尾巴\r\n或你的挑战次数还没有使用完哦");
	    cm.dispose();
}
            break;
        case 1:
            cm.sendOk("暂不开放");
            break;
        case 2:
            cm.dispose();
            cm.warp(100000104);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012121);
            break;
        case 4:
            cm.dispose();
	    cm.warp(749050400);
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9900002,2);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 8:
            cm.dispose();
	    cm.openNpc(9270035);
            break;
        case 9:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 11:
            cm.dispose();
	    cm.openNpc(9900002,12);
            break;
        case 12:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 13:
            cm.dispose();
	    cm.openNpc(9900002,1);
            break;
        case 14:
            cm.dispose();
            cm.sendNext(cm.getRankingInformation(-1));
            break;
        case 15:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("你已经在结婚地图了.");
}else{
            cm.warp(700000000);
	    cm.sendOk("已经将你传送到结婚地图。\r\n结婚和盛大一样.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
            break;
}
        }
    }
}