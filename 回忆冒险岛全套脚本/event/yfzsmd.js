var mapId = 910023100;
var item = Array(1000050,1050227,1001076,1042081,1102453,1102390,1102389,1102385,1102385,1102385,1102385,1102386,1102386,1102386,1102386,1102368,1102367,1102367,1102367,1102367,1102367,1102367,1102367,1102367,1102358,1102358,1102358,1102358,1102358,1102358,1102358,1102355,1102355,1102355,1102355,1102355,1102355,1102355,1102355); //稀有点装
var yp = Array(1,2,3,4,5,6,7,8,9,10); //邮票

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);

    eim.setProperty("vergamotSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();

    var mob = em.getMonster(9500390);//魔帝
    var overrideStats = em.newMonsterStats();
    var hprand = Math.floor(Math.random() * 50000000)+1200000000;
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(20000000);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-533,3)); //刷出这个怪物

    eim.startEventTimer(300000); // 4 hrs
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 910023100) {
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

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
        
    }

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}