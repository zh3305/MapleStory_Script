function act() {
    rm.mapMessage(6, "已经修复了其中一个部位.");
    var em = rm.getEventManager("OrbisPQ");
    if (em != null) {
        rm.removeItem(4001049);
        em.setProperty("stage", parseInt(em.getProperty("stage")) + 1);
        var r = rm.getMap().getReactorByName("minerva");
        r.forceHitReactor(r.getState() + 1);
    }
}
