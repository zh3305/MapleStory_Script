/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    var em = ms.getEventManager("BeidlerPQ");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        if (ms.getMapId() == 863010410 || ms.getMapId() == 863010310) {
            ms.getPlayer().showPortal("open", "2");
            ms.getPlayer().showPortal("clear", "2");
        }
        ms.getPlayer().gaintBossMap();
        ms.getPlayer().sendDathCount();
    }
    ms.dispose();
}
