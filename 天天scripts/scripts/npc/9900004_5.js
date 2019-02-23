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
        var selStr = "#r购买福利喇叭：#b\r\n#L0#高质地喇叭#v5072000#\r\n#L1#心脏高级喇叭#v5073000#\r\n#L2#白骨高级喇叭#v5074000#\r\n#L3#炽热情景喇叭#v5390000#\r\n#L4#绚烂情景喇叭#v5390001#\r\n#L5#爱心情景喇叭#v5390002#\r\n#L6#小老虎情景喇叭#v5390005#\r\n#L7#咆哮老虎情景喇叭#v5390006#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 10 && cm.getBossLog("高质地1") <= 2){           
                cm.gainMeso( - 10);
		cm.gainItem(5072000,1);
		cm.setBossLog("高质地1", 1);
                cm.sendOk("获得#b高质地喇叭#v5072000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r领取失败:\r\n#b1.10金币都没有？那么懒.打个怪就有了.或者您已经购买10次!\r\n注:(每天只能买10次)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.getMeso() >= 7200000 && cm.getBossLog("心脏高级") >= 10){
                cm.gainMeso( - 7200000);
		cm.gainItem(5073000,1,1);
		cm.setBossLog("心脏高级");
                cm.sendOk("获得#b心脏高级喇叭#v5073000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(720W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 7200000 && cm.getBossLog("白骨高级") >= 10){
                cm.gainMeso( - 7200000);
		cm.gainItem(5074000,1,1);
		cm.setBossLog("白骨高级");
                cm.sendOk("获得#b白骨高级喇叭#v5074000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(720W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("炽热情景") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390000,1,1);
		cm.setBossLog("炽热情景");
                cm.sendOk("获得#b炽热情景喇叭#v5390000#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1200W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("绚烂情景") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390001,1,1);
		cm.setBossLog("绚烂情景");
                cm.sendOk("获得#b绚烂情景喇叭#v5390001#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1200W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("爱心情景") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390002,1,1);
		cm.setBossLog("爱心情景");
                cm.sendOk("获得#b爱心情景喇叭#v5390002#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1200W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 12000000 && cm.getBossLog("小老虎") >= 10){
                cm.gainMeso( - 12000000);
		cm.gainItem(5390005,1,1);
		cm.setBossLog("小老虎");
                cm.sendOk("获得#b小老虎情景喇叭#v5390005#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1200W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 20000000 && cm.getBossLog("咆哮老虎") >= 10){
                cm.gainMeso( - 20000000);
		cm.gainItem(5390006,1,1);
		cm.setBossLog("咆哮老虎");
                cm.sendOk("获得#b咆哮老虎情景喇叭#v5390006#x1");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)或已经购买10次!\r\n注:(特殊栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}