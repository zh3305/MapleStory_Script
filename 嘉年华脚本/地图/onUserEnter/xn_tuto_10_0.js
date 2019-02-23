/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

   if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 3) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/sig", 0, 0, 0, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/luti", 0, 0, 0, 0, 0);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 4) {
        ms.getDirectionInfoNew(0,1000,-407,43);
    } else if (status == 5) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 900);
    } else if (status == 6) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg2/15", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 900);
    } else if (status == 7) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/laser", 0, 0, 0, 0, 0);
        ms.getDirectionInfo(1, 1800);
    } else if (status == 8) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg2/16", 1200, -110, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else {
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931050990, 0);
        ms.enableActions();
    }
}

