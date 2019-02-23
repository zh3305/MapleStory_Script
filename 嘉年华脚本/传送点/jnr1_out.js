function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        pi.warp(926110100, 0);
    } else {
        pi.playerMessage(5, "请确认地图上是否还存在怪物!");
    }
}
