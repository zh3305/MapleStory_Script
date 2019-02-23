/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
	ms.DisableUI(true);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/9", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.getDirectionInfo(3, 1);
	ms.getDirectionInfo(1, 30);
    } else{
        ms.teachSkill(20021181, -1, 0);
        ms.teachSkill(20021166, -1, 0);
        ms.teachSkill(20020109, 1, 1);
        ms.teachSkill(20020111, 1, 1);
        ms.teachSkill(20020112, 1, 1);
        ms.EnableUI(0);
	ms.DisableUI(false);
	ms.dispose();
	ms.warp(910150100, 0);
        ms.enableActions();
    }
}

