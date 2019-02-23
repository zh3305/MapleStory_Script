
var status = 0;
var icon="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
        	var text="您好，在这里可以制作140、150的装备，请选择您需要制作的装备类型：\r\n";
			text+="#b#L241#"+icon+" 制作140级防具#l\r\n";
			text+="#b#L242#"+icon+" 制作140级武器#l\r\n";
			text+="#b#L244#"+icon+" 制作150级防具#l\r\n";
			text+="#b#L243#"+icon+" 制作150级武器#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			cm.dispose();
			cm.openNpc(1022003, selection);
		}
	}
}