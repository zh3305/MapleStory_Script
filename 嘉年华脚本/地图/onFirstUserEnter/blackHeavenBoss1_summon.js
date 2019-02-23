function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("BossSiwu_NORMAL");
    if (eim != null && eim.getProperty("summom").equals("0")) {
        eim.setProperty("summom", "1");
        var mon = em.getMonster(8950100);
        mon.changeLevelmod(220, 500);
        mon.getChangedStats().setOHp(100000000000);
        mon.setHp(100000000000);
        mon.setReduceDamageType(3);
        eim.registerMonster(mon);
        ms.getMap().spawnMonsterOnGroundBelow(mon, new java.awt.Point(-2, -16));
    }
    ms.dispose();
}