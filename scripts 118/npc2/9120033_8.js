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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n#L0#蓝调戒指#v1112915#\r\n#L1#烈日腰带#v1132104#\r\n#L5#圣诞鹿变身帽#v1003209#\r\n#L2#莱克斯绿色耳环#v1032102#\r\n#L3#莱克斯红色耳环#v1032103#\r\n#L4#莱克斯蓝色耳环#v1032104#\r\n#L14#白天使祝福戒指#v1112663#\r\n#L6#恐怖鬼娃的伤口#v1012170#\r\n#L7#恐怖鬼娃的伤口#v1012174#\r\n#L8#十字旅团勇士护肩#v1152059#\r\n#L9#觉醒的冒险之心(战士+30G)#v1122143#\r\n#L10#觉醒的冒险之心(法师+30G)#v1122144#\r\n#L11#觉醒的冒险之心(弓手+30G)#v1122145#\r\n#L12#觉醒的冒险之心(飞侠+30G)#v1122146#\r\n#L13#觉醒的冒险之心(海盗+30G)#v1122147#\r\n#L15#真-觉醒的冒险之心(战士+50G)#v1122143#\r\n#L16#真-觉醒的冒险之心(法师+50G)#v1122144#\r\n#L17#真-觉醒的冒险之心(弓手+50G)#v1122145#\r\n#L18#真-觉醒的冒险之心(飞侠+50G)#v1122146#\r\n#L19#真-觉醒的冒险之心(海盗+50G)#v1122147#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(1112915,1);
                cm.sendOk("#r兑换成功:#b\r\n1.蓝调戒指");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x800! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1132104,1);
                cm.sendOk("#r兑换成功:#b\r\n1.烈日腰带");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x250! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 3000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032102,1);
                cm.sendOk("#r兑换成功:#b\r\n1.莱克斯绿色耳环");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x250!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032103,1);
                cm.sendOk("#r兑换成功:#b\r\n1.莱克斯红色耳环");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x250! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032104,1);
                cm.sendOk("#r兑换成功:#b\r\n1.莱克斯蓝色耳环");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x250! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=1600 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-1600);
		cm.gainItem(1003209,1);
                cm.sendOk("#r兑换成功:#b\r\n1.圣诞鹿变身帽");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x1600! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(1012170,1);
                cm.sendOk("#r兑换成功:#b\r\n1.恐怖鬼娃的伤口");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x800! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1012174,1);
                cm.sendOk("#r兑换成功:#b\r\n1.恐怖鬼娃的伤口");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1152059,1);
                cm.sendOk("#r兑换成功:#b\r\n1.十字旅团勇士护肩");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x250! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122143,1);
                cm.sendOk("#r兑换成功:#b\r\n1.觉醒的冒险之心(战士)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x2400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122144,1);
                cm.sendOk("#r兑换成功:#b\r\n1.觉醒的冒险之心(法师)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x2400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122145,1);
                cm.sendOk("#r兑换成功:#b\r\n1.觉醒的冒险之心(弓手)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x2400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122146,1);
                cm.sendOk("#r兑换成功:#b\r\n1.觉醒的冒险之心(飞侠)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x2400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122147,1);
                cm.sendOk("#r兑换成功:#b\r\n1.觉醒的冒险之心(海盗)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x2400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1112663,1);
                cm.sendOk("#r兑换成功:#b\r\n1.白天使祝福戒指");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122122,1);
                cm.sendOk("#r兑换成功:#b\r\n1.真-觉醒的冒险之心(战士)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122123,1);
                cm.sendOk("#r兑换成功:#b\r\n1.真-觉醒的冒险之心(法师)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122124,1);
                cm.sendOk("#r兑换成功:#b\r\n1.真-觉醒的冒险之心(弓箭手)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122125,1);
                cm.sendOk("#r兑换成功:#b\r\n1.真-觉醒的冒险之心(飞侠)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122126,1);
                cm.sendOk("#r兑换成功:#b\r\n1.真-觉醒的冒险之心(海盗)");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x3200! 冒险币*1000W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        }
    }
}