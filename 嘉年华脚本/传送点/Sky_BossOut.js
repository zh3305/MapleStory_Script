function enter(pi) {
    var em = pi.getEventManager("Dragonica");
    var eim = pi.getEventInstance();
    if (em != null && eim != null && pi.getMap().getAllMonster().size() == 0 && eim.getProperty("summon").equals("1")) {
        pi.openNpc(2085002);
    } else {
        pi.playerMessage(5, "请消灭御龙魔！");
    }
}
