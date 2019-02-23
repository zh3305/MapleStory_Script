/*
	NPC Name: 		Grendel the Really Old
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
            cm.sendNext("想体验法师的话,再来找我吧.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("魔法师可以使用华丽效果的属性魔法,并可以在组队打猎中使用非常有用的辅助魔法.2转后学习的属性魔法可以给相反属性的敌人致命的伤害哦.");
    } else if (status == 1) {
        cm.sendYesNo("怎么样,想体验法师么?");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
        cm.dispose();
    }
}