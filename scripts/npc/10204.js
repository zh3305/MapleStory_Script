/*
	NPC Name: 		Kyrin
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendNext("想体验海盗的话,再来找我吧.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("海盗凭借高敏捷及力量给与敌人发射百发百中的短枪或者可以使用瞬间制约敌人的格斗术.使用短枪的海盗可以选择属性子弹更有效地攻击敌人或者坐在船上攻击敌人,使用拳甲（指节）的海盗可以变身后发挥更强的力量.");
    } else if (status == 1) {
        cm.sendYesNo("怎么样,想体验海盗么?");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
        cm.dispose();
    }
}