/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 30);
        ms.getDirectionStatus(true);
    } else if (status == 0) {
        ms.getDirectionInfo(3, 0);
        ms.showEffect(false, "demonSlayer/text8");
        ms.getDirectionInfo(1, 500);
    } else if (status == 1) {
        ms.showEffect(false, "demonSlayer/text9");
        ms.getDirectionInfo(1, 3000);
    } else {
        ms.dispose();
        ms.warp(927000010, 0);
    }
}


