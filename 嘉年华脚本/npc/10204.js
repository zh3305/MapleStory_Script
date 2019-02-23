/*
	NPC Name: 		Kyrin
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
			cm.sendNext("你想体验一下海盗职业的话，请再来找我吧。");
			cm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
		cm.sendNext("海盗拥有出色的敏捷性和力量，能够使用百发百中的手枪，或瞬间制敌的体术。火枪手能够利用不同属性的子弹发动有效进攻，或在搭乘战船后发动更加强大的攻击。拳手可通过变身发挥强大的体术。");
    } else if (status == 1) {
		cm.sendYesNo("你要体验一下海盗职业吗？");
    } else if (status == 2) {
		cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
		cm.dispose();
    }
}
