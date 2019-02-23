function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        eim.getEventManager().setProperty("state", "2");
        rm.spawnMonster(9420541, 1);
    }
}
