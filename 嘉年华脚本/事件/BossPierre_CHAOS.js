/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：进阶皮埃尔 Chaos
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossPierre_CHAOS");
    var map = eim.setInstanceMap(105200610);
    map.resetFully();
    eim.setProperty("show", "0");
    eim.getMapFactoryMap(105200610).killAllMonsters(false);
    var mob = em.getMonster(8900000);
    mob.getStats().setChange(true);
    mob.changeLevel(200);
    mob.handleDeadBound(2);
    //mob.setReduceDamageType(1);
    mob.getChangedStats().setOHp(300000000000);
    mob.setHp(300000000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(497, 551));
    eim.startEventTimer(30 * 60 * 1000); //30分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
    player.writeMapEventEffect("rootabyss/firework");
	player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
    player.writeEnergy("rootabossRegen", "1");
    if (mapid != 105200610) {
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
    eim.disposeIfPlayerBelow(100, 105200000);
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
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
	var map = eim.getMapInstance(0);
	var players = map.getCharacters().iterator();
	while (players.hasNext()) {
		var player = players.next();
		player.setPQLog("进阶皮埃尔");
	}
    var map = eim.getMapInstance(0);
    var mob = em.getMonster(8900003);
    mob.getStats().setChange(true);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(497, 551));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105200000);
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