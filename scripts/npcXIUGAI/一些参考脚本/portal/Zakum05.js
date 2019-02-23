/*
    Zakum Entrance
*/

function enter(pi) {
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}