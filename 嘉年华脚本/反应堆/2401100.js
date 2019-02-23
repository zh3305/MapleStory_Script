function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        var mob = em.getMonster(8810130);
        mob.getStats().setChange(true);
        mob.changeLevel(180);
        mob.getChangedStats().setOHp(20000000000);
        mob.setHp(20000000000);
        eim.registerMonster(mob);
        var map = eim.getMapInstance(2);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(71, 260));
        rm.changeMusic("Bgm14/HonTale");
        rm.mapMessage("进阶暗黑龙王出现了,大家注意躲避。");
        //rm.scheduleWarp(43200, 240000000);
        if (!rm.getPlayer().isGM()) {
            rm.getMap().startSpeedRun();
        }
    }
}
