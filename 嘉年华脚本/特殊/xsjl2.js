var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendOk("#e#r你已经领取过了,去市场看看吧.点击下方拍卖,看不到需要把游戏设置分辨率调高,或者输入@PM");
	cm.dispose();
    }
}