/* RED 1st impact
 Explorer tut
 Made by Pungin
 */

function enter(pi) {
    if (pi.getMapId() == 4000012 && pi.getQuestStatus(32204) == 2) {
        pi.warp(4000013, 0);
        return;
    }

    if (pi.getMapId() == 4000013 && pi.getQuestStatus(32207) == 2) {
        pi.warp(4000014, 0);
        return;
    }

    if (pi.getMapId() == 4000014 && pi.getQuestStatus(32210) == 1) {
        pi.warp(4000020, 0);
        return;
    }
    pi.openNpc(10301, "ExplorerTut01");
}
 