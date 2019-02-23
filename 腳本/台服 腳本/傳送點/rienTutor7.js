function enter(pi) {
    if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
        pi.playPortalSE();
        pi.warp(140010100, 2);
    } else {
        pi.playerMessage(5, "瑞恩村莊在右邊。從右邊的傳送點進入村莊後，去找莉琳。");
    }
}