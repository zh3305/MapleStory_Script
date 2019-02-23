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
        ms.teachSkill(20021181, 1, 1);
        ms.teachSkill(20021166, 1, 1);
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
	ms.DisableUI(true);
        //ms.playMovie("adventurer.avi", true);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
        ms.getDirectionInfo(3, 4);
	ms.getDirectionInfo(1, 2100);
    } else if (status == 2) {
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 3000);
    } else if (status == 3) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 4) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/2", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 5) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/3", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 6) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/4", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 7) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
	ms.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", 2000, 0, -100, 1, 0);
	ms.getDirectionInfo(1, 2000);
    } else if (status == 8) {
	ms.EnableUI(0);
        ms.enableActions();
        ms.dispose();
    }
}

