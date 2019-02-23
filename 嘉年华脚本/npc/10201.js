/*
	NPC Name: 		Grendel the Really Old
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
			cm.sendNext("你想体验一下魔法师职业的话，请再来找我吧。");
			cm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
		cm.sendNext("魔法师拥有华丽效果的属性魔法，并且还拥有可在组队狩猎时发挥重要作用的各种辅助魔法。此外，第2次转职后，习得的属性魔法可以给相反属性的敌人造成致命伤害。");
    } else if (status == 1) {
		cm.sendYesNo("你要体验一下魔法师职业吗？");
    } else if (status == 2) {
		cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
		cm.dispose();
    }
}
