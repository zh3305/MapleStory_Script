function enter(pi) {
    if (pi.getQuestStatus(21013) == 2) {
	pi.playPortalSE();
	pi.warp(140090500, 1);
    } else {
	pi.playerMessage(5, "完成任務後才能進入下一張地圖。");
    }
}