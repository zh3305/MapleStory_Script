function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.warp(271040100, 0);
    } else {
        pi.playerMessage("希纳斯封锁着这个出口.请消灭所有骑士!");
    }
}
