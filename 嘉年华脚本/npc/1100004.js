var status = -1;

function start() {
	cm.sendNext("嗯……今天的风真好。你想离开圣地，到其他地区去吗？这艘船开往神秘岛的天空之城。");
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;

	if (status == -1) {
		cm.sendNext("怎么？你还有事要留在圣地吗？那你先去解决了再来吧。");
		cm.dispose();
	} else if (status == 0) {
		cm.sendYesNo("到达神秘岛的#b天空之城#k的时间大约是#b4分钟#k。费用是#b1000#k金币。1000您要支付金币乘坐船吗？");
	} else if (status == 1) {
		if (cm.getMeso() < 1000) {
			cm.sendNext("你明明没有钱嘛……必须有#b1000#k才可以去。");
		} else {
			cm.warp(200000100);
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
