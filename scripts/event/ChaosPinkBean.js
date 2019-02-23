function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("Pinkbean");
	var map = eim.setInstanceMap(270051100);
	map.resetFully();

    em.setProperty("state", "1");

    eim.startEventTimer(1800000); // 1 hr

    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(270051100);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 270050300);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 270051100) {
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
	var mob;
    var map = eim.getMapFactory().getMap(270051100);
    if (mobId == 8820002) {		
		var mob1 = em.getMonster(8950002);
		eim.registerMonster(mob1);
		map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));
	} else if (mobId == 8820001) {
		var mob1 = em.getMonster(8820101);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820101) {
		var mob1 = em.getMonster(8820200);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820200) {
		var mob1 = em.getMonster(8820201);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820201) {
		var mob1 = em.getMonster(8820202);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820202) {
		var mob1 = em.getMonster(8820203);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820203) {
		var mob1 = em.getMonster(8820204);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820204) {
		var mob1 = em.getMonster(8820205);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820205) {
		var mob1 = em.getMonster(8820206);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820206) {
		var mob1 = em.getMonster(8820207);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820207) {
		var mob1 = em.getMonster(8820208);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820208) {
		var mob1 = em.getMonster(8820209);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820209) {
		var mob1 = em.getMonster(8820210);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820210) {
		var mob1 = em.getMonster(8820211);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	} else if (mobId == 8820211) {
		var mob1 = em.getMonster(8820212);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob1);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 0, -50));	
	
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

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}