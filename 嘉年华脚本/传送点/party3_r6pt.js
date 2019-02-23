function enter(pi) {
    try {
        var em = pi.getEventManager("OrbisPQ");//6开始
        if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
            pi.instantMapWarp(parseInt(pi.getPortal().getName().substring(3, 4)) + 5);
            //pi.playerMessage(-1, "正确的组合!");
            //pi.playerMessage(-1, "an" + pi.getPortal().getName().substring(3, 5));
            pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(3, 5), 2);
        } else {
            pi.instantMapWarp(22);
        }
    } catch (e) {
        pi.getPlayer().dropMessage(5, "Error: " + e);
    }
}
