/*
*/
var taskid = 140002;
var changeJobMap = 910000000; 	// 转职地图
var mX = 300, mY = 120;
var monsterID0 = 9601042;
var monsterID1 = 9601043;
var monsterID2 = 9601044;
var monsterID3 = 9601045;
var monsterID4 = 9601046;
var monsterID5 = 9601042;
var returnMap;
var expInformation;
var cp;
expInformation = 20000;
function init() {
	returnMap = em.getMapFactory().getMap(changeJobMap);
}


function setup() {
    
}


function playerEntry(eim, player) {
	eim.setProperty("finsh", "0");
	//eim.setObjectProperty("cp", 0);
	//eim.schedule("spawnMonster", 1000, player);
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();

    var mob = em.getMonster(9601042);
    var overrideStats = em.newMonsterStats();
    var hprand = Math.floor(Math.random() * 4999999999);
    overrideStats.setOHp(12090);
    overrideStats.setOExp(80000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(300, 120));
	 //em.spawnMonsterOnGroundBelow(player.getMap(), monster, (Math.floor(Math.random() * (mX * 2)) - mX), mY);

    eim.startEventTimer(2000000); // 4 hrs
    return eim;
}

function playerRevive(eim, player) {
	player.setStance(0);
	player.changeMap(player.getMap(), player.getMap().getPortal(0));
	return true;
}
function scheduledTimeout(eim) {
	var player = eim.getPlayers().get(0);
	eim.setProperty("finsh", "1");
	eim.stopEventClock();
	player.getMap().killAllMonsters(true);
	pauseTimer(eim, player);
	//player.Warp(910000000);
    player.openNpc(9310475, 5);
}

function changedMap(eim, player, mapid) {
	if (mapid != changeJobMap) {
		return;
	}
	pauseTimer(eim, player);
}

function playerExit(eim, player) {
	pauseTimer(eim, player);
	player.changeMap(returnMap, returnMap.getPortal(0));
}

function playerDisconnected(eim, player) {
	playerExit(eim, player);
	return 0;
}

function pauseTimer(eim, player) {
	var cp = eim.getObjectProperty("cp");
	em.insertRanking(player, "星星副本", cp);
	eim.unregisterPlayer(player);
	eim.dispose();
}




function playerDead(eim, player) {}
function monsterValue(eim, mobid) {
	cp = parseInt(eim.getObjectProperty("cp")) + 1;
	eim.setObjectProperty("cp", cp);
	eim.broadcastPlayerMsg(-1, "小绵羊：阿 这是第" + cp + " 只被宰杀的小绵羊了");
	return 0;
}

function monsterKilled(eim, player, cp) {}
function allMonstersDead(eim) {}
function monsterDamaged(eim, player, mobid, damage) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function onMapLoad(eim, player) { }
function monsterDrop(eim, player, mob) { }