var eventmapid = 932100000;
var returnmap = 910002000;
var reviveCount = 2;
var monster = new Array(
        9300003, // Slime King
        2220000, // Mano
        3220000, // Stumpy
        5220002, // Fraust
        6220000, // Dale
        9300012, // Alishar
        5220001, // King Clang
        8220000, // Eliza
        4220000, // Sherp
        7220001, // Old Fox
        5220003, // Timer
        9400633, //Astaroth
        3220001, // Dweu
        6220001, // Jeno
        7220000, // Tae Roon
        7220002, // Ghost Priest
        8220002, // Chimera
        6160003, //Xerxes
        8220001 // Yeti on Skis
        );

function init() {
// After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(9000207, new java.awt.Point(1581, -1348));

    eim.setProperty("points", 0);
    eim.setProperty("monster_number", 0);

    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(5000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var mob = em.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);

    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2483, -1348));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    var num = parseInt(eim.getProperty("monster_number"));
    if (num < monster.length) {
        monsterSpawn(eim);
        eim.setProperty("monster_number", num + 1);
    } else {
        eim.disposeIfPlayerBelow(100, returnmap);
    }
// When event timeout..

// restartEventTimer(long time)
// stopEventTimer()
// startEventTimer(long time)
// isTimerStarted()
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 5; // 765 points in total
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);

    eim.broadcastPlayerMsg(5, "获得了" + num + " 点数!当前共有 " + totalp + "点.");

    eim.saveBossQuest(num);

    if (mobnum < monster.length) {
        eim.broadcastPlayerMsg(6, "请准备,下一个BOSS即将出现!");
    } else {
        eim.saveBossQuest(200);
        eim.broadcastPlayerMsg(5, "你的队伍通过了简单模式获得了额外的200点数!");
    }
// When invoking unregisterMonster(MapleMonster mob) OR killed
// Happens only when size = 0
}

function playerDead(eim, player) {
	if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
        player.changeMap(map, map.getPortal(0));
		eim.broadcastPlayerMsg(5, "当前复活次数还有"+player.getReviveCount()+"次。");
        return true;
    }else{
		eim.broadcastPlayerMsg(5, "死亡次数超过"+reviveCount+"次，你将被传送出去");
		eim.disposeIfPlayerBelow(100, returnmap);
		return true;
	}
    player.addHP(50);
    var map = eim.getMapFactoryMap(401060000);
    player.changeMap(map, map.getPortal(0));
    return true;
// Happens when player dies
}

function playerRevive(eim, player) {
    return true;
// Happens when player's revived.
// @Param : returns true/false
}

function playerDisconnected(eim, player) {
    return 0;
// return 0 - Deregister player normally + Dispose instance if there are zero player left
// return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
// return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    return 0;
// Invoked when a monster that's registered has been killed
// return x amount for this player - "Saved Points"
}

function leftParty(eim, player) {
    // Happens when a player left the party
    eim.unregisterPlayer(player);

    var map = em.getMapFactoryMap(returnmap);
    player.changeMap(map, map.getPortal(0));

    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, returnmap);
}

function clearPQ(eim) {
// Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
// Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
// Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
// Happens when player change map - Unused for now.
}

function cancelSchedule() {
}
