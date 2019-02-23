function act() {
    rm.mapMessage(6, "种出了迎月花.");
    var em = rm.getEventManager("HenesysPQ");
    var eim = rm.getEventInstance();
    if (em != null && eim != null) {
        var react = rm.getMap().getReactorByName("fullmoon");
        em.setProperty("stage", parseInt(em.getProperty("stage")) + 1);
        react.forceHitReactor(react.getState() + 1);
        rm.removeItem(4000884);
        if (em.getProperty("stage").equals("6")) {
            rm.mapMessage(6, "请保护好月妙!!!");
            rm.getMap().setSpawns(true);
            rm.getMap().respawn(true);
            eim.schedule("killPig", 2000);
            var mob = em.getMonster(9300061);
            eim.registerMonster(mob);
            rm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-183, -433));
            rm.achievement(50);
        }
    }
}
