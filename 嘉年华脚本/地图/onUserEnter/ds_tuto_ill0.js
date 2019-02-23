/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.showWZEffect("Effect/Direction6.img/DemonTutorial/SceneLogo");
        ms.getDirectionInfo(1, 6300);
    } else {
        ms.dispose();
        ms.warp(927000000, 0);
    }
}


