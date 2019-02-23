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
    } else {
        ms.getDirectionEffect(3, "", [0]);
        ms.dispose();
        ms.openNpc(2159310);
    }
}


