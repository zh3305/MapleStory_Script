//蜡笔改写


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("想去挑战蜈蚣副本吗？需要33个黑羊毛才可召唤蜈蚣王哦！蜈蚣王暴出的赤珠可在圣诞老人那换取物品哦！");
		}
		else if (status == 1) {
			cm.warp(701010321, 0);
			cm.dispose();
		}else{
			cm.sendOk("就这样吧!");
			cm.dispose();
		}
	}
}	
