/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    var em = ms.getEventManager("BeidlerPQ");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        var prop = eim.getProperty("open");
        if (prop != null) {
            ms.getPlayer().showPortal("open", prop);
        }
        ms.getPlayer().gaintBossMap();
        ms.getPlayer().sendDathCount();
    }
    ms.dispose();
}

