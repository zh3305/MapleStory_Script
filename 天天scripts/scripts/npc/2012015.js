/**
	El Nath Magic Spot - Orbis Tower <20th Floor>(200080200)
**/

var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    }
    status++;

    if (status == 0) {
	if (cm.haveItem(4001019)) {
	    cm.sendYesNo("使用 #b#t4001019# 启动 #b#p2012015##k. 你将会被快速的传送到 #b#p2012014##k 旁，是否使用？");
	} else {
	    cm.sendOk("虽然有可以移动到#b#p2012014##k的#b#p2012015##k，但是没有卷轴不能使用。");
	    cm.safeDispose();
	}
    }
    if (status == 1) {
	cm.gainItem(4001019, -1);
	cm.warp(200080200,0);
	cm.dispose();
    }
}
