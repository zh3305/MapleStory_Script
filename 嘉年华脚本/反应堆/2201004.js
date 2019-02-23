/*
 时间塔的本源:帕普拉斯[闹钟]
 */

function act() {
    try {
        var eim = rm.getEventInstance();
        var em = rm.getEventManager("Populatus");
        if (eim != null && em != null) {
            em.setProperty("state", "2");
            rm.mapMessage(5, "时间裂缝已经被<裂缝碎块>填充了");
            rm.changeMusic("Bgm09/TimeAttack");
            rm.spawnMonster(8500000, -410, -400);
            rm.getMap(220080000).setReactorState();
        }
    } catch (e) {
        rm.mapMessage(5, "错误: " + e);
    }
}
