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
    if (status == 0) {
	    cm.sendYesNo("你任务还没完成,不想进行了吗？\r\n或者你建的不是冒险家职业,体验新手任务请建冒险家职业,\r\n点是将会跳过新手任务...");
	} else if (status == 1) {
		cm.warp(10000, 0);
        cm.dispose();
    }
}