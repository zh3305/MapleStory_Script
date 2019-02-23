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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n狮心战斗：#L0##v1003172##L1##v1102275##L2##v1082295##L3##v1052314##L4##v1072485##l\r\n龙尾法师：#L5##v1003173##L6##v1102276##L7##v1082296##L8##v1052315##L9##v1072486##l\r\n鹰翼哨兵：#L10##v1003174##L11##v1102277##L12##v1082297##L13##v1052316##L14##v1072487##l\r\n渡鸦之魂：#L15##v1003175##L16##v1102278##L17##v1082298##L18##v1052317##L19##v1072488##l\r\n鲨齿船长：#L20##v1003176##L21##v1102279##L22##v1082299##L23##v1052318##L24##v1072489#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003172,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斗头盔");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102275,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斗披风");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082295,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斗护腕");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052314,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斗锁子甲");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072485,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斗鞋");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003173,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾法师帽子");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102276,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾法师披风");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082296,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾法师手套");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052315,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾法师长袍");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072486,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾法师鞋");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003174,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼哨兵便帽");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102277,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼哨兵披风");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082297,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼哨兵手套");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052316,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼哨兵服");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072487,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼哨兵鞋");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003175,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂追踪者帽");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102278,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂猎人披风");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082298,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂追踪者手套");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052317,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂追踪者盔甲");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072488,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂追踪者鞋");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003176,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿船长帽");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102279,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿船长披风");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082299,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿船长手套");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052318,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿船长外套");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072489,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿船长鞋");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        }
    }
}