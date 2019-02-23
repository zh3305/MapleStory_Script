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
        var selStr = "你好，请选择你需要兑换的物品。#b\r\n#L0#枪攻击必成卷#v2044303#\r\n#L1#矛攻击必成卷#v2044403#\r\n#L2#弓攻击必成卷#v2044503#\r\n#L3#弩攻击必成卷#v2044603#\r\n#L4#拳套攻击必成卷#v2044703#\r\n#L5#指节攻击必成卷#v2044815#\r\n#L6#短枪攻击必成卷#v2044908#\r\n#L7#短杖魔力必成卷#v2043703#\r\n#L8#短剑攻击必成卷#v2043303#\r\n#L9#长杖魔力必成卷#v2043803#\r\n#L10#手套攻击必成卷#v2040807#\r\n#L11#鞋子跳跃必成卷#v2040710#\r\n#L12#单手剑攻击必成卷#v2043003#\r\n#L13#双手剑攻击必成卷#v2044003#\r\n#L14#单手斧攻击必成卷#v2043103#\r\n#L15#双手斧攻击必成卷#v2044103#\r\n#L16#单手钝器攻击必成卷#v2043203#\r\n#L17#双手钝器攻击必成卷#v2044203#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044303,1);
                cm.sendOk("#r兑换成功:#b\r\n1.枪攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044403,1);
                cm.sendOk("#r兑换成功:#b\r\n1.矛攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044503,1);
                cm.sendOk("#r兑换成功:#b\r\n1.弓攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044603,1);
                cm.sendOk("#r兑换成功:#b\r\n1.弩攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044703,1);
                cm.sendOk("#r兑换成功:#b\r\n1.拳套攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044815,1);
                cm.sendOk("#r兑换成功:#b\r\n1.指节攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044908,1);
                cm.sendOk("#r兑换成功:#b\r\n1.短枪攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043703,1);
                cm.sendOk("#r兑换成功:#b\r\n1.短杖魔力必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043303,1);
                cm.sendOk("#r兑换成功:#b\r\n1.短剑攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043803,1);
                cm.sendOk("#r兑换成功:#b\r\n1.长杖魔力必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2040807,1);
                cm.sendOk("#r兑换成功:#b\r\n1.手套攻击必成卷+3");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2040710,1);
                cm.sendOk("#r兑换成功:#b\r\n1.鞋子跳跃必成卷+3");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043003,1);
                cm.sendOk("#r兑换成功:#b\r\n1.单手剑攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044003,1);
                cm.sendOk("#r兑换成功:#b\r\n1.双手剑攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043103,1);
                cm.sendOk("#r兑换成功:#b\r\n1.单手斧攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044103,1);
                cm.sendOk("#r兑换成功:#b\r\n1.双手斧攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043203,1);
                cm.sendOk("#r兑换成功:#b\r\n1.单手钝器攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044203,1);
                cm.sendOk("#r兑换成功:#b\r\n1.双手钝器攻击必成卷+5");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(800个)与金钱!\r\n注:(消耗栏1个空位以上.)");
		cm.dispose();
            }
            break;
        }
    }
}