function enter(pi) {
    if (pi.getQuestStatus(22000) == 0) {
        pi.playerMessage("現在還不能出去哦。");
    } else {
        pi.playPortalSE();
        pi.warp(100030102, 2);
        return true;
    }
}