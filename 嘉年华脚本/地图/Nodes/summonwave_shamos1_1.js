function act(oid, time) {
    var em = nm.getEventManager("Rex");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("野狼冲上来了！保护我！", 5120035);
        var map = eim.getMapInstance(0);
        for (i = 0; i < 15; i++) {
            var mob = em.getMonster(9300276);
            eim.registerMonster(mob);
            mob.getStats().setChange(true);
            mob.changeLevel(Math.min(nm.getPartyAverageLevel(), 170));
            eim.getMapInstance(0).spawnMonsterOnGroundBelow(mob, new java.awt.Point(1802, -26));
        }
        nm.nextNodeAction(9300275, time);
    }
}
