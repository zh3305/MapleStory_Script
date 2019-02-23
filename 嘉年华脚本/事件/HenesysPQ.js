var minPlayers = 1;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("randoms", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("HenesysPQ" + leaderid);
    em.setProperty("stage", "0");
    var map = eim.setInstanceMap(933001000);
    map.resetFully(false);
    map.setSpawns(false);
    //map.resetSpawnLevel(level);
    eim.startEventTimer(1000 * 60 * 10); //10 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1200);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 933001000) {
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
    if (mobId == 9300061) {
        eim.broadcastPlayerMsg(5, "月妙已死亡,任务失败.");
        end(eim);
    }
    return 1;
}

function removePlayer(eim, player) {
    eim.disposeIfPlayerBelow(100, 933009000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.disposeIfPlayerBelow(100, 933009000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    /*eim.unregisterPlayer(player);
     
     if (eim.disposeIfPlayerBelow(0, 0)) {
     em.setProperty("state", "0");
     em.setProperty("leader", "true");
     }*/
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 933009000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function killPig(eim) {
    var map = eim.getMapInstance(0);
    map.killAllMonsterById(9300901);
    map.killAllMonsterById(9300900);
    eim.schedule("killPig", 1000);
}

