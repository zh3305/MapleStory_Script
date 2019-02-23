/*
    Zakum Entrance
*/

function enter(pi) {
    /*if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "没有完成任务不能进去。");
	return false;

    } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "没有火焰的眼不能进去。");
	return false;
    }*/
    
	pi.openNpc(2030013, "enter_zakum");
    //pi.playPortalSE();
    //pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}
