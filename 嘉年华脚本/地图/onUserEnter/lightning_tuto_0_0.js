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
	ms.getDirectionInfo(3, 0);
	ms.getDirectionInfo(1, 3300);
	ms.showWZEffect(24, "Effect/Direction8.img/lightningTutorial/Scene0");
    } else{
	ms.EnableUI(0);
	ms.dispose();
	ms.warp(927020000, 0);
        ms.enableActions();
    }
}

