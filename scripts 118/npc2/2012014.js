/**
	Orbis Magic Spot - Orbis Tower <1st Floor>(200082100)
**/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	if(cm.haveItem(4001019)) {
	    cm.sendYesNo("使用 #b#t4001019#k 启动 #b#p2012014##k. 你将会被快速的传送到 #b#p2012015##k 旁，是否使用？");
	} else {
	    cm.sendOk("虽然有可以移动到#b#p2012014##k的#b#p2012015##k，但是没有卷轴不能使用。");
	    cm.dispose();
	}
    }
    if (status == 1) {
	cm.gainItem(4001019, -1);
	cm.warp(200082100,0);
	cm.dispose();
    }
}
