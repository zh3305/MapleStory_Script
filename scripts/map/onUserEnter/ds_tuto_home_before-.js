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
        ms.getDirectionInfo(1, 90);
    } else if (status == 1) {
        ms.showEffect(false, "demonSlayer/text11");
        ms.getDirectionInfo(1, 4000);
    } else if (status == 2) {
        ms.showWZEffect("Effect/Direction6.img/DemonTutorial/Scene2");
        ms.dispose();
    }
}


