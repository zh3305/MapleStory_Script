var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("还没准备好吗?");
            cm.dispose();
        status--;
    }
    if (status == 0) {//sendYesNo
		//cm.dispose();
		//cm.openNpc(100305, 1);
	    cm.sendYesNo("你想去击败红蜗牛王吗,准备好了吗？");
	} else if (status == 1) {
		cm.dispose();
		//cm.openNpc(100305, 1);
		cm.warp(4000033, 0);
    }
}