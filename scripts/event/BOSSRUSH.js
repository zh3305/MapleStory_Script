function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("BOSSRUSH");
    var map = eim.setInstanceMap(262030300);
    map.resetFully();

    var mob1 = em.getMonster(8820101);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( 32, 98));

    em.setProperty("state", "1");

    eim.startEventTimer(3600000); // 60
    return eim;
}


function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(262030300);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    //return false;
	//player.addHP(5000);
    //var map = eim.getMapFactory().getMap(262030300);
	//定一个数值reive后，数值+1
	//再IF，数值>5时，getMap(991000000)
	//player.changeMap(map, map.getPortal(0));
	//return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 262030300) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0,0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    var mob2;
    var map = eim.getMapFactory().getMap(262030300);
    if (mobId == 8820101) {
		var mob5 = em.getMonster(8820200);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8950002);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		//var mob5 = em.getMonster(8880000);
        //var modified = em.newMonsterStats();
        //eim.registerMonster(mob5);
        //map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820200) {
		var mob5 = em.getMonster(8820201);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8840000);
        //var mob5 = em.getMonster(8880000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820201) {
		var mob5 = em.getMonster(8820202);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8870100);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820202) {
		var mob5 = em.getMonster(8820203);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8860000);
		var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820203) {
		var mob5 = em.getMonster(8820204);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8900002);
		var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));	
    } else if (mobId == 8820204) {
		var mob5 = em.getMonster(8820205);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));				
        var mob5 = em.getMonster(8900001);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
     //else if (mobId == 8820205 || mobId == 8920001 || mobId == 8920002 || mobId == 8920003) {
	}else if (mobId == 8820205) {
		var mob5 = em.getMonster(8820206);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8900000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820206) {
		var mob5 = em.getMonster(8820207);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8920000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820207) {
		var mob5 = em.getMonster(8820208);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8920001);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820208) {
		var mob5 = em.getMonster(8820209);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8920002);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820209) {
		var mob5 = em.getMonster(8820210);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8930000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));	
    } else if (mobId == 8820210) {
		var mob5 = em.getMonster(8820211);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8920003);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    } else if (mobId == 8820211) {
		var mob5 = em.getMonster(8820212);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8850011);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
        var mob5 = em.getMonster(8920003);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8930000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8900000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8840000);
		//var mob5 = em.getMonster(8880000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8860000);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
		var mob5 = em.getMonster(8870100);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    }else if (mobId == 8820212) {
        var mob5 = em.getMonster(9300807);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point( 32, 98));
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(100, 910000000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 910000000)) {
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