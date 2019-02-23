importPackage(java.lang);
importPackage(net.sf.odinms.client.character);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.server.maps);

var exitMap;
var minPlayers = 1;
var instanceId;
var eventmaps=950000000;
var levels=0;
var hp2rd=50;//调整副本怪物HP倍数
function init() {
    instanceId = 1;
}
function setup() {
    exitMap = em.getChannelServer().getMapFactory().getMap(951000000);
    var instanceName = "vipgy7" + instanceId;
    var eim = em.newInstance(instanceName);
    var mf = eim.getMapFactory();
    instanceId++;
    em.setProperty("newInstance",instanceName);
	//em.setProperty("entryPossible", "1");
    var eventTime = 20 * (1000 * 60);
    em.schedule("timeOut", eventTime);
    eim.startEventTimer(eventTime);
	
    return eim;
}
function playerEntry(eim, player) {
	levels=em.getProperty("levels");
	setl();
    var map = eim.getMapInstance(eventmaps);
    player.changeMap(map, map.getPortal(0));
	if (eim.isLeader(player)) { // Check for party leader
		monsterstarts(eim);//检查怪物重复刷新
	}
}

function monsterstarts(eim) {
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		if (eim.isLeader(party.get(i))) { // Check for party leader
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps).killAllMonsters(false);
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps+100).killAllMonsters(false);
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps+200).killAllMonsters(false);
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps+300).killAllMonsters(false);
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps+400).killAllMonsters(false);
			ChannelServer.getInstance(party.get(i).getClient().getChannel()).getMapFactory().getMap(eventmaps+500).killAllMonsters(false);
		}
	}
	eim.getMapFactory().getMap(eventmaps).killAllMonsters(false);
	eim.getMapFactory().getMap(eventmaps+100).killAllMonsters(false);
	eim.getMapFactory().getMap(eventmaps+200).killAllMonsters(false);
	eim.getMapFactory().getMap(eventmaps+300).killAllMonsters(false);
	eim.getMapFactory().getMap(eventmaps+400).killAllMonsters(false);
	eim.getMapFactory().getMap(eventmaps+500).killAllMonsters(false);
	var iter = eim.getMapFactory().getshouldmob().iterator();
	var mobs = net.sf.odinms.server.life.MapleLifeFactory.getMonster(100000);
	var x=0;
	var y=0;
	var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
	while (iter.hasNext()) {
		var nexts = iter.next();
		var maps=nexts.getLeft();
		var ms=nexts.getRight();
		if(maps.getId()>=eventmaps && maps.getId()<=(eventmaps+500)){
			mobs=net.sf.odinms.server.life.MapleLifeFactory.getMonster(ms.getId());
			overrideStats.setHp(mobs.getHp()*hp2rd); 
			mobs.setHp(mobs.getHp()*hp2rd);
			mobs.setOverrideStats(overrideStats); 
			x=ms.getPosition().x;
			y=ms.getPosition().y;
			eim.registerMonster(mobs);
			maps.spawnMonsterOnGroudBelow(mobs,new java.awt.Point(x, y));
		}
	}
}

function allMonstersDead(eim) {
	var eims = eim.getPlayers().iterator();
    while (eims.hasNext()) {
		var chrs=eims.next();
		chrs.DoJoKill();
	}
}

function monsterValue(eim, mobId) {
	return 1;
}

function playerDisconnected(eim, player) {
    if (eim.isLeader(player)) { // Check for party leader
        // Boot whole party and end
        var party = eim.getPlayers();
        for (var i = 0; i < party.size(); i++) {
            if (party.get(i).equals(player)) {
                removePlayer(eim, player);
            } else {
                playerExit(eim, party.get(i));
            }
        }
		setle();
		//em.setProperty("entryPossible", "0");
        eim.dispose();
    } else { // Boot disconnected player
        var party = eim.getPlayers();
        if (party.size() < minPlayers) {
            for (var i = 0; i < party.size(); i++) {
                playerExit(eim,party.get(i));
            }
            eim.dispose();
        } else
            playerExit(eim, player);
    }
}
function playerExit(eim, player) {
	if (eim.isLeader(player)) { // Check for party leader
		setle();
		//em.setProperty("entryPossible", "0");
	}
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, exitMap.getPortal(0));
}
// For offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
}
function disbandParty(eim) {
	//boot whole party and end
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose();
}

function leftParty(eim, player) {
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose();
	}else{
		playerExit(eim, player);
	}
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

function setl(){
	if(levels==1){
		eventmaps=952000000;
		em.setProperty("entryPossible1", "1");
	}else if(levels==2){
		eventmaps=952010000;
		em.setProperty("entryPossible2", "1");
	}else if(levels==3){
		eventmaps=952020000;
		em.setProperty("entryPossible3", "1");
	}else if(levels==4){
		eventmaps=952030000;
		em.setProperty("entryPossible4", "1");
	}else if(levels==5){
		eventmaps=952040000;
		em.setProperty("entryPossible5", "1");
	}else if(levels==6){
		eventmaps=953000000;
		em.setProperty("entryPossible6", "1");
	}else if(levels==7){
		eventmaps=953010000;
		em.setProperty("entryPossible7", "1");
	}else if(levels==8){
		eventmaps=953020000;
		em.setProperty("entryPossible8", "1");
	}else if(levels==9){
		eventmaps=953030000;
		em.setProperty("entryPossible9", "1");
	}else if(levels==10){
		eventmaps=953040000;
		em.setProperty("entryPossible10", "1");
	}else if(levels==11){
		eventmaps=953050000;
		em.setProperty("entryPossible11", "1");
	}else if(levels==12){
		eventmaps=954000000;
		em.setProperty("entryPossible12", "1");
	}else if(levels==13){
		eventmaps=954010000;
		em.setProperty("entryPossible13", "1");
	}else if(levels==14){
		eventmaps=954020000;
		em.setProperty("entryPossible14", "1");
	}else if(levels==15){
		eventmaps=954030000;
		em.setProperty("entryPossible15", "1");
	}else if(levels==16){
		eventmaps=954040000;
		em.setProperty("entryPossible16", "1");
	}else if(levels==17){
		eventmaps=954050000;
		em.setProperty("entryPossible17", "1");
	}
}

function setle(){
	if(eventmaps==952000000){
		em.setProperty("entryPossible1", "0");
	}else if(eventmaps==952010000){
		em.setProperty("entryPossible2", "0");
	}else if(eventmaps==952020000){
		em.setProperty("entryPossible3", "0");
	}else if(eventmaps==952030000){
		em.setProperty("entryPossible4", "0");
	}else if(eventmaps==952040000){
		em.setProperty("entryPossible5", "0");
	}else if(eventmaps==953000000){
		em.setProperty("entryPossible6", "0");
	}else if(eventmaps==953010000){
		em.setProperty("entryPossible7", "0");
	}else if(eventmaps==953020000){
		em.setProperty("entryPossible8", "0");
	}else if(eventmaps==953030000){
		em.setProperty("entryPossible9", "0");
	}else if(eventmaps==953040000){
		em.setProperty("entryPossible10", "0");
	}else if(eventmaps==953050000){
		em.setProperty("entryPossible11", "0");
	}else if(eventmaps==954000000){
		em.setProperty("entryPossible12", "0");
	}else if(eventmaps==954010000){
		em.setProperty("entryPossible13", "0");
	}else if(eventmaps==954020000){
		em.setProperty("entryPossible14", "0");
	}else if(eventmaps==954030000){
		em.setProperty("entryPossible15", "0");
	}else if(eventmaps==954040000){
		em.setProperty("entryPossible16", "0");
	}else if(eventmaps==954050000){
		em.setProperty("entryPossible17", "0");
	}
}
function playerRevive(eim, player) {
	if (eim.isLeader(player)) { // Check for party leader
		// Boot whole party and end
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		setle();
        eim.dispose();
	} else { // Boot dead player
		var party = eim.getPlayers();
        if (party.size() < minPlayers) {
            for (var i = 0; i < party.size(); i++) {
                playerExit(eim,party.get(i));
            }
            eim.dispose();
        } else
            playerExit(eim, player);
	}
}
function playerDead(eim, player) {
}