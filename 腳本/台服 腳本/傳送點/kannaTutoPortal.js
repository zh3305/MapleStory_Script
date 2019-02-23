function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.openNpc("kannaTutoPortal");
    } else {
        pi.topMsg("打敗所有的敵人！");
    }
}