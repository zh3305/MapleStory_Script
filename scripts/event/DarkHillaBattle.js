/*
 *	远征任务：希拉 - 170 级困难模式
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("DarkHillaBattle");
    var map = eim.setInstanceMap(262031300); //设置活动脚本的地图
    map.resetFully();
    //map.setSpawns(false);
    //var mob = em.getMonster(8870100); //希拉 - 190级
    //var modified = em.newMonsterStats();
    //modified.setOMp(mob.getMobMaxMp());
    //modified.setOHp(mob.getMobMaxHp() * 6.0);
    //eim.registerMonster(mob);
    //map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(134, 196));
	
	em.setProperty("state", "1");
    eim.startEventTimer(600000); //10分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(262031300);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 262031300) {
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

function scheduledTimeout(eim) {
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

function monsterValue(eim, mobId) {
	var mob2;
    var map = eim.getMapFactory().getMap(262031300);
    if (mobId == 8870100) {
		var mob5 = em.getMonster(8870200);
        var modified = em.newMonsterStats();
        eim.registerMonster(mob5);
        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(134, 196));
	}
    return 1;
}

function allMonstersDead(eim) {
    //var state = em.getProperty("state");
    //if (state.equals("1")) {
        //em.setProperty("state", "2");
    //} else if (state.equals("2")) {
       //em.setProperty("state", "3");
    //}
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 910000000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function playerRevive(eim, player) {
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}