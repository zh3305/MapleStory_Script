

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("从这里跳上去是不是很困难 !");
		} else if (status == 1) {
			cm.sendYesNo("你是否知难而退,要放弃此次任务?");
		} else if (status == 2) {
			cm.warp(910000000,0);
			cm.dispose();
		} 
	}
}	
