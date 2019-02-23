/*
	NPC Name: 		Dark Lord
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
	if (cm.getMapId() != 1020000 && cm.getMapId() != 4000026) {
		cm.dispose();
		return
	}
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		if (status == 1) {
			cm.sendNext("你想体验一下飞侠职业的话，请再来找我吧。");
			cm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
		cm.sendNext("飞侠是具备运气及一定程度的敏捷性和力量的职业。擅长在战场中突袭对手，或隐身等特殊技能。飞侠的机动力和回避率非常高。通过多样的技能，玩家能体验到操控飞侠的乐趣。");
    } else if (status == 1) {
		cm.sendYesNo("你要体验一下飞侠职业吗？");
    } else if (status == 2) {
		cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
		cm.dispose();
    }
}
