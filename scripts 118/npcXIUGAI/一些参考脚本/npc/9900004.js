
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
	var v = getVIP(cm);
	var selStr = "尊敬的" + ((v==0)?"":"#rVIP"+v+"#k") + "玩家#r#h ##k您好,请选择您所需要的功能\r\n元宝：#r" + cm.getHyPay(1) + " #k金币：#r" + cm.getMeso() + "\r\n#k点卷：#r" + cm.getPlayer().getCSPoints(1) + " #k抵用卷：#r" + cm.getPlayer().getCSPoints(2) + "\r\n#L11##d自由市场#L21##g杂物商店#L31##k元宝兑换#L41##r每日签到\r\n#L12##d世界传送#L22##g武器商店#L32##k点卷兑换#L42##r会员功能\r\n#L13##d快速转职#L23##g元宝商店#L33##k金币兑换#L43##r家族崛起\r\n#L14##d副本挑战#L24##g点卷商店#L34##k快乐转蛋#L44##r美容美发\r\n#L15##d快速转生#L25##g绝版道具#L35##k豆豆挑战#L45##r终生幸福\r\n#L16##d洗能力值#L26##g玩具椅子#L36##k测试功能#L46##r地图的ID";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	switch (selection){
	case 11:
		if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022)
			cm.sendOk("你不是正在自由市场吗，想去哪儿呢");
		else
			cm.warp(910000000);
		cm.dispose();
		break;
	case 12:
		cm.dispose();
		cm.openNpc(1032101);
		break;
	case 13:
		cm.dispose();
		cm.openNpc(9010019);
		break;
	case 14:
		cm.dispose();
		cm.openNpc(9001100);
		break;
	case 15:
		cm.dispose();
		cm.openNpc(2112003);
		break;
	case 16:
		var apx = 0;
		switch (getFSdj(cm)) {
		case 0:
			apx = 4;
		case 1:
			apx = 5000;
		case 2:
			apx = 10000;
		case 3:
			apx = 15000;
		case 4:
			apx = 20000;
		}
		cm.resetStats(apx,apx,apx,apx);
		cm.sendOk("已经将你的能力值初始化");
		cm.dispose();
		break;

	case 21:
        	cm.dispose();
        	cm.openShop(1012123);
        	break;
	case 22:
        	cm.dispose();
        	cm.openShop(9201059);
        	break;

	case 31:
        	cm.dispose();
        	cm.openNpc(1203001);
        	break;
	case 32:
	case 33:
	case 41:
        	cm.dispose();
		cm.openNpc(9900004,selection);
        	break;
	case 36:
		for (var i = -1;i <= 6;i++){
			//cm.getPlayer().dropMessage(i, "内容" + i);
		}
		cm.dispose();
		break;
	case 46:
		cm.sendOk(cm.getPlayer().getMapId());
		cm.dispose();
		break;
	default:
		cm.sendOk("default");
		cm.dispose();
		break;
	}

    }
}

//获得VIP等级
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}

//飞升等级
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}
