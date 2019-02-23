var status = -1;

function start() {
	cm.sendNext("啊，又……你好。你想离开圣地，前往其他地区吗？那你就找对人了。这里有开往#金银岛#k的#b六岔路口#k的船。");
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;

	if (status == -1) {
		cm.sendNext("看来你在圣地还有事要办，等你想去金银岛了再来找我吧。");
		cm.dispose();
	} else if (status == 0) {
		cm.sendYesNo("到金银岛的#b六岔路口#k去所需的时间是#b2分钟#k左右，费用是#b1000#k金币。1000您要支付金币乘坐船吗？");
	} else if (status == 1) {
		if (cm.getMeso() < 1000) {
			cm.sendNext("你明明没有钱嘛……必须有#b1000#k才可以去。");
		} else {
			cm.warp(104020120);
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
