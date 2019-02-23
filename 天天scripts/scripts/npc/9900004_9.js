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
            var selStr = "#r租借装备：#b\r\n#L1#扎昆头盔#v1002357#\r\n#L2#进阶扎昆头盔#v1003112#\r\n#L3#恐怖鬼娃的伤口#v1012170#\r\n#L4#斯塔切的黄金铲#v1502003#\r\n#L5#诺布的黄金十字镐#v1512003#\r\n#L11#黑天使的祝福戒指#v1112586#\r\n#L6#希望之树之传说戒指#v1112688#\r\n#L7#希望之树之传说耳环#v1032129#\r\n#L8#希望之树之传说项链#v1122185#\r\n#L9#希望之树之传说腰带#v1132135#\r\n#L10#希望之树之传说肩部#v1152077#";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 1:
            if (cm.getMeso() >= 2500000){
                cm.gainMeso( - 2500000);
		cm.gainItem(1002357,1,1);
                cm.sendOk("获得#b扎昆头盔#v1002357#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(250W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 6000000){
                cm.gainMeso( - 6000000);
		cm.gainItem(1003112,1,1);
                cm.sendOk("获得#b进阶扎昆头盔#v1003112#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(600W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1012170,1,2);
                cm.sendOk("获得#b恐怖鬼娃的伤口#v1012170#x2天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1502003,1,1);
                cm.sendOk("获得#b斯塔切的黄金铲#v1502003#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1000W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1512003,1,1);
                cm.sendOk("获得#b诺布的黄金十字镐#v1512003#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1000W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1112688,1,3);
                cm.sendOk("获得#b希望之树之传说戒指#v1112688#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1032129,1,3);
                cm.sendOk("获得#b希望之树之传说耳环#v1032129#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1122185,1,3);
                cm.sendOk("获得#b希望之树之传说项链#v1122185#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 9:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1132135,1,3);
                cm.sendOk("获得#b希望之树之传说腰带#v1132135#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 10:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1152077,1,3);
                cm.sendOk("获得#b希望之树之传说肩部#v1152077#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 11:
            if (cm.getMeso() >= 8000000){
                cm.gainMeso( - 8000000);
		cm.gainItem(1112586,1,1);
                cm.sendOk("获得#b黑天使的祝福戒指#v1112586#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(800W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}