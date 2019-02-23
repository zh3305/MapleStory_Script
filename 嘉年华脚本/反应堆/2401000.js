function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        var em = eim.getEventManager();
        var mob = em.getMonster(8810026);
        mob.getStats().setChange(true);
        mob.changeLevel(120);
        mob.getChangedStats().setOHp(2100000000);
        mob.setHp(2100000000);
        eim.registerMonster(mob);
        var map = eim.getMapInstance(2);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(71, 260));
        rm.changeMusic("Bgm14/HonTale");
        rm.mapMessage("一声巨响，黑龙闪亮登场。");
        //rm.scheduleWarp(43200, 240000000);
        if (!rm.getPlayer().isGM()) {
            rm.getMap().startSpeedRun();
        }
    }
}
