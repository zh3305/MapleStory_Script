function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        eim.getEventManager().setProperty("state", "3");
        rm.spawnMonster(9420546, 1);
    }
}