importPackage(org.chinamsaction);
importPackage(org.character);

var exitMap;
var instanceId;
var minPlayers = 1;
var mapId=980000404;
var setupTask;
var item = 
Array(
			
			Array(1402022,400,1), //霸王剑
			Array(1402023,300,1), //亚历山大之剑
			Array(1402024,300,1), //大刀
			Array(1402025,300,1), //虎剑
			Array(1402026,300,1), //无极剑
			Array(1402027,300,1), //霸王剑
			Array(1402028,300,1), //亚历山大之剑
			Array(1402030,300,1), //大刀
			Array(1402031,300,1), //虎剑
			Array(1402032,300,1), //无极剑
			Array(1402033,300,1), //霸王剑
			Array(1402034,300,1), //亚历山大之剑
			Array(1402035,300,1), //斩天刀
			Array(1402036,300,1), //飞龙巨剑
			Array(1402046,100,1), //永恒玄冥剑
			//Array(1402047,100,1), //重生玄冥剑
			
			Array(1382032,300,1), //魔灵之翼
			Array(1382033,300,1), //死灵法杖
			Array(1382034,300,1), //魔灵之魂
			Array(1382035,300,1), //冰肌玲珑杖
			Array(1382036,300,1), //黑精灵王杖
			Array(1382037,300,1), //偃月之杖
			Array(1382039,300,1), //枫叶丹心杖
			Array(1382040,300,1), //枫叶3年旗
			Array(1382041,300,1), //夜行權杖
			Array(1382042,300,1), //粉色花边游泳圈
			Array(1382045,300,1), //火灵珠长杖
			Array(1382046,300,1), //毒灵珠长杖
			Array(1382047,300,1), //冰灵珠长杖
			Array(1382048,300,1), //雷灵珠长杖
			
			Array(1372030,300,1), //天使之翼
			Array(1372031,300,1), //圣贤短杖
			Array(1372032,300,1), //佘太君龙杖
			Array(1372033,300,1), //圣贤短杖
			Array(1372034,300,1), //枫叶仙姬杖
			Array(1372035,300,1), //火灵珠短杖
			Array(1372036,300,1), //毒灵珠短杖
			Array(1372037,300,1), //冰灵珠短杖
			Array(1372038,300,1), //雷灵珠短杖
			Array(1372039,300,1), //爆炎之杖
			Array(1372040,300,1), //剧毒之杖
			Array(1372041,300,1), //寒冰之杖
			Array(1372042,300,1), //狂雷之杖
			Array(1372043,300,1), //初级魔法师的杖
			Array(1372044,100,1), //永恒蝶翼杖
			Array(1372045,100,1), //重生蝶翼杖
			
			Array(1322028,300,1), //钉头锤
			Array(1322029,300,1), //雷神钉
			Array(1322031,300,1), //葵花宝典
			Array(1322032,300,1), //铁头锤
			Array(1322033,300,1), //鬼怪棒
			Array(1322034,300,1), //铁棍
			Array(1322035,300,1), //大战斗锤
			Array(1322036,300,1), //旋风锤
			Array(1322037,300,1), //巨型锤
			Array(1322038,300,1), //暴风锤
			Array(1322052,300,1), //狂龙地锤
			Array(1322054,300,1), //枫叶地震锤
			Array(1322055,300,1), //枫叶3年旗
			Array(1322056,300,1), //粉色花边游泳圈
			Array(1322060,100,1), //永恒惊破天
			//Array(1322061,100,1), //重生惊破天
			
			Array(1082158,300,1), //红色条纹手套
			Array(1082159,300,1), //蓝色条纹手套
			Array(1082160,300,1), //绿色条纹手套
			Array(1082163,300,1), //红猎人手套
			Array(1082164,300,1), //蓝色元素手套
			Array(1082167,300,1), //黑色格丽纳手套
			Array(1082168,300,1), //青龙手套
			Array(1082175,300,1), //马绍尔手套(赤)
			Array(1082176,300,1), //马绍尔手套(青)
			Array(1082177,300,1), //马绍尔手套(紫
			Array(1082178,300,1), //马绍尔手套(桃)
			Array(1082179,300,1), //马绍尔手套(黄)
			Array(1082234,100,1), //永恒定边手套
			Array(1082235,100,1), //永恒逍遥手套
			Array(1082236,100,1), //永恒白云手套
			Array(1082237,100,1), //永恒探云手套
			Array(1082238,100,1), //永恒抚浪手套
			Array(1082239,100,1), //重生定边手套
			Array(1082240,100,1), //重生逍遥手套
			Array(1082241,100,1), //重生白云手套
			Array(1082242,100,1), //重生探云手套
			Array(1082243,100,1), //重生抚浪手套
			
			Array(1002773,100,1), //金龙头盔
			Array(1002776,100,1), //永恒冠军盔
			Array(1002777,100,1), //永恒玄妙帽
			Array(1002778,100,1), //永恒霓翎帽
			Array(1002779,100,1), //永恒迷踪帽
			Array(1002780,100,1), //永恒海王星
			Array(1002790,100,1), //重生冠军盔
			Array(1002791,100,1), //重生玄妙帽
			Array(1002792,100,1), //重生霓翎帽
			Array(1002793,100,1), //重生迷踪帽
			Array(1002794,100,1), //重生海王星
			
			Array(1462037,300,1), //黑暗弩弓
			Array(1462039,300,1), //黄金飞龙弩
			Array(1462040,300,1), //枫叶击星弩
			Array(1462041,300,1), //枫叶3年旗
			Array(1462050,100,1), //永恒冥雷弩
			Array(1462051,100,1), //重生冥雷弩
			Array(1472051,300,1), //寒木升龙拳
			Array(1472052,300,1), //碧水落龙拳
			Array(1472053,300,1) //逆龙咆哮拳		 
			

);

function init() {
	scheduleNew();
	instanceId = 1;
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit>
	var instanceName = "vip8fs02" + instanceId;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
	instanceId++;
	var eventTime = 10 * (1000 * 60);
	em.schedule("timeOut", eventTime);
	eim.startEventTimer(eventTime);
	em.schedule("monsterstart", 1000);
	em.setProperty("entryPossible", "1");
	
	return eim;
}

function scheduleNew() {
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(mapId);
	player.changeMap(map, map.getPortal(0));
	player.message("[挑战公告] 不知死活的家伙~接招吧~~~.");
}

function allMonstersDead(eim) {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var winner = eim.getPlayers().get(0);
		var map = eim.getMapFactory().getMap(mapId);
        var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var chanced = 1 + Math.floor(Math.random() * 2);
		for(var ids = 0 ;ids<chanced.length;ids++){
			var chance = Math.floor(Math.random()*400);
			var finalitem = Array();
				for(var i = 0 ;i<item.length;i++){
					if(item[i][1] >= chance){
						finalitem.push(item[i]);
					}
				}
			if(finalitem.length != 0){
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
				if(ii.getInventoryType(itemId).getType() == 1){
					var chancedd = Math.floor(Math.random()*10);
					var toDrop = ii.getEquipById(itemId);
					if(chancedd<=5){
						toDrop = ii.getEquipByIdfs(itemId,1);
					}
					if(chancedd==1){
						toDrop = ii.getEquipByIdfs(itemId,1);
					}
				}else{
					var toDrop = new net.sf.odinms.client.Item(itemId, 0, quantity);
				}
				map.spawnItemDrop(winner, winner, toDrop, winner.getPosition(), true, false);
			}
		}
	}
}

function monsterstart() {
    var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		var mob = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300290);
        var overrideStats = new net.sf.odinms.server.life.MapleMonsterStats(); 
        var map = eim.getMapFactory().getMap(mapId); 
        var xRand = 330-Math.floor(Math.random() * 650);
        var hprand = Math.floor(Math.random() * 500000000)+1800000000;
        overrideStats.setHp(hprand); 
        overrideStats.setExp(50000); 
        overrideStats.setMp(50000); 
        mob.setOverrideStats(overrideStats); 
        mob.setHp(hprand);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroudBelow(mob, new java.awt.Point(xRand, 162));
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
