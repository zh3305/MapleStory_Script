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
            cm.sendNext("如果想當海盜，請再來找我吧。");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("海盜以出色的敏捷性和力量為基礎，向敵人發射百發百中的槍，或用體術將敵人瞬間消滅。槍手可以按照屬性選擇槍彈，有效地進行攻擊，或在船上進行更強大的攻擊，打手可由變身來發揮強有力的體術。");
    } else if (status == 1) {
        cm.sendYesNo("怎麼樣，要想體驗海盜嗎？");
    } else if (status == 2) {
        cm.MovieClipIntroUI(true);
        cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
        cm.dispose();
    }
}