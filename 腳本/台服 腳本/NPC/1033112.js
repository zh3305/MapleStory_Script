var maps = [104020000, 100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100]
var status = -1;

function start() {
	cm.sendYesNo("你想傳送到別的地方嗎？這只需要花費#b3000楓幣#k而已哦。");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
	status++;
	if (status == 0) {
		cm.sendSlideMenu(5, "#0#六條岔道#1#弓箭手村#2#魔法森林#3#勇士之村#4#墮落都市#5#維多利亞港#6#奇幻村#7#鯨魚號");
	} else if (status == 1) {
		if (cm.getMeso() < 3000) {
			cm.sendNext("請確認你是否帶有足夠的盤纏。");
			cm.dispose();
		} else {
			cm.gainMeso(-3000);
			cm.warp(maps[selection]);
			cm.dispose();
		}
	}
}