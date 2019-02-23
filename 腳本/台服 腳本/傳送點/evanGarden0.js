function enter(pi) {
    if (pi.getQuestStatus(22003) == 0) {
        pi.playerMessage("沒事的話不能外出。");
    } else {
         pi.playPortalSE();
        pi.warp(100030200, "east00");
        return true;
    }
}  