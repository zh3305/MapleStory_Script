var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("还没准备好吗?.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("恭喜你,完成了新手的所有任务,在这里我送你一份礼物,准备好了吗？");
	} else if (status == 1) {
        cm.warp(104000000, 0);
        cm.dispose();
    }
}