/*
	NPC Name: 		Athena Pierce
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
			cm.sendNext("你想体验一下弓箭手职业的话，请再来找我吧。");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		cm.sendNext("弓箭手是敏捷性和力量兼备的职业。负责在战场后方进行远距离攻击。擅长利用地形进行狩猎。");
	} else if (status == 1) {
		cm.sendYesNo("你要体验一下弓箭手职业吗？");
	} else if (status == 2) {
		cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
		cm.dispose();
	}
}
