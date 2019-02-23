/* 
 * 斯乌完整
 */
var autoSpawnTask = null;
var coreMobId = 8240103;
var easyBossId = 8240098;
var hardBossId = 8240099;
var maps = Array();
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("SiwuPQ");
    maps[0] = eim.setInstanceMap(350060160);
	var map = maps[0];
	maps[1] = eim.setInstanceMap(350060180);
	maps[2] = eim.setInstanceMap(350060200);
    map.resetFully();
	maps[1].resetFully();
	maps[2].resetFully();
	eim.getMapFactory().getMap(350060160).killAllMonsters(false);
	eim.getMapFactory().getMap(350060180).killAllMonsters(false);
	eim.getMapFactory().getMap(350060200).killAllMonsters(false);
	/* 创建核心 */
	var mob = em.getMonster(coreMobId);  //核心
	var mobStats = em.newMonsterStats();
	mobStats.setOHp(50000000000);  //500E
	mobStats.setOMp(mob.getMobMaxMp() * 10);
	mob.setOverrideStats(mobStats);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-5,-16));
	/* 本体斯乌 */
	var bossEasy = em.getMonster(8240098);
	var mobStats = em.newMonsterStats();
	mobStats.setOHp(150000000000);  //500E
	mobStats.setOMp(bossEasy.getMobMaxMp() * 100);
	bossEasy.setOverrideStats(mobStats);
	eim.registerMonster(bossEasy);
	maps[1].spawnMonsterOnGroundBelow(bossEasy, new java.awt.Point(-20,-16));
	/* 暴怒斯乌 */
	var bossHard = em.getMonster(8240099);
	var mobStats = em.newMonsterStats();
	mobStats.setOHp(550000000000);  //1500E
	mobStats.setOMp(bossHard.getMobMaxMp() * 100);
	bossHard.setOverrideStats(mobStats);
	eim.registerMonster(bossHard);
	maps[2].spawnMonsterOnGroundBelow(bossHard, new java.awt.Point(-20,-16));
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	autoSpawnTask = eim.schedule("spawnBoomMob", 3000);
}

function playerRevive(eim, player) {
    return false;
}
//刷新自爆炸弹
function spawnBoomMob(eim) {
	var mobId = [8240100,8240101,8240102,8240121];
	var points = Array(
		Array(-425,-424),
		Array(-520,-253),
		Array(424,-420),
		Array(514,-258)
	);
	var map = eim.getMapInstance(0);
	for(var i = 0; i<4; i++) {
		var mob = em.getMonster(mobId[i]);
		mob.setPosition(new java.awt.Point(points[i][0], points[i][1]));
		if (i<=1)
			mob.setStance(2);   //面向
		var modified = em.newMonsterStats();
		modified.setOHp(mob.getMobMaxHp() * 100);
		modified.setOMp(mob.getMobMaxMp() * 3000);
		mob.setOverrideStats(modified);
		map.spawnMonster(mob, -2);
	}
	//每三秒自动刷新一次。
	if (eim.getProperty("state") != "2") {
		autoSpawnTask = eim.schedule("spawnBoomMob", 6000);
	}
}
function monsterDrop(eim, player, mob) {}

function changedMap(eim, player, mapid) {
    if (mapid != 350060160 && mapid != 350060180 && mapid != 350060200) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function nextStage(eim) {
	
	var state = parseInt(em.getProperty("state"));
	var delay = 6000;
	
	if (state > 3)
		delay = 3000;
	eim.schedule("warpPartyStage", delay);
	
}

function warpPartyStage(eim) {
	var state = parseInt(em.getProperty("state"));
	if (state == 5)
		return false;
	if (state == 4) {
		maps[2].spawnNpc(9075303, new java.awt.Point(326, -16));
		state = 3;
	}
	map = maps[state-1];
	var iter = eim.getPlayers().iterator();
	while (iter.hasNext()) {
		var chr = iter.next();
		chr.changeMap(map, map.getPortal(0));
	}
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
	if (mobId == coreMobId || mobId == easyBossId || mobId == hardBossId) {
		var state = parseInt(em.getProperty("state"));
		if (autoSpawnTask != null)
			autoSpawnTask.cancel(true);
		em.setProperty("state", state+1);
		nextStage(eim);
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
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {
	if ( autoSpawnTask != null )
		 autoSpawnTask.cancel(true);	
}