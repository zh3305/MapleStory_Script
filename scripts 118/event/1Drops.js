function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("AkayileBattle" + leaderid);


    eim.setProperty("Akayile", "0");

    var map = eim.setInstanceMap(272020200);
    map.resetFully();

    var mob = em.getMonster(8860001);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point( -171, -181));
    map.spawnNpc(2144020, new java.awt.Point(11, -417));
    eim.startEventTimer(600000); // 10 F hrs
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
    eim.disposeIfPlayerBelow(100, 272020110);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 272020200) {
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
    eim.disposeIfPlayerBelow(100, 0);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    //var map = eim.setInstanceMap(272020200);
   // var aky = em.getMonster(8860000);
    if (eim.getProperty("Akayile").equals("0")) {
        eim.setProperty("Akayile", "1");
        var mob = em.getMonster(8860010);
        eim.registerMonster(mob);
        eim.Maplewingx("人类你们惹火了我，那就先解决掉你们！", 5120056);
        eim.broadcastPlayerMsg(-11, "<时间女神>伦娜：冒险家们请一定要坚持住！！");
        eim.getMapInstance(0).spawnMonsterOnGroundBelow(mob, new java.awt.Point(15, -181));
    } else {
        eim.getMapInstance(0).spawnNpc(2144016, new java.awt.Point(9, -270));
        //map.spawnNpc(2144016, new java.awt.Point(9, -270));
    }
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}







/*
var mapId = 272020200;
var item = Array(1102450,1102451,1102488,1003268,1003237,1003462,1003687,1003268,1000061,1050256,1070031,1001088,1051312,1071048,1003713,1052550,1082493,1003509,1052449,1003508,1052448,1112100,1532098,1522094,1492179,1482168,1472214,1462193,1452205,1442223,1432167,1422140,1412135,1402196,1382208,1372177,1362090,1342082,1332225,1322203,1312153,1302275,1242061,1242060,1232057,1222058,1212063,1702385,1702386,1702387,1702388,1702389,1702394,1702395,1702397,1702398,1702399,1702400,1702363,1702368,1702375,1702382,1702366,1702342,1142448); //稀有点装
var yp = Array(1,2,3,4,4,3,4,5,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); //邮票

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("AkayileBattle" + leaderid);

    eim.setProperty("Akayile", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();

    var mob = em.getMonster(9300306);
    var overrideStats = Packages.server.life.OverrideMonsterStats();
    var hprand = Math.floor(Math.random() * 1999999999999);
    overrideStats.setOHp(hprand);
    overrideStats.setOExp(2147483647);
    overrideStats.setOMp(200000);
    mob.setOverrideStats(overrideStats);
    mob.setHp(hprand);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(15, -181));

    eim.startEventTimer(72000000); // 4 hrs
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
    if (mapid != 401100100) {
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
        var iter = em.getInstances().iterator();
        while (iter.hasNext()) {
            var eim = iter.next();
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                var chr = pIter.next();
                //var winner = eim.getPlayers().get(0);
                var map = eim.getMapFactory().getMap(mapId);
                var randitem = Math.floor(Math.random() * item.length);
                var randyp = Math.floor(Math.random() * yp.length);
                var toDrop = new Packages.client.inventory.Item(4002002, 0, 1);
                for (var i = 0; i < yp[randyp]; i++) {
                    //map.spawnItemDrop(chr, chr, toDrop, chr.getPosition(), true, false);
		map.spawnAutoDrop(4002002,chr.getPosition());
                }
		var randx= Math.floor((Math.random()*2));
		var xwsj= Math.floor((Math.random()*20))+30;
                //toDrop = new Packages.client.inventory.Item(item[randitem], 0, 1);
                //map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
		map.spawnAutoDrop(item[randitem],chr.getPosition());
                map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "[●ω●提示]：恭喜，成功挑战心魔，获得了" + yp[randyp] + "张邮票和稀有点装奖励"));
            }
        }
    }

function leftParty(eim, player) {}

function disbandParty(eim) {}

function playerDead(eim, player) {}

function cancelSchedule() {}
*/
