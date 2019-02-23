function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.warpParty(pi.getMapId() + 100, 0);
    } else {
        pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一关。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一关。");
    }
}