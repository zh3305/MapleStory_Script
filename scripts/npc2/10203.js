/*
	NPC Name: 		Dark Lord
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
            cm.sendNext("想体验飞侠的话,再来找我吧.");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("飞侠 拥有运气和一些敏捷及力量,在战场中可以突袭敌人或者使用隐身等特殊技能.飞侠拥有非常敏捷的移动及回避,配合自身的多样化技能可以充分享受操作的乐趣.");
    } else if (status == 1) {
        cm.sendYesNo("怎么样,想体验飞侠么?");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
        cm.dispose();
    }
}