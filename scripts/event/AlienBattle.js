/* 
 * 外星人
*/


function init() {
        em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("preheadCheck", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("alien");
    var map = eim.setInstanceMap(703020100);
    map.resetFully();
    var mob = em.getMonster(9600087); //设置怪物ID
    eim.registerMonster(mob);	
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(555, 227)); //设置怪物位子
    em.setProperty("state", "1");
    eim.startEventTimer(600000); //副本时间设置 60000=1分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(703020100);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 703020000);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 703020100 ) {
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


function end(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
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



function allMonstersDead(eim) {
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}