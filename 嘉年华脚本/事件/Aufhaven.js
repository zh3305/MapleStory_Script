/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：生化魔女欧碧拉 
 *  @Author Kent 
 */

var mapId = 802000821;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Aufhaven");
    var map = eim.setInstanceMap(802000821);
    map.resetFully();
    eim.getMapFactoryMap(802000821).killAllMonsters(false);
    var mob = em.getMonster(8220012);
    var modified = em.newMonsterStats();
    modified.setOHp(mob.getMobMaxHp() * 500);
    modified.setOMp(mob.getMobMaxMp() * 9000);
   // mob.getStats().setChange(true); // 让修改生效，否则虽然你那样设置了，召唤出来还是默认属性
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(27, 335));
    eim.startEventTimer(1000 * 60 * 60); // 30 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 802000821) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
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
    var map = eim.setInstanceMap(mapId);
    map.startMapEffect("生化魔女欧碧拉已被消灭，请在1分钟内点击NPC获得奖励。", 5120027);
    eim.startEventTimer(1000 * 60); //10 min
    eim.getMapInstance(0).spawnNpc(9310114, new java.awt.Point(-19, 335));
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}