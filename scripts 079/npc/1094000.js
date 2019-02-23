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
		cm.sendOk("我要让我的眼睛睁开了寻找敌人.虽然我的海鸥的朋友帮我很不错。");
		cm.dispose();
		}
	}
}
