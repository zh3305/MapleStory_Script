function act(oid, time) {
    var em = nm.getEventManager("Rex");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("你们去取一些上面的冰河水来，我在这里等着你们……", 5120035);
        //eim.schedule("summonwave", 0);
        nm.spawnNpc(2022009, nm.getMap().getMonsterById(9300275).getPosition());
    }
    //nm.talkMonster("时间不多了让我们快点吧!", 5120035, oid);
}
