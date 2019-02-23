/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：希拉 - 120 级简单模式
 *  @Author Kent 
 */
//自定义复活次数
var reviveCount = 3;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossHillah_NORMAL");
    var map = eim.setInstanceMap(401100200); //设置活动脚本的地图
    map.resetFully(true); //重置地图
    map.setSpawns(false);
	map.spawnNpc(9310007, new java.awt.Point(564, -119));
    var mob = em.getMonster(8870000); //希拉 - 120级
    mob.getStats().setChange(true);
    mob.changeLevel(120);
    //mob.getChangedStats().setOHp(600000000);
    //mob.setHp(600000000);
    //var modified = em.newMonsterStats();
    //modified.setOMp(mob.getMobMaxMp());
    //modified.setOHp(mob.getMobMaxHp() * 6.0);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(59, 181));
    eim.startEventTimer(2700000); //45分钟
    return eim;
}

function playerEntry(eim, player) {
    player.restReviveCount();
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid!=401100200) {
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
    eim.disposeIfPlayerBelow(100, 262010000);
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
    var map = eim.getMapInstance(0);
			var players = map.getCharacters().iterator();
		    while (players.hasNext()) {
			   var player = players.next();
			   player.setPQLog("希拉");
		    }
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(262010000);
    player.changeMap(map, map.getPortal(0));
    return true;
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