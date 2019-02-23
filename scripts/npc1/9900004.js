/*NPC制作：Nemo*/
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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n\r\n#b点卷:#r "+cm.getPlayer().getCSPoints(1)+"#k               #b在线时间点数:#r "+cm.getPlayer().getXw()+"                #b充值余额:#r " + cm.getHyPay(1) + " #k#b元             已消费金额:#r " + cm.getHyPay(2) + " #k#b元\r\n累计充值总金额:#r " + cm.getHyPay(3) + "#b元\r\n\r\n#b#L1#回自由市场#l #L2#游戏介绍#l #L3#万能NPC#l #L4#新手练级#l\r\n\r\n#L5#雇佣商店#l   #L6#点卷充值#l #L7#本服官网#l\r\n#L8#满技能#l\r\n\r\n    #r本服唯一客服QQ：XXXXXXXXX，其他客服均为骗子！";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 2:
            cm.sendOk("待添加");
            cm.dispose();
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9900002);
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
	    cm.openNpc(9900002,7);
            break;
        case 7:
            cm.sendOk("待添加");
            cm.dispose();
            break;
        case 8:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;
         }
    }
}