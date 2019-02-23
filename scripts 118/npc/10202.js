/*
	NPC Name: 		Dances with Balrog
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
            cm.sendNext("想体验战士的话,再来找我吧.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("战士拥有很强的攻击力和体力,因此在战斗中处于非常重要的地位.因为基本攻击很强,所以学习高级技能的话可以发挥超强的力量.");
    } else if (status == 1) {
        cm.sendYesNo("怎么样,想体验战士么?");
    } else if (status == 2) {
        //cm.MovieClipIntroUI(true);
       // cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
        cm.dispose();
    }
}