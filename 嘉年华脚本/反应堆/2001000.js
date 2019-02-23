function act() {
    var em = rm.getEventManager("OrbisPQ");
    rm.removeItem(4001053);
    var done = Math.random() > .6 && em.getProperty("stage7").equals("0");
    rm.spawnMonster(done ? 9300049 : 9300048);
    if (done) {
        em.setProperty("stage7", "1");
    }
}
