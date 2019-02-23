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
		cm.sendOk("你是谁？你来这里要做什么？你在跟我说话吗？");
		cm.dispose();
		}
	}
}
