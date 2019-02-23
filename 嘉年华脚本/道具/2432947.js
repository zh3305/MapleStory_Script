status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
        im.gainNX(2,66666);
		im.gainItem(2432947,-1);
		im.sendOk("恭喜获得66666抵用卷");
		im.dispose();
		}
}
