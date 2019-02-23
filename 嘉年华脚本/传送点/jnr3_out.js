function enter(pi) {
    var em = pi.getEventManager("ZChaosPQ3");
    if (em != null && em.getProperty("stage3").equals("1")) {
        pi.warp(926110203, 0);
    } else {
        pi.playerMessage(5, "实验室大门是关闭的!");
    }
}
