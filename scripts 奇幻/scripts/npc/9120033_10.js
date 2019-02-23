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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n周年庆必成卷+7：#L0##v2046010##L1##v2046011##L2##v2046110##L3##v2046111##l";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046010,1);
                cm.sendOk("#r兑换成功:#b\r\n1.周年庆单手攻击必成卷+7");
        	cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币与金钱!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046011,1);
                cm.sendOk("#r兑换成功:#b\r\n1.周年庆单手魔力必成卷+7");
        	cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币与金钱!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046110,1);
                cm.sendOk("#r兑换成功:#b\r\n1.周年庆双手攻击必成卷+7");
        	cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币与金钱!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046111,1);
                cm.sendOk("#r兑换成功:#b\r\n1.周年庆双手魔力必成卷+7");
        	cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币与金钱!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}