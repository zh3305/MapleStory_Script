/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode >= 1) {
        status++;
    } else {
        status--;
    }
    var em = ms.getEventManager("BossShinas");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        if (ms.getMap().getAllMonster().size() == 0 && eim.getProperty("knightsummon").equals("0")) {
            for (i = 0; i < 3; i++) {
                var mob = em.getMonster(8850000 + i);
                eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-477, 113));
            }
            eim.setProperty("knightsummon", "1");
        }
    }
    ms.dispose();
}
