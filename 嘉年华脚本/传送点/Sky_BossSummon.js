function enter(pi) {
    //dont need it
    var em = pi.getEventManager("Dragonica");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getMap().getAllMonster().isEmpty() && eim.getProperty("summon").equals("0")) {
        var mob = em.getMonster(8300007);
        var map = eim.getMapInstance(4);
        eim.setProperty("summon", "1");
        mob.getStats().setChange(true);
        mob.changeLevel(160);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(250, -10));
    }
}
