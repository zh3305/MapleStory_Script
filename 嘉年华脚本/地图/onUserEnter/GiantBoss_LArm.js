/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    var em = ms.getEventManager("BeidlerPQ");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        var prop = eim.getProperty(ms.getMapId().toString());
        if (prop != null && prop.equals("2")) {
            ms.getPlayer().showPortal("phase3", prop);
            ms.getPlayer().showPortal("clear", prop);
        }
        ms.getPlayer().gaintBossMap();
        ms.getPlayer().sendDathCount();
    }
    ms.dispose();
}
