importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("转职请去各大城市找[蘑菇博士]进行转职！");
		} else if (status == 1) {
			cm.dispose();
		}
	}
}	