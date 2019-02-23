/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionInfo(1, 3000);
        ms.getDirectionStatus(true);
    } else if (status == 1) {
        ms.showEffect(false, "demonSlayer/text12");
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 10);
    } else {
        ms.getDirectionInfo(3, 0);
        ms.dispose();
        ms.openNpc(2159311);
    }
}
