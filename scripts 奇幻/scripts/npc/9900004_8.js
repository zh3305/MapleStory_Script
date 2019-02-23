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
        var selStr = "#r租借商城：#b\r\n#L0#黑板#v5370001#\r\n#L1#精灵商人#v5030001#\r\n#L2#绚丽彩虹#v1702155#\r\n#L3#彩虹条背心#v1042142#\r\n#L4#灰色南瓜裤#v1062054#\r\n#L5#巨星蛋糕吊带#v1041142#\r\n#L6#巨星粉色短裙#v1061148#\r\n#L7#银河战队礼包#v1003506#\r\n#L8#时尚香肠礼包#v1003509#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 3000000){
                cm.gainMeso( - 3000000);
		cm.gainItem(5370001,1,1);
                cm.sendOk("获得#b黑板#v5370001#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(300W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.getMeso() >= 3000000){
                cm.gainMeso( - 3000000);
		cm.gainItem(5030001,1,1);
                cm.sendOk("获得#b精灵商人#v5073000#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(300W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1702155,1,3);
                cm.sendOk("获得#b绚丽彩虹#v1702155#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1042142,1,3);
                cm.sendOk("获得#b彩虹条背心#v1042142#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1062054,1,3);
                cm.sendOk("获得#b灰色南瓜裤#v1062054#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1041142,1,3);
                cm.sendOk("获得#b巨星蛋糕吊带#v1041142#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1061148,1,3);
                cm.sendOk("获得#b巨星粉色短裙#v1061148#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 40000000){
                cm.gainMeso( - 40000000);
		cm.gainItem(1003506,1,3);
		cm.gainItem(1082423,1,3);
		cm.gainItem(1052445,1,3);
		cm.gainItem(1072652,1,3);
                cm.sendOk("获得#b银河战队礼包#v5390006#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(4000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 40000000){
                cm.gainMeso( - 40000000);
		cm.gainItem(1003509,1,3);
		cm.gainItem(1052449,1,3);
		cm.gainItem(1112136,1,3);
		cm.gainItem(1012080,1,3);
                cm.sendOk("获得#b时尚香肠礼包#v5390006#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(4000W)!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}