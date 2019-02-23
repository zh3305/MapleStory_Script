/*
    Zakum Entrance
*/

function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 3) {
        pi.warp(211042300);
    } else {
        pi.warp(211042401);
    }
    //pi.openNpc(2030013);
    return true;
}