function enter(pi) {
    if (pi.isQuestActive(20839)) {
        pi.playPortalSE();
        pi.warp(130030006, 0);
        pi.playerMessage(-9, "前往小橋樑。");
    } else {
        pi.playerMessage(-9, "課程還沒結束。");
    }
}