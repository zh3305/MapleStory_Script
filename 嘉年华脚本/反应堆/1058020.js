function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        var mob1 = em.getMonster(8930100);

        eim.registerMonster(mob1);
        var map = eim.getMapInstance(0);
        map.spawnMonsterWithEffect(mob1, 12, new java.awt.Point(-190, 443));
        //map.spawnMonsterWithEffect(mob2, 12, new java.awt.Point(-190, 443));
        if (!rm.getPlayer().isGM()) {
            rm.getMap().startSpeedRun();
        }
    }
}
