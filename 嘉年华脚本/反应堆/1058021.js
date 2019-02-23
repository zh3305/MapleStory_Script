function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        //var mob1 = em.getMonster(8930000);
        var mob2 = em.getMonster(8930001);
        /*mob1.getStats().setChange(true);
         mob1.changeLevel(200);
         mob1.getChangedStats().setOHp(200000000000);
         mob1.setHp(200000000000);*/
        mob2.getStats().setChange(true);
        //mob2.changeLevel(200);
        //mob2.getChangedStats().setOHp(200000000000);
        //mob2.setHp(200000000000);
        //eim.registerMonster(mob1);
        eim.registerMonster(mob2);
        var map = eim.getMapInstance(0);
        //map.spawnMonsterWithEffect(mob1, 12, new java.awt.Point(-190, 443));
        map.spawnMonsterWithEffect(mob2, 12, new java.awt.Point(-190, 443));
        if (!rm.getPlayer().isGM()) {
            rm.getMap().startSpeedRun();
        }
    }
}
