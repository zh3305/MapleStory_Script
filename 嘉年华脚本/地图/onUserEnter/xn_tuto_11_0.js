/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

    if (status == 0) {
        ms.playMovie("xenon.avi", true);
    } else {
	ms.getDirectionStatus(true);
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931060060, 0);
        ms.enableActions();
    }
}

