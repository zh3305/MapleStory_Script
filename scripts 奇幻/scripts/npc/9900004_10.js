var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "你好，请选择购买重置技能卷轴。\r\n#L111##b购买重置SP卷轴#v2500000#所有职业可用#l\r\n#L1##b洗1转技能点卷轴#v5050001##l\r\n#L2##b洗2转技能点卷轴#v5050002##l\r\n#L3##b洗3转技能点卷轴#v5050003##l\r\n#L4##b洗4转技能点卷轴#v5050004##l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
	case 111:
	    if(cm.getMeso() >= 500000) {
	    cm.gainMeso(- 500000);
            cm.gainItem(2500000, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
	case 1:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050001, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
	case 2:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050002, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
	case 3:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050003, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
	case 4:
	    if(cm.getMeso() >= 200000) {
	    cm.gainMeso(- 200000);
            cm.gainItem(5050004, 1);
            cm.sendOk("恭喜您购买成功!!!");
	    } else {
	    cm.sendOk("喜您购买成功!!!");
	    }
	    cm.dispose();
            break;
		}
    }
}
