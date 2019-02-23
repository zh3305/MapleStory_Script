/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：怪物公园
 *  @Author Kent 
 */
var minPlayers = 1;

function init() {
}

function setup(mapid, level) {
    var eim = em.newInstance("MonsterPark" + mapid);
    var map = parseInt(mapid);
    var max = (map / 1000000 == 952 ? 5 : 6);
    eim.setProperty("max", "" + max);
    eim.setProperty("boss", "0");
    for (var i = 0; i < max; i++) {
        //eim.setInstanceMap(map + (i * 100)).resetFully();
        eim.setInstanceMap(map + (i * 100)).resetPQ(level);
        eim.setProperty("map" + i, "" + (map + (i * 100)));
    }
    eim.startEventTimer(1200000); //20 mins
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
    for (var i = 0; i < parseInt(eim.getProperty("max")); i++) {
        if (mapid == parseInt(eim.getProperty("map" + i))) {
            return;
        }
    }
    eim.unregisterPlayer(player);

    eim.disposeIfPlayerBelow(0, 0);
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 951000000);
}

function clearPQ(eim) {
    eim.EventGainNX();
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
function pickUpItem(eim, player, itemID) {
}