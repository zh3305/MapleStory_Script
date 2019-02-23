function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("BossSiwu_HARD");
    if (eim != null && ms.getMap().getMobsSize() <= 0) {
        var mon = em.getMonster(8950001);
        mon.changeLevelmod(230, 500);
        mon.getChangedStats().setOHp(2000000000000);
        mon.setHp(2000000000000);
        mon.setReduceDamageType(3);
        eim.registerMonster(mon);
        ms.getMap().spawnMonsterOnGroundBelow(mon, new java.awt.Point(-2, -16));
    }
    ms.dispose();
}