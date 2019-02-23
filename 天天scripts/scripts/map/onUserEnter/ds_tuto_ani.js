/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        //ms.EnableUI(1);
        //ms.DisableUI(true);
        //ms.playMovie("DemonSlayer" + (ms.getPlayerStat("GENDER") == 0 ? "1" : "2") + ".avi");
		ms.dispose();
        ms.openNpc(2159311, 1);
    } else {
        ms.dispose();
        ms.openNpc(2159311, 1);
    }
}