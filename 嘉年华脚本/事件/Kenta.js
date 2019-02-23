/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：组队任务：陷入危机的坎特
 *  @Author Kent 
 */
var minPlayers = 2;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Kenta");
    var map = eim.setInstanceMap(923040100); //阶段一
    eim.setProperty("KentaSave", "0");
    eim.setProperty("HP", "0");
    eim.setProperty("leader", "true");
    map.resetFully();
    map.killAllMonsters(false);
    map.resetSpawnLevel(level);
    map.spawnNpc(9020004, new java.awt.Point(201, 1800));

    map = eim.setInstanceMap(923040200);//阶段二
    map.resetFully();
    map.resetSpawnLevel(level);
    map.setSpawns(false);
    map.killAllMonsters(false);
    eim.setProperty("cave1", "0");
    eim.setProperty("cave2", "0");
    eim.setProperty("cave3", "0");
    eim.setProperty("cave4", "0");

    map = eim.setInstanceMap(923040300);//阶段三
    map.resetFully();
    map.resetSpawnLevel(level);
    eim.setProperty("caveBreak", "0");
    eim.setProperty("timing", "0");
    eim.setProperty("waterLevel", "0");
    eim.setProperty("kenta_batAttack", "0");
    //map.spawnNpc(9020004, new java.awt.Point(147, 168));
    map = eim.setInstanceMap(923040400);//阶段四
    map.resetFully();
    map.spawnNpc(9020004, new java.awt.Point(-161, 123));
    var mob1 = em.getMonster(9300461);
    eim.registerMonster(mob1);
    mob1.changeLevel(level);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(576, 138));
    var mob2 = em.getMonster(9300468);
    eim.registerMonster(mob2);
    mob2.changeLevel(level);
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-1116, 138));
    eim.startEventTimer(1200000); //30 mins
    eim.setProperty("entryTimestamp", "" + java.lang.System.currentTimeMillis());
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid < 923040100 || mapid > 923040400) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    if (mobId == 9300460) {
        end(eim);
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 923040000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function waterLevelUp(eim) {
    var level = parseInt(eim.getProperty("waterLevel")) + 1;
    eim.setProperty("waterLevel", level);
    var lastplayer;
    var mob;
    for (i = 0; i < eim.getPlayers().size(); i++) {
        lastplayer = eim.getPlayers().get(i);
        lastplayer.sendWaterLevelUp(level, "waterLevel" + level, level >= 17);
    }
    if (level < 17) {
        if (level == 8) {
            for (i = 0; i < 6; i++) {
                mob = em.getMonster(9300888);
                eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-69, 168));
                mob.switchController(lastplayer, true);
            }
            eim.getMapInstance(2).getReactorById(9238003).forceHitReactor(2, 73, 0, -1);
        }
        eim.schedule("waterLevelUp", 2200);
    } else if (level == 17) {
        eim.getMapInstance(2).killAllMonsters(true);
        mob = em.getMonster(9300460);
        mob.setHp(parseInt(eim.getProperty("HP")));
        eim.registerMonster(mob);
        eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(354, -1032));
        //eim.displayNode(mob, lastplayer);
        eim.setProperty("kenta_batAttack", "1");
        eim.schedule("waterLevelUp", 1000);
    } else if (level < 22) {
        for (i = 0; i < 5; i++) {
            mob = em.getMonster(9300889);
            eim.getMapInstance(2).spawnMonsterOnGroundBelow(mob, new java.awt.Point(354, -1032));
            mob.switchController(lastplayer, true);
        }
        eim.schedule("waterLevelUp", 1200);
    } else if (level == 22) {
        eim.setProperty("kenta_batAttack", "2");
        eim.getMapInstance(2).startMapEffect("哎，我真的很讨厌蝙蝠。如果使用那边的杠杆，就能前往上面的出口。", 5120052);
    }
}
