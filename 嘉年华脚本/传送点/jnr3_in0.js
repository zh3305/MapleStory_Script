function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out1").getState() > 0) {
        pi.warp(926110201, 0);
    } else {
        pi.playerMessage(5, "实验室大门是关闭的!");
    }
}
