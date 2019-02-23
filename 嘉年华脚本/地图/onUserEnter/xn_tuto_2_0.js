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
	ms.EnableUI(1);
        ms.getDirectionInfo(9, 1);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 3000);
    } else {
        ms.dispose();
        ms.warp(931050920, 0);
        ms.enableActions();
    }
}

