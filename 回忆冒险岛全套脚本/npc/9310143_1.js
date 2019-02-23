var status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head+"请选择你要购买的装备类型：\r\n";
		text+="#b#L0#"+icon+"紫金枫叶套装#l\r\n";
		text+="#L1#"+icon+"革命装备套装#l\r\n";
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		if (selection == 0) {
			cm.dispose();
			cm.openNpc(9310143, 2);
		} else if (selection == 1) {
			cm.dispose();
			cm.openShop(20000);
		}
	} 
}