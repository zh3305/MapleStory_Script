function enter(pi) { // Not tested T_____T
    pi.playPortalSE();
    if (pi.getPlayer().getMapId() == 240050105) pi.warp(240050400, "st00");
    else pi.warp(pi.getPlayer().getMapId() + 1, "st00");
    return true;
}
