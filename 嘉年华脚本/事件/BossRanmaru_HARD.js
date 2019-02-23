/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：RanmaruBoss 森兰丸
 *  @Author Kent 
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossRanmaru_HARD");
    var map = eim.setInstanceMap(807300210);
    //eim.setInstanceMap(807300220).resetFully();
    eim.setProperty("summon", "0");
    map.resetFully();
    eim.getMapFactoryMap(807300210).killAllMonsters(false);
    //map.spawnNpc(9131091, new java.awt.Point(-375, 122));
    var mob = em.getMonster(9421589);
	mob.getStats().setChange(true);
	mob.changeLevel(200);
	mob.getChangedStats().setOHp(210000000000);
    mob.setHp(210000000000);
	eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(201, 122));
    eim.startEventTimer(60 * 60 * 1000); //15分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
    if (mapid != 807300210 && mapid != 807300220) {
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
    eim.disposeIfPlayerBelow(100, 807300200);
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
	switch (mobId) {
        case 9421589:
			/*for (i = 0; i < eim.getPlayers().size(); i++) {
				eim.getPlayers().get(i).openNpc(9310136,"jiance");
			}*/
            break;
    }
    return 1;
}

function allMonstersDead(eim) {
	for (i = 0; i < eim.getPlayers().size(); i++) {
				eim.getPlayers().get(i).openNpc(9310136,"jiance");
            }
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactoryMap(807300100);
    player.changeMap(map, map.getPortal(0));
    player.restReviveCount();
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