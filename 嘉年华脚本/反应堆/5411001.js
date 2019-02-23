/*
 * Ruin of Krexel II
 *  - Reactor to summon Krexel
 */

function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
        eim.getEventManager().setProperty("state", "2");
        rm.changeMusic("Bgm09/TimeAttack");
        rm.spawnMonster(9420520);
        rm.mapMessage(5, "克雷塞尔出现了。");
    }
}
