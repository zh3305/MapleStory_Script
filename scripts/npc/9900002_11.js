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
        var selStr = "您好，欢迎来到MapleWing:\r\n\r\n#b#L0#购买#v5210002#   25000点卷#l\r\n#L1#购买#v5210004#   25000点卷#l\r\n#L7#购买#v5360015#   1000点卷#l\r\n#L2#购买#v1102320#   10000点卷#l\r\n#L8#购买#v1102321#   10000点卷#l\r\n#L3#购买#v1142328#   500000点卷#l\r\n#L4#购买#v1112915#   50000点卷#l\r\n#L5#购买#v1152059#   10000点卷#l\r\n#L6#购买#v5060003#   50000点卷#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            if (cm.getPlayer().getCSPoints(1)>=25000) { 
	    if(cm.haveItem(5210002)){
                cm.sendOk("您已经有双倍经验卡.");
} else{
	    cm.gainNX(-25000);
	    cm.gainItemPeriod(5210002,1,1);
}
            } else {
                cm.sendOk("您的点卷不足25000.");
            }
            break;

        case 1:
            cm.dispose();
            if (cm.getPlayer().getCSPoints(1)>=25000) { 
	    if(cm.haveItem(5210005)){
                cm.sendOk("您已经有双倍经验卡(晚).");
} else{
	    cm.gainNX(-25000);
	    cm.gainItemPeriod(5210005,1,1);
}
            } else {
                cm.sendOk("您的点卷不足25000.");
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
            cm.gainItem(1102320,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足10000.");
            cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=500000) { 
	    cm.gainNX(-500000);
            cm.gainItem(1142328,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足500000.");
            cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
            cm.gainItem(1112915,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足100000.");
            cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
            cm.gainItem(1152059,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足10000.");
            cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
            cm.gainItem(5060003,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足50000.");
            cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
            cm.gainItem(1102321,1);  
            cm.sendOk("购买成功.请查看背包");
            cm.dispose(); 
            } else {
            cm.sendOk("您的点卷不足10000.");
            cm.dispose();
            }
            break;
        case 7:
            cm.dispose();
            if (cm.getPlayer().getCSPoints(1)>=1000) { 
	    if(cm.haveItem(5360015)){
                cm.sendOk("您已经有双倍爆率卡.");
} else{
	    cm.gainNX(-1000);
	    cm.gainItemPeriod(5360015,1,1);
}
            } else {
                cm.sendOk("您的点卷不足1000.");
            }
            break;     
        }
    }
}
