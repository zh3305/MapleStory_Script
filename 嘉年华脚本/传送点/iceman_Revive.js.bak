function enter(pi) {
    if (pi.getPlayer().getEventInstance() != null) {
        pi.gainExp_PQ(70, 1.0);
        pi.setEventCount("Iceman");
        if (pi.getEventCount("Iceman") < 10) {
            pi.gainNX(2, 1000);
        } else {
            pi.playerMessage(-5, "当天帐号在此副本已经额外获得10次抵用卷奖励,次数已经用完。");
        }
        if (pi.canHold(4001529, 1)) { //TODO JUMP
            pi.gainItem(4001529, 1);
        }
        pi.gainPQPoint();
        /*if (pi.canHold(4001713, 1)) { 
         pi.gainItem(4001713, 1);
         }*/
    }
    pi.warp(932000000, 0);
}
