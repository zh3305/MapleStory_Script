/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：进阶暗黑龙王
 *  @Author Kent 
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("ChaosHorntail");
    eim.setInstanceMap(240060001).resetFully();
    eim.setInstanceMap(240060101).resetFully();
    eim.setInstanceMap(240060201).resetFully();
    eim.startEventTimer(7200000); //2 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {

    var mob;
    switch (mapid) {
        case 240060001:
            if (em.getProperty("state").equals("1") && em.getProperty("preheadCheck").equals("1")) {
                mob = em.getMonster(8810128);
                eim.registerMonster(mob);
                em.setProperty("preheadCheck", "2");
                //eim.spawnMobOnMap(8810100,1,940,230,240060001);
                eim.setInstanceMap(240060001).spawnMonsterOnGroundBelow(mob, new java.awt.Point(940, 230));
            }
            return;
        case 240060101:
            if (em.getProperty("state").equals("2") && em.getProperty("preheadCheck").equals("2")) {
                mob = em.getMonster(8810129);
                em.setProperty("preheadCheck", "3");
                eim.registerMonster(mob);
                //eim.spawnMobOnMap(8810101,1,940,230,240060101);
                eim.setInstanceMap(240060101).spawnMonsterOnGroundBelow(mob, new java.awt.Point(-400, 230));
            }
            return;
        case 240060201:
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        //em.setProperty("leader", "true");
    }

}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 240050400);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");

    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}