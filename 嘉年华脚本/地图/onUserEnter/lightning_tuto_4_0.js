/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode >= 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.sendSelfTalk("弗里德和双弩精灵应该已经进去了。我不能晚去的。");
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.getDirectionInfo(1, 750);
    } else if (status == 2) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionInfo(1, 1000);
    } else if (status == 3) {
	ms.TutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
	ms.showWZEffect(24, "Effect/Direction8.img/lightningTutorial2/Scene2");
	ms.sendSelfTalk("门里面，黑暗的气息浓的仿佛要令人窒息了。难道这就是黑魔法师的力量……？！必须赶紧进去，支援他们两个。");
    } else if (status == 4) {
	ms.getDirectionInfo(1, 1000);
    } else {
	ms.getDirectionStatus(true);
	ms.EnableUI(0);
	ms.dispose();
	ms.warp(927020090, 0);
	ms.enableActions();
    }
}	

