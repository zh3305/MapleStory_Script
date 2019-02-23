var status = -1;

function action(mode, type, selection) {
	mode == 1 ? status++ : status--;

    if (status == 0) {
        cm.sendDreamWorldNPCTalk("要回到原來的地方嗎?");
    } else if (status == 1) {
        cm.warp(cm.getSavedLocation("MULUNG_TC"), 0);
		cm.clearSavedLocation("MULUNG_TC");
		cm.dispose();
    } else {
        cm.dispose();
    }
}