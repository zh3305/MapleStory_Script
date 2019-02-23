var minPlayers = 1;

function init() {
}

function setup(value) {
    var eim = em.newInstance("ATT_Hook_Shot");
    var map = 814011100;
    eim.setProperty("max", "8");
    for (var i = 0; i < 8; i++) {
        eim.setInstanceMap(map + (i * 100)).resetFully();
        eim.setProperty("map" + i, "" + (map + (i * 100)));
    }
    eim.startEventTimer(300000); //5分鐘
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
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
    eim.disposeIfPlayerBelow(100, 814011900);
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