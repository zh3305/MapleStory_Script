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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n#L0#狮心长枪#v1432086#\r\n#L1#狮心长矛#v1442116#\r\n#L2#狮心震雷#v1322096#\r\n#L3#狮心巨锤#v1422066#\r\n#L4#狮心战刀#v1402095#\r\n#L5#狮心战斧#v1412065#\r\n#L6#狮心弯刀#v1302152#\r\n#L7#狮心勇斧#v1312065#\r\n#L8#龙尾短杖#v1372084#\r\n#L9#龙尾长杖#v1382104#\r\n#L10#鹰翼重弓#v1452111#\r\n#L11#鹰翼重弩#v1462099#\r\n#L12#渡鸦之魂#v1332130#\r\n#L13#渡鸦之魂#v1472122#\r\n#L14#精灵角刀#v1342036#\r\n#L15#鲨齿手铳#v1492085#\r\n#L16#鲨齿鹰爪#v1482084#\r\n#L17#鲨齿火炮#v1532018#\r\n#L18#龙翼弩枪#v1522018#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1432086,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心长枪");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1442116,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心长矛");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1322096,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心震雷钉");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1422066,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心巨锤");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1402095,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战刀");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1412065,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心战斧");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1302152,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心弯刀");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1312065,1);
                cm.sendOk("#r兑换成功:#b\r\n1.狮心勇斧");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1372084,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾短杖");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1382104,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙尾长杖");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1452111,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼重弓");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1462099,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鹰翼重弩");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1332130,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1472122,1);
                cm.sendOk("#r兑换成功:#b\r\n1.渡鸦之魂");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1342036,1);
                cm.sendOk("#r兑换成功:#b\r\n1.精灵角刀");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1492085,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿手铳");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1482084,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿鹰爪");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1532018,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鲨齿火炮");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1522018,1);
                cm.sendOk("#r兑换成功:#b\r\n1.龙翼弩枪");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.7周纪念年币x400! 冒险币*500W\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        }
    }
}