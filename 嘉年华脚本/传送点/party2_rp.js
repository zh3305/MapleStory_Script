function enter(pi) {
    try {
        var em = pi.getEventManager("LudiPQ");
        if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 4)) + "").equals("1")) {
            pi.instantMapWarp(parseInt(pi.getPortal().getName().substring(2, 3)) + 2);
            //pi.playerMessage(-1, "正确的组合!");
            pi.playerMessage(-1, "an" + pi.getPortal().getName().substring(2, 4));
            pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(2, 4), 2);
        } else {
            pi.instantMapWarp(13);
            pi.playerMessage(-1, "不正确的组合.");
        }
    } catch (e) {
        pi.getPlayer().dropMessage(5, "Error: " + e);
    }
}
/*function enter(pi) {
 pi.warp(922010700);
 }*/
