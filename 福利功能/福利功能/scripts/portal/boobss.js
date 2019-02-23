

importPackage(net.sf.odinms.net.world);
importPackage(net.sf.odinms.net.channel);

var qtmap = 270000000;//时间到强退
var mapId = 271040100;//传送进去
var timeoutnum = 12000;//10分钟

function init() {
    exitMap = em.getChannelServer().getMapFactory().getMap(qtmap);
    em.setProperty("boobssOpen", "true");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("xinasi");
    var pqTime = timeoutnum; 
    eim.startEventTimer(pqTime);
    em.schedule("timeOut", pqTime);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(mapId);
    player.changeMap(map, map.getPortal(0));
    startInstance(eim); 
}

function playerDead(eim, player) {

}

function playerDisconnected(eim, player) {
    var party = eim.getPlayers();
    if (eim.isLeader(player)) {
        var party = eim.getPlayers();
        for (var i = 0; i < party.size(); i++) {
            if (party.get(i).equals(player)) {
                removePlayer(eim, player);
            } else {
                playerExit(eim, party.get(i));
            }
        }
        eim.dispose();
    } else {
        removePlayer(eim, player);
    }
}

function leftParty(eim, player) {
    playerExit(eim, player);
}

function disbandParty(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
        playerExit(eim, party.get(i));
    }
    em.setProperty("xinasiOpen", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, exitMap.getPortal(0));
}





function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
}



function allMonstersDead(eim) { 


} 

function cancelSchedule() {
}

function timeOut(eim) {
    em.setProperty("xinasiOpen", "true");
    if (eim != null) {
        if (eim.getPlayerCount() > 0) {
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                playerExit(eim, pIter.next());
            }
        }
        eim.dispose();
    }
}

function playerRevive(eim, player) {
    if (eim.isLeader(player)) { 
        var party = eim.getPlayers();
        for (var i = 0; i < party.size(); i++) {
            playerExit(eim, party.get(i));
        }
        eim.dispose();
    } else
        playerExit(eim, player);
}



function startInstance(eim) { 

} 

function dispose() {
    em.setProperty("xinasiOpen", "true");
}