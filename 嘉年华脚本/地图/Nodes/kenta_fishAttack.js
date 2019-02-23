function act(oid, time) {
    var em = nm.getEventManager("Kenta");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("怪物们突然出现在了洞窟里！我们得用石头堵住洞窟的入口。", 5120052);
        nm.getMap().setSpawns(true);
        nm.nextNodeAction(9300275, time);
    }
}
