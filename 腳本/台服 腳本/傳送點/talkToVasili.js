/* RED 1st impact
 Explorer tut
 Made by Pungin
 */
function enter(pi) {
    if (pi.getQuestStatus(32214) == 1) {
        pi.openNpc(10305, "ExplorerTut02");
    } else if (pi.getQuestStatus(32214) == 2) {
        pi.openNpc(10305, "ExplorerTut03");
    } else {
        pi.openNpc(10305);
    }
}
