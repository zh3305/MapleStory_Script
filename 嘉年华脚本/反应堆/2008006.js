function act() {
    rm.mapMessage(6, "空气中响起了音乐.");
    var em = rm.getEventManager("OrbisPQ");
    if (em != null) {
        em.setProperty("stage3", "1");
    }
}
