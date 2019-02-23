importPackage(net.sf.odinms.world);

var exitMap;
var instanceId;

function init() {
	instanceId = 1;
        em.setProperty("shuffleReactors","true");
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(280090000); //room of tragedy
	var instanceName = "ZakumPQ" + instanceId;
	var eim = em.newInstance(instanceName);	
	var mf = eim.getMapFactory();
	instanceId++;
	var map = mf.getMap(280010000);
	map.shuffleReactors();
	var eventTime = 30 * (1000 * 60);
	eim.schedule("timeOut", eventTime);
	eim.startEventTimer(eventTime);
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(280010000);
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose();
	} else { //boot dead player
		playerExit(eim, player);
	}
	return false; // don't execute the standard reviving code
}

function playerDead(eim, player) {
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			} else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose();
	} else { //boot d/ced player
		removePlayer(eim, player);
	}
}

function leftParty(eim, player) {
	playerExit(eim, player);
}

function disbandParty(eim) {
	//boot whole party and end
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
}

//for offline players
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) {
	//ZPQ does nothing special with winners
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function timeOut() {
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		if (eim.getPlayerCount() > 0) {
			var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				playerExit(eim, pIter.next());
			}
		}
		eim.dispose();
	}
}