/*
 Made by Pungin
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.playMovie("adventurer.avi");
    } else if (status == 1) {
        ms.warp(4000005, 0);
        ms.getDirectionStatus(true);
        ms.EnableUI(0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
	