/*
	NPC Name: 		Athena Pierce
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
            cm.sendNext("想体验弓手的话,再来找我吧.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("弓手拥有高敏捷及力量,在战斗中负责远距离攻击,假如弓手职业能巧妙地运用地势的话,打猎可是非常轻松厉害.");
    } else if (status == 1) {
        cm.sendYesNo("怎么样,想体验弓手么?");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
        cm.dispose();
    }
}