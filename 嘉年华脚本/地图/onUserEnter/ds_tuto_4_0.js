/*
 Author: Pungin
 */

function start() {
    ms.EnableUI(1);
    ms.DisableUI(true);
    ms.getDirectionInfo(1, 3000);
    ms.getDirectionStatus(true);
    ms.dispose();
    ms.openNpc(2159344);
}
