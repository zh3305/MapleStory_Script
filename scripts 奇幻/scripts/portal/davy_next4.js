function enter(pi) {
    if (pi.getMap().getReactorByName("sMob1").getState() >= 1 && pi.getMap().getReactorByName("sMob2").getState() >= 1 && pi.getMap().getReactorByName("sMob3").getState() >= 1 && pi.getMap().getReactorByName("sMob4").getState() >= 1) {
        if (pi.isLeader() && pi.haveItem(4001117,20)) {
            pi.warpParty(925100500);
        } else {
            pi.playerMessage(5, "请收集骷髅钥匙20个,否则无法通过!");
        }
    } else {
        pi.playerMessage(5, "请关闭所有入口,否则无法通过!");
    }
}