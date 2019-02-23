/* @Author Lerk
 * 
 * Guild Quest Waiting Room - Exit Portal (map 990000000)
 */

function enter(pi) {
    if (pi.getPlayer().getEventInstance() != null) {
        pi.getPlayer().getEventInstance().unregisterPlayer(pi.getPlayer());
    }
    pi.warp(101030104);
    return true;
}
