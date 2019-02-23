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
	ms.showWZEffect(24, "Effect/Direction8.img/lightningTutorial/Scene1");
	ms.getDirectionInfo(1, 9000);
    } else {
	ms.dispose();
	ms.warp(927020070, 0);
	ms.enableActions();
    }
}	

