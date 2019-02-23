

function action(mode, type, selection) {
    var mapId = cm.getMapId();
    if (mapId == 910340100) {
	cm.dispose();
        cm.openNpc(9020001,1);
    } else if (mapId == 910340200) {
	cm.dispose();
        cm.openNpc(9020001,2);
    } else if (mapId == 910340300) {
	cm.dispose();
        cm.openNpc(9020001,3);
    } else if (mapId == 910340400) {
	cm.dispose();
        cm.openNpc(9020001,4);
    } else if (mapId == 910340500) {
	cm.dispose();
        cm.openNpc(9020001,5);
    }
}