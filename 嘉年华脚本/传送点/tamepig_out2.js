function enter(pi) {
    pi.getPlayer().removeAll(4031507);
    pi.getPlayer().removeAll(4031508);
    if (pi.getMap(923010000).getCharactersSize() < 1) {
        pi.getMap(923010000).resetFully();
    }
    pi.warp(230000003, "out00");
    return true;
}
