/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    var em = ms.getEventManager("BeidlerPQ");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        var state = parseInt(eim.getProperty("Core"));
        ms.forceTrigger(ms.getMapId(), 8630000 + state);
        ms.getPlayer().gaintBossMap();
    }
    ms.dispose();
}
