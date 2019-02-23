function act(oid, time) {
    var em = nm.getEventManager("Rex");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("别发呆了！快消灭它们！！！", 5120035);
        var map = eim.getMapInstance(1);
        for (i = 0; i < 15; i++) {
            var mob = em.getMonster(9300277);
            eim.registerMonster(mob);
            mob.getStats().setChange(true);
            mob.changeLevel(Math.min(nm.getPartyAverageLevel(), 170));
            map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(285, 154));
        }
         nm.nextNodeAction(9300275, time);
    }
}
