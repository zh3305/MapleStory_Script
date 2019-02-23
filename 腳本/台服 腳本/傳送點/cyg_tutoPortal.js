function enter(pi) {
    if (pi.isQuestActive(20827)) {
        pi.playPortalSE();
        pi.warp(130030102, 0);
        pi.playerMessage(-9, "前往體力鍛煉場。");
    } else {
        pi.playerMessage(-9, "課程還沒結束。");
    }
}