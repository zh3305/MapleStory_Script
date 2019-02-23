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
        var selStr = "您好，欢迎来到MapleWing:\r\n\r\n#b#L0#购买#v5072000#(10个)   5000点卷#l\r\n#L1#购买#v5072000#(50个)   25000点卷#l\r\n#L2#购买#v5072000#(100个)   50000点卷#l\r\n#L3#购买#v5073000#(10个)   10000点卷#l\r\n#L4#购买#v5073000#(50个)   50000点卷#l\r\n#L5#购买#v5073000#(100个)   100000点卷#l\r\n#L6#购买#v5074000#(10个)   10000点卷#l\r\n#L7#购买#v5074000#(50个)   50000点卷#l\r\n#L8#购买#v5074000#(100个)   100000点卷#l\r\n#L9#购买#v5076000#(10个)   10000点卷#l\r\n#L10#购买#v5076000#(50个)   50000点卷#l\r\n#L11#购买#v5076000#(100个)   100000点卷#l\r\n#L12#购买#v5079001#(10个)   10000点卷#l\r\n#L13#购买#v5079001#(50个)   50000点卷#l\r\n#L14#购买#v5079001#(100个)   100000点卷#l\r\n#L15#购买#v5079002#(10个)   10000点卷#l\r\n#L16#购买#v5079002#(50个)   50000点卷#l\r\n#L17#购买#v5079002#(100个)   100000点卷#l\r\n#L18#购买#v5077000#(10个)   15000点卷#l\r\n#L19#购买#v5077000#(50个)   75000点卷#l\r\n#L20#购买#v5077000#(100个)   150000点卷#l\r\n#L21#购买#v5390000#(10个)   15000点卷#l\r\n#L22#购买#v5390000#(50个)   75000点卷#l\r\n#L23#购买#v5390000#(100个)   150000点卷#l\r\n#L24#购买#v5390001#(10个)   75000点卷#l\r\n#L25#购买#v5390001#(50个)   75000点卷#l\r\n#L26#购买#v5390001#(100个)   150000点卷#l\r\n#L27#购买#v5390002#(10)   15000点卷#l\r\n#L28#购买#v5390002#(50个)   75000点卷#l\r\n#L29#购买#v5390002#(100个)   150000点卷#l\r\n#L30#购买#v5390005#(10个)   15000点卷#l\r\n#L31#购买#v5390005#(50个)   75000点卷#l\r\n#L32#购买#v5390005#(100个)   150000点卷#l\r\n#L33#购买#v5390006#(10个)   20000点卷#l\r\n#L34#购买#v5390006#(50个)   100000点卷#l\r\n#L35#购买#v5390006#(100个)   200000点卷#l\r\n#L36#购买#v5390007#(10个)   20000点卷#l\r\n#L37#购买#v5390007#(50个)   100000点卷#l\r\n#L38#购买#v5390007#(100个)   200000点卷#l\r\n#L39#购买#v5390008#(10个)   20000点卷#l\r\n#L40#购买#v5390008#(50个)   100000点卷#l\r\n#L41#购买#v5390008#(100个)   200000点卷#l\r\n#L42#购买#v5390010#(10个)   30000点卷#l\r\n#L43#购买#v5390010#(50个)   150000点卷#l\r\n#L44#购买#v5390010#(100个)   300000点卷#l";
          cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1)>=5000) { 
	    cm.gainNX(-5000);
	    cm.gainItem(5072000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足5000.");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.getPlayer().getCSPoints(1)>=25000) { 
	    cm.gainNX(-25000);
	    cm.gainItem(5072000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足25000.");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5072000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5073000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足10000.");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5073000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5073000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5074000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足10000.");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5074000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5074000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5076000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足10000.");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5076000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5076000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5079001,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足10000.");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5079001,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5079001,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.getPlayer().getCSPoints(1)>=10000) { 
	    cm.gainNX(-10000);
	    cm.gainItem(5079002,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足10000.");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.getPlayer().getCSPoints(1)>=50000) { 
	    cm.gainNX(-50000);
	    cm.gainItem(5079002,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足50000.");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5079002,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.getPlayer().getCSPoints(1)>=15000) { 
	    cm.gainNX(-15000);
	    cm.gainItem(5077000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足15000.");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.getPlayer().getCSPoints(1)>=75000) { 
	    cm.gainNX(-75000);
	    cm.gainItem(5077000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足75000.");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5077000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.getPlayer().getCSPoints(1)>=15000) { 
	    cm.gainNX(-15000);
	    cm.gainItem(5390000,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足15000.");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.getPlayer().getCSPoints(1)>=75000) { 
	    cm.gainNX(-75000);
	    cm.gainItem(5390000,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足75000.");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5390000,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.getPlayer().getCSPoints(1)>=15000) { 
	    cm.gainNX(-15000);
	    cm.gainItem(5390001,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足15000.");
		cm.dispose();
            }
            break;
        case 25:
            if (cm.getPlayer().getCSPoints(1)>=75000) { 
	    cm.gainNX(-75000);
	    cm.gainItem(5390001,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足75000.");
		cm.dispose();
            }
            break;
        case 26:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5390001,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 27:
            if (cm.getPlayer().getCSPoints(1)>=15000) { 
	    cm.gainNX(-15000);
	    cm.gainItem(5390002,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足15000.");
		cm.dispose();
            }
            break;
        case 28:
            if (cm.getPlayer().getCSPoints(1)>=75000) { 
	    cm.gainNX(-75000);
	    cm.gainItem(5390002,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足75000.");
		cm.dispose();
            }
            break;
        case 29:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5390002,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 30:
            if (cm.getPlayer().getCSPoints(1)>=15000) { 
	    cm.gainNX(-15000);
	    cm.gainItem(5390005,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足15000.");
		cm.dispose();
            }
            break;
        case 31:
            if (cm.getPlayer().getCSPoints(1)>=75000) { 
	    cm.gainNX(-75000);
	    cm.gainItem(5390005,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足75000.");
		cm.dispose();
            }
            break;
        case 32:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5390005,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 33:
            if (cm.getPlayer().getCSPoints(1)>=20000) { 
	    cm.gainNX(-20000);
	    cm.gainItem(5390006,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足20000.");
		cm.dispose();
            }
            break;
        case 34:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5390006,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 35:
            if (cm.getPlayer().getCSPoints(1)>=200000) { 
	    cm.gainNX(-200000);
	    cm.gainItem(5390006,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足200000.");
		cm.dispose();
            }
            break;
        case 36:
            if (cm.getPlayer().getCSPoints(1)>=20000) { 
	    cm.gainNX(-20000);
	    cm.gainItem(5390007,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足20000.");
		cm.dispose();
            }
            break;
        case 37:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5390007,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;
        case 38:
            if (cm.getPlayer().getCSPoints(1)>=200000) { 
	    cm.gainNX(-200000);
	    cm.gainItem(5390007,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足200000.");
		cm.dispose();
            }
            break;
        case 39:
            if (cm.getPlayer().getCSPoints(1)>=20000) { 
	    cm.gainNX(-20000);
	    cm.gainItem(5390008,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足20000.");
		cm.dispose();
            }
            break;
        case 40:
            if (cm.getPlayer().getCSPoints(1)>=100000) { 
	    cm.gainNX(-100000);
	    cm.gainItem(5390008,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足100000.");
		cm.dispose();
            }
            break;        
        case 41:
            if (cm.getPlayer().getCSPoints(1)>=200000) { 
	    cm.gainNX(-200000);
	    cm.gainItem(5390008,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足200000.");
		cm.dispose();
            }
            break;
        case 42:
            if (cm.getPlayer().getCSPoints(1)>=30000) { 
	    cm.gainNX(-30000);
	    cm.gainItem(5390010,10);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足30000.");
		cm.dispose();
            }
            break;
        case 43:
            if (cm.getPlayer().getCSPoints(1)>=150000) { 
	    cm.gainNX(-150000);
	    cm.gainItem(5390010,50);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足150000.");
		cm.dispose();
            }
            break;
        case 44:
            if (cm.getPlayer().getCSPoints(1)>=300000) { 
	    cm.gainNX(-300000);
	    cm.gainItem(5390010,100);
		cm.dispose();
            } else {
                cm.sendOk("您的点卷不足300000.");
		cm.dispose();
            }
            break;
        }
    }
}