/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：混沌品克缤
 *  @Author Kent 
 */

function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("ChaosPinkBean");
    eim.setInstanceMap(270051100).resetFully();
    eim.setInstanceMap(270051200).resetFully();
    em.setProperty("state", "1");
    eim.setProperty("summon", "0");
    eim.startEventTimer(3600000 * 1.5); // 1 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactoryMap(270050300);
    player.changeMap(map, map.getPortal(0));
    return true;

}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 270050300);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 270051100 && mapid != 270051200) {
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

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 270050300)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
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