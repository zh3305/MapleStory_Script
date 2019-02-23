/*
 * 家族任务 - Event
 */

var mapz = Array(0, 100, 200, 300, 301, 400, 401, 410, 420, 430, 431, 440, 500, 501, 502, 600, 610, 611, 620, 630, 631, 640, 641, 700, 800, 900, 1000, 1100, 1101);
var minPlayer = 1;

function init() {
    em.setProperty("started", "false");
    em.setProperty("state", "0");
    em.setProperty("guildid", "-1");
}

var dropItems = new Array(
        //怪物ID，物品ID，爆率，最小值，最大值
        new Array(9300023, 4001028, 999999, 1, 1),
        new Array(9300022, 4001027, 999999, 1, 1),
        new Array(9300024, 4001035, 999999, 1, 1),
        new Array(9300027, 4001035, 999999, 1, 1),
        new Array(9300020, 4001026, 999999, 1, 1),
        new Array(9300028, 4001024, 999999, 1, 1)
        );

function monsterDrop(eim, player, mob) {
    player.dropMessage(5, mob.getId());
    var mobid = mob.getId();
    //var map = player.getMap();
    var toDrop = new Array();
    for (var i = 0; i < dropItems.length; i++) {
        if (mobid != dropItems[i][0])
            continue;
        var chance = Math.floor(Math.random() * 999999);
        if (chance < dropItems[i][2]) {
            var minQuantity = dropItems[i][3];
            var maxQuantity = dropItems[i][4];
            var quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1) + minQuantity);
            toDrop.push(new Array(dropItems[i][1], quantity));//载入暴率数组
        }
    }

    for (var i = 0; i < toDrop.length; i++) {
        player.getMap().spawnMobDrop(em.newItem(toDrop[i][0], 0, toDrop[i][1]), mob.getTruePosition(), mob, player, 0, 0);
    }
}

function monsterValue(eim, mobId) {
    if (eim.getMapFactory().getMap(990000630).getCharactersSize() != 0) {
        if (eim.getMapFactory().getMap(990000630).getAllMonstersThreadsafe().size() == 0) {
            //召唤9300027 8只 - -84,155
            for (var i = 0; i < 8; i++) {
                mobid = 9300027;
                mob = em.getMonster(mobid);
                modified = em.newMonsterStats();
                modified.setOHp(1000000000);
                modified.setOMp(mob.getMobMaxMp() * 2);
                mob.setOverrideStats(modified);
                eim.registerMonster(mob);
                var mapForMob = eim.getMapInstance(990000630);
                mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-84, 155));
            }
            return -1;
        }
    }
    return -1;
}

function setup(z) {
    setup();
}

function setup() {
    em.setProperty("guildid", "-1");
    em.setProperty("started", "false");
    em.setProperty("state", "0");
    var eim = em.newInstance("GuildQuest");
    eim.setProperty("canEnter", "false");
    var mapfact = eim.getMapFactory();
    for (var i = 0; i < mapz.length; i++) {
        var map = eim.setInstanceMap(990000000 + mapz[i]);
        if (map != null) {
            map.resetFully();
            map.killAllMonsters(true);
            map.respawn(false);
        }
    }
    mapfact.getMap(990000501).shuffleReactors();
    mapfact.getMap(990000502).shuffleReactors();

    //强制触发器重置
    mapfact.getMap(990000611).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000620).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000631).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000641).getReactorByName("").setDelay(-1);

    mapfact.getMap(990000000).getPortal(5).setScriptName("guildwaitingenter");
    eim.startEventTimer(1000 * 60 * 3); // 3分钟的等待时间
    eim.setProperty("entryTimestamp", java.lang.System.currentTimeMillis());
// 第四关怪物，因为没有暴率 只能通过这种方式来让他有暴率
    for (var i = 0; i < 2; i++) {
        mobid = 9300023;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000500);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-183, 155));
    }
    for (var i = 0; i < 2; i++) {
        mobid = 9300022;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000500);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-54, 155));
    }
    for (var i = 0; i < 2; i++) {
        mobid = 9300023;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000500);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(140, 155));
    }
    for (var i = 0; i < 2; i++) {
        mobid = 9300022;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000500);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(264, 155));
    }
//第五关 第一小关 9只怪物
    for (var i = 0; i < 9; i++) {
        mobid = 9300024;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(1000000000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000610);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(Math.floor(Math.random() * 1154) - 697, 185));
    }
    //-690/700,-179
    //第五关 第2小关 20只怪物
    for (var i = 0; i < 10; i++) {
        mobid = 9300027;
        mob = em.getMonster(mobid);
        modified = em.newMonsterStats();
        modified.setOHp(5000);
        modified.setOMp(mob.getMobMaxMp() * 2);
        mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        var mapForMob = eim.getMapInstance(990000640);
        mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(Math.floor(Math.random() * 1390) - 690, -179));
    }
    //第五关 第3小关  - 这个死后要召唤9300027 8只 - -84,155
    mobid = 9300025;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(10000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000630);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-84, -204));

    mobid = 9300020;
    mob = em.getMonster(mobid);
    modified = em.newMonsterStats();
    modified.setOHp(80000000);
    modified.setOMp(mob.getMobMaxMp() * 2);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var mapForMob = eim.getMapInstance(990000420);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(157, 155));//157,155
    return eim;
}

function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function scheduledTimeout(eim) {
    if (em.getProperty("state").equals("0")) {
        em.setProperty("state", "1");

        if (!disposePlayerBelow(eim, minPlayer, 990001100, "参与任务的人数必须大于6个人。")) {
            var iter = players(eim).iterator();
            while (iter.hasNext()) {
                iter.next().dropMessage(5, "家族任务已经开始了。");
            }
            em.setProperty("started", "true");
            eim.setProperty("canEnter", "true");
            eim.restartEventTimer(3600000);
        }
    } else if (em.getProperty("state").equals("1")) {
        disposePlayerBelow(eim, 100, 990001100, "真遗憾，时间到了。");
    } else if (em.getProperty("state").equals("2")) {
        finish(eim);
    }
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(990000000);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function playerDead(eim, player) {
}

function disposePlayerBelow(eim, size, mapid, msg) {
    var z = players(eim);
    var map = eim.getMapFactory().getMap(mapid);
    if (z.size() < size) {
        var iter = z.iterator();
        while (iter.hasNext()) {
            var cha = iter.next();
            eim.unregisterPlayer(cha);
            if (mapid > 0) {
                cha.changeMap(map, map.getPortal(0));
            }
            if (msg.length > 0) {
                cha.dropMessage(6, msg);
            }
        }
        em.setProperty("started", "false");
        eim.dispose();
        return true;
    }
    return false;
}

function players(eim) {
    var z = em.newCharList();
    for (var i = 0; i < mapz.length; i++) {
        var map = eim.getMapFactory().getMap(990000000 + mapz[i]);
        if (map != null) {
            var iter = map.getCharactersThreadsafe().iterator();
            while (iter.hasNext()) {
                var chaz = iter.next();
                if (("" + chaz.getGuildId()).equals(eim.getProperty("guildid")) && chaz.getEventInstance() != null && chaz.getEventInstance().getName().equals("GuildQuest")) {
                    z.add(chaz);
                }
            }
        }
    }
    return z;
}

function changedMap(eim, player, mapid) {
    if (mapid < 990000000 || mapid > 990002000) {
        eim.unregisterPlayer(player);
        if (player.getName().equals(eim.getProperty("leader"))) { //检查队长
            disposePlayerBelow(eim, 100, 990001100, "由于队长离开了任务，在场的人员将会被传送出去。");
        } else {
            if (disposePlayerBelow(eim, 0, 0, "")) {
                em.setProperty("started", "false");
            }
        }
    }
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    if (player.getName().equals(eim.getProperty("leader"))) {
        //boot all players and end
        disposePlayerBelow(eim, 100, 990001100, "由于队长离开了任务，在场的人员将会被传送出去。");
    } else {
        if (!em.getProperty("state").equals("0")) {
            disposePlayerBelow(eim, 5, 990001100, "参与任务的人数不够，在场的人员将会被传送出去。");
        }
    }
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (!em.getProperty("state").equals("0")) {
        disposePlayerBelow(eim, minPlayer, 990001100, "参与任务的人数不够，在场的人员将会被传送出去。");
    }
}

function clearPQ(eim) {
    var iter = eim.getPlayers().iterator();
    var bonusMap = eim.getMapFactory().getMap(990001000);

    bonusMap.resetReactors();

    while (iter.hasNext()) {
        var chr = iter.next();
        chr.changeMap(bonusMap, bonusMap.getPortal(0));
        chr.modifyCSPoints(1, 1000, true);
    }
    em.setProperty("state", "2");
    eim.restartEventTimer(120000); //2分钟的道具奖励
}

function finish(eim) {
    disposePlayerBelow(eim, 100, 990001100, "");
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function timeOut() {
}