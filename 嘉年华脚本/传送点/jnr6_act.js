function enter(pi) {
    var em = pi.getEventManager("ZChaosPQ3");
    if (em != null && em.getProperty("stage").equals("0")) {
        pi.spawnMonster(9300142, 10);
        pi.spawnMonster(9300143, 10);
        pi.spawnMonster(9300144, 10);
        pi.spawnMonster(9300145, 10);
        pi.spawnMonster(9300146, 10);
        em.setProperty("stage", "1");
    }
}
