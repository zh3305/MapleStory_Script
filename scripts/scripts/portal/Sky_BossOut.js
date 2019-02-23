function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.openNpc(9330192);
    } else {
        pi.playerMessage(5, "请确认当前地图是否还存在怪物！");
    }
}