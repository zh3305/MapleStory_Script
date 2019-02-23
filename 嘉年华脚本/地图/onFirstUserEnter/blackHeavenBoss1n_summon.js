function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("BossSiwu_HARD");
    if (eim != null && eim.getProperty("summom").equals("0")) {
        eim.setProperty("summom", "1");
        var mon = em.getMonster(8950000);
        mon.changeLevelmod(230, 500);
        mon.getChangedStats().setOHp(1000000000000);
        mon.setHp(1000000000000);
        mon.setReduceDamageType(3);
        eim.registerMonster(mon);
        ms.getMap().spawnMonsterOnGroundBelow(mon, new java.awt.Point(-2, -16));
    }
    ms.dispose();
}