/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：组队任务：御魔龙
 *  @Author Kent 
 */
﻿var minPlayers = 3;


function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Dragonica");
    eim.setInstanceMap(240080100).resetPQ(level);
    eim.setInstanceMap(240080200).resetPQ(level);
    var map = eim.setInstanceMap(240080300);
    map.resetPQ(level);
    var mob = em.getMonster(8300006);
    mob.changeLevel(level);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1550, 152));
    eim.setInstanceMap(240080400).resetPQ(level);
    var map1 = eim.setInstanceMap(240080500);
    map1.resetPQ(level);
    eim.setProperty("summon", "0");
    //revivemap
    eim.setInstanceMap(240080040).resetPQ(level);
    eim.setInstanceMap(240080050).resetPQ(level);
    eim.startEventTimer(1200000); //20 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    var state = parseInt(em.getProperty("state"));
    var revivemap = 240080040;
    if (state >= 4) {
        revivemap = 240080050;
    }
    var map = eim.getMapInstance(revivemap);
    player.addHP(50);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 240080100 && mapid != 240080200 && mapid != 240080300 && mapid != 240080400 && mapid != 240080500 && mapid != 240080040 && mapid != 240080050) {
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
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(1, 240080000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 240080000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    if (em.getProperty("state").equals("5") && eim.getMapInstance(4).getAllMonster().size() == 0) {
        eim.getMapInstance(4).spawnNpc(2085003, new java.awt.Point(-557, -10));
        eim.broadcastPlayerMsg(6, "御龙魔已被消灭，传送门已开启！");
    }
}

function leftParty(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(1, 240080000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}