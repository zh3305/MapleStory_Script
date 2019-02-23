/*
    Zakum Entrance
*/

function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 3) {
        pi.warp(211042300, "west00");
    } else {
        pi.warp(211042401, "west00");
    }
    //pi.openNpc(2030013);
    return true;
}