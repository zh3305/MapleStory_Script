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
		cm.sendOk("黑魔术师和他的追随者。Kyrin和Nautilus的船员。他们将追逐，直到其中一人不存在，这是肯定的。");
		cm.dispose();
		}
	}
}
