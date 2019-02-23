function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.playerMessage("还有剩下的怪物1。");
    } else {
        pi.dojo_getUp();
        pi.getMap().setReactorState();
    }
}