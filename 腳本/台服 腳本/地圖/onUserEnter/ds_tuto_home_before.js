/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionEffect(3, "", [1]);
        ms.getDirectionEffect(1, "", [30]);
        ms.getDirectionStatus(true);
    } else if (status == 0) {
        ms.getDirectionEffect(3, "", [0]);
        ms.getDirectionEffect(1, "", [90]);
    } else if (status == 1) {
        ms.showEffect(false, "demonSlayer/text11");
        ms.getDirectionEffect(1, "", [4000]);
    } else {
        ms.showWZEffect("Effect/Direction6.img/DemonTutorial/Scene2");
        ms.dispose();
    }
}


