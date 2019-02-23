var status = -1;
var text = "";
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
		text = head+"#e#d#h ##n#k，今天来玩点什么呢？\r\n#b";
		text += "#L1#"+icon+" 每日必做任务#l\r\n";
		text += "#L2#"+icon+" 惊喜福利副本#l\r\n";
		text += "#L3#"+icon+" 嗨翻组队任务#l\r\n";
		text += "#L4#"+icon+" 挑战极限BOSS#l\r\n";
		text += "#L5#"+icon+" 休闲福利跳跳跳#l\r\n";
		text += "#L6#"+icon+" 轻轻松松小游戏#l\r\n";
		text += "#L999#"+icon+" 边挂机边钓鱼#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection == 999) {
			cm.dispose();
			cm.openNpc(9330122);
			return;
		}
		var npcMode = selection;
		cm.dispose();
		cm.openNpc(9000232, npcMode);
	}
}