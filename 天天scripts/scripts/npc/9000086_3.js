/**
 *Mary
 */
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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n#L14#红花青梅刀#v1342035#\r\n#L0#阿加雷斯血色剑#v1402096#\r\n#L1#阿加雷斯血色槌#v1422067#\r\n#L2#阿加雷斯血色斧#v1412066#\r\n#L3#阿加雷斯血色斧#v1312066#\r\n#L4#阿加雷斯血色锤#v1322097#\r\n#L5#阿加雷斯血色刃#v1302153#\r\n#L6#阿加雷斯血色矛#v1442117#\r\n#L7#阿加雷斯血色枪#v1432087#\r\n#L8#艾里格斯血色杖#v1372085#\r\n#L9#艾里格斯血色鞭#v1382105#\r\n#L10#伊布斯血色之弓#v1452112#\r\n#L11#伊布斯血色之弩#v1462100#\r\n#L12#赫尔巴斯血色杀#v1332131#\r\n#L13#赫尔巴斯血色拳#v1472123#\r\n#L15#维帕尔血色之鹰#v1492086#\r\n#L16#维帕尔血色拳甲#v1482085#\r\n#L17#维帕尔火神之炮#v1532017#\r\n#L18#史诗血腥双弩枪#v1522017#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1402096,1);
                cm.sendOk("兑换#v1402096#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v4310034#");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1422067,1);
                cm.sendOk("兑换#v1422067#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v4310034#");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1412066,1);
                cm.sendOk("兑换#v1412066#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v4310034#");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1312066,1);
                cm.sendOk("兑换#v1412066#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1322097,1);
                cm.sendOk("兑换#v1322097#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1302153,1);
                cm.sendOk("兑换#v1302153#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1442117,1);
                cm.sendOk("兑换#v1442117#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1432087,1);
                cm.sendOk("兑换#v1432087#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1372085,1);
                cm.sendOk("兑换#v1372085#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1382105,1);
                cm.sendOk("兑换#v1382105#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1452112,1);
                cm.sendOk("兑换#v1452112#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1462100,1);
                cm.sendOk("兑换#v1462100#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1332131,1);
                cm.sendOk("兑换#v1332131#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1472123,1);
                cm.sendOk("兑换#v1472123#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1342035,1);
                cm.sendOk("兑换#v1342035#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1492086,1);
                cm.sendOk("兑换#v1492086#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1482085,1);
                cm.sendOk("兑换#v1482085#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1532017,1);
                cm.sendOk("兑换#v1532017#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310034) >=8){
		cm.gainItem(4310034,-8);
		cm.gainItem(1522017,1);
                cm.sendOk("兑换#v1522017#x1成功.请查看背包");
		cm.dispose();
            } else {
                cm.sendOk("你没有8个#v1312066#");
		cm.dispose();
            }
            break;
        }
    }
}