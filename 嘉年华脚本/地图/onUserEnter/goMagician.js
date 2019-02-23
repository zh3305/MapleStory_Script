/*
 Author: Pungin
 */
var status = -1;

function start() {
    ms.EnableUI(1);
    ms.DisableUI(true);
    ms.showWZEffect("Effect/Direction3.img/magician/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}
