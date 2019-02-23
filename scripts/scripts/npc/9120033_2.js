var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("我的朋友#r#h ##k想兑换什么？#b\r\n#L1#查看说明\r\n#L2##v4310002#兑换爱心宝石\r\n#L3##v4310002#兑换老公老婆戒指\r\n#L4##v4310002#兑换粉色扎昆椅子\r\n#L5##v4310002#兑换彩虹云朵椅子\r\n#L6##v4310002#兑换香橙果冻布丁\r\n#L7##v4310002#兑换黑天使祝福戒指\r\n#L9##v4310002#兑换各种极品套装武器(已经关闭)\r\n#L10##v4310002#兑换各种极品套装装备(已经关闭)\r\n#L11##v4310002#兑换各种极品装备首饰\r\n#L12##v4310002#兑换各种传说必成卷轴\r\n#L13##v4310002#兑换各种周年必成卷轴");
//\r\n#L13##v4310002#兑换各种周年必成卷轴
        } else if (status == 1) {
        switch (selection) {
        case 1:
                cm.dispose();
                    cm.sendOk("#r#v4310002#兑换说明:#b\r\n⒈11周年纪念币x1兑换爱心宝石#v4001465#\r\n⒉11周年纪念币x10兑换老公老婆戒指#v1112446#\r\n⒊11周年纪念币x50兑换香橙果冻布丁#v3010217#\r\n⒋11周年纪念币x50兑换彩虹云朵椅子#v3010362#\r\n⒌11周年纪念币x50兑换粉色扎昆椅子#v3010313#\r\n⒍11周年纪念币x70兑换黑天使祝福戒指#v1112586#\r\n⒎11周年纪念币x250兑换各种极品套装装备#v1052314#\r\n⒏11周年纪念币x300兑换各种极品套装武器#v1412065#\r\n⒐11周年纪念币x250兑换各种极品装备首饰#v1122143#\r\n⒑11周年纪念币x800兑换各种传说必成卷轴#v2044003#\r\n⒒11周年纪念币x800兑换各种传说周年必成卷轴#v2046010#");
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=100 && cm.getPlayer().getCSPoints(1) >= 100){
	    	cm.gainNX(-100);
		cm.gainItem(4310002,-100);
		cm.gainItem(4001465,500);
                cm.sendOk("#r兑换成功:#b\r\n1.爱心宝石 x500");
                cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币(100个)或点卷不足(100)!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=10 ){
		cm.gainItem(4310002,-10);
		cm.gainItem(1112446,1);
                cm.sendOk("#r兑换成功:#b\r\n1.老公老婆戒指LV1");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010313,1);
                cm.sendOk("#r兑换成功:#b\r\n1.粉红扎昆椅子");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010362,1);
                cm.sendOk("#r兑换成功:#b\r\n1.彩虹云朵椅子");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010217,1);
                cm.sendOk("#r兑换成功:#b\r\n1.香橙果冻布丁");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=70 ){
		cm.gainItem(4310002, -70);
		cm.gainItem(1112586,1);
                cm.sendOk("#r兑换成功:#b\r\n1.黑天使祝福戒指");
		cm.dispose();
            } else {
                cm.sendOk("兑换提示：\r\n#b1.你没有足够的7周年纪念币!\r\n注:(装备栏3个空位以上,特殊栏1个空位以上.)");
		cm.dispose();
            }
            break;
        case 9:
            cm.dispose();
            //cm.openNpc(9120033,6);
	    cm.sendOk("为了游戏的平衡 暂时关闭");
            break;
        case 10:
            cm.dispose();
            //cm.openNpc(9120033,7);
	    cm.sendOk("为了游戏的平衡 暂时关闭");
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9120033,8);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9120033,9);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9120033,10);
            break;
            }
        }
    }
}