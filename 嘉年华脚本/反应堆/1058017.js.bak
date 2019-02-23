function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        var mob = em.getMonster(8910000);
        mob.getStats().setChange(true);
        mob.changeLevel(200);
        mob.getChangedStats().setOHp(100000000000);
        mob.setHp(100000000000);
        eim.registerMonster(mob);
        var map = eim.getMapInstance(0);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-131, 455));
        //rm.scheduleWarp(43200, 240000000);
        //if (!rm.getPlayer().isGM()) {
        //    rm.getMap().startSpeedRun();
        //}
    }
}