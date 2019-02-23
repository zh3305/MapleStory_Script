function enter(pi) {
    var em = pi.getEventManager("ZChaosPQ3");
    if (em != null && em.getProperty("stage4").equals("2")) {
        pi.warp(926110400, 0);
    } else {
        pi.playerMessage(5, "实验室大门是关闭的!");
    }
}
