
function action(mode, type, selection) {
    var returnMap = cm.getSavedLocation("MULUNG_TC");
    cm.clearSavedLocation("MULUNG_TC");

    var target = cm.getMap(returnMap);
    var portal = target.getPortal("unityPortal2");
    if (portal == null) {
		portal = target.getPortal(0);
    }
    if (cm.getMapId() != target) {
		cm.playPortalSE();
		cm.getPlayer().changeMap(target, portal);
    }
}