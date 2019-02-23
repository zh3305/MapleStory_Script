var exitMap;
var instanceId;
var minPlayers = 1;
var mapId=980000404;

function init() {
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit>
	var instanceName = "vip4" + instanceId;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (1000 * 60);
	em.schedule("timeOut", eventTime);
	em.schedule("monsterstart", 1000);
	em.setProperty("entryPossible", "1");
	eim.startEventTimer(eventTime);
	
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));
	player.message("[挑战公告] 不知天高地厚的家伙.看你能过几关.");
}

function monsterstart() {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600032);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = Math.floor(Math.random() * 150)+25;
        overrideStats.setHp(500000); 
        overrideStats.setExp(50000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(500000);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
        map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "[挑战公告] 先送给你一个见面礼,立即把它干掉,系统后面会提示."));
	}
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { 
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose();
	}
	else { //boot dead player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() <= minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) { //check for party leader
		//boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			}			
			else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose();
	}
	else { //boot d/ced player
		// If only 2 players are left, uncompletable:
		var party = eim.getPlayers();
		if (party.size() < minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose();
		}
		else
			playerExit(eim, player);
	}
}

function leftParty(eim, player) {			
	// If only 2 players are left, uncompletable:
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose();
	}
	else
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
	em.setProperty("entryPossible", "0");
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
	//KPQ does nothing special with winners
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9600032);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = Math.floor(Math.random() * 150)+25;
        if(em.getProperty("entryPossible").equals("1")==true){
            em.setProperty("entryPossible", "2");
            overrideStats.setHp(500000); 
            overrideStats.setExp(50000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(500000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(2);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("2")==true){
            em.setProperty("entryPossible", "3");
            overrideStats.setHp(2000000); 
            overrideStats.setExp(100000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(2000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(3);
				chrs.dropMessage(5,"恭喜,以通关！");
			}
        }else if(em.getProperty("entryPossible").equals("3")==true){
            em.setProperty("entryPossible", "4");
            overrideStats.setHp(10000000); 
            overrideStats.setExp(200000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(10000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(4);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("4")==true){
            em.setProperty("entryPossible", "5");
            overrideStats.setHp(50000000); 
            overrideStats.setExp(500000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(50000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(5);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("5")==true){
            em.setProperty("entryPossible", "6");
            overrideStats.setHp(100000000); 
            overrideStats.setExp(1000000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(100000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(6);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("6")==true){
            em.setProperty("entryPossible", "7");
            overrideStats.setHp(200000000); 
            overrideStats.setExp(2000000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(200000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(7);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("7")==true){
            em.setProperty("entryPossible", "8");
            overrideStats.setHp(500000000); 
            overrideStats.setExp(5000000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(500000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(8);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("8")==true){
            em.setProperty("entryPossible", "9");
            overrideStats.setHp(1000000000); 
            overrideStats.setExp(10000000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(1000000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(9);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("9")==true){
            em.setProperty("entryPossible", "10");
            overrideStats.setHp(2000000000); 
            overrideStats.setExp(10000000); 
            overrideStats.setMp(50000); 
            mob.setOverrideStats(overrideStats); 
            mob.setHp(2000000000);
			var eims = eim.getPlayers().iterator();
            while (eims.hasNext()) {
                var chrs=eims.next();
				//chrs.sethyd(10);
				chrs.dropMessage(5,"恭喜,以通关!");
			}
        }else if(em.getProperty("entryPossible").equals("10")==true){
            var iter = em.getInstances().iterator();
            while (iter.hasNext()) {
                var eim = iter.next();
                var pIter = eim.getPlayers().iterator();
                while (pIter.hasNext()) {
                var chr=pIter.next();
                    chr.startMapEffect("[恭喜您成功通关]", 5121008);
					//chr.sethyd(20);
					chr.dropMessage(5,"恭喜,以通关!");
                em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,"玩家 "+chr.getName()+" 在闯关副本中顺利冲完全关,大家膜拜它吧."));
                em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,"玩家 "+chr.getName()+" 在闯关副本中顺利冲完全关,大家膜拜它吧."));
                em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,"玩家 "+chr.getName()+" 在闯关副本中顺利冲完全关,大家膜拜它吧."));
				var map = eim.getMapFactory().getMap(mapId); 
				var xRand = Math.floor(Math.random() * 2)+1;
				var toDrop = new net.sf.odinms.client.Item(4002000, 0, 1);
				for (var i = 0; i < xRand; i++) {
					map.spawnItemDropdir(chr, chr,toDrop,chr.getPosition(), true, false);
				}
				toDrop = new net.sf.odinms.client.Item(2340000, 0, 1);
				map.spawnItemDropdir(chr, chr,toDrop,chr.getPosition(), true, false);
                }
            }
            
            return;
        }
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
        map.broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "[挑战公告] 第"+em.getProperty("entryPossible")+"关开始.带着怨恨的BOSS已经刷新,请全部干掉."));
	}
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
